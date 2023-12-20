const { Sequelize } = require("sequelize");
const axios = require("axios");
const Op = Sequelize.Op;

const { Pokemon, Type } = require('../../db');

const getPokemonsApi = async () => {
    const pokemons = []

    for (let i = 1; i <= 40; i++) {
        const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)

        pokemons.push({
            id: pokemon.data.id,
            name: pokemon.data.name,
            image: pokemon.data.sprites.other.home.front_default,
            types: pokemon.data.types.map(r => {
                return { name: r.type.name }
            })
        })
    }

    return pokemons
}

const getPokemonsDatabase = async () => {
    const pokemons = []

    const database = await Pokemon.findAll({
        include: [
            { model: Type, attributes: ["name"], through: { attributes: [] } }
        ]
    })

    database.map(r => pokemons.push({
        id: r.id,
        name: r.name,
        types: r.types.map(r => {
            return { name: r.name }
        })
    }))

    return pokemons
}

const getPokemons = async () => {
    const api = await getPokemonsApi()
    const database = await getPokemonsDatabase()

    return [...api, ...database]
}

const getPokemonApi = async (name) => {
    const api = await axios.get('https://pokeapi.co/api/v2/pokemon/' + name)

    return [{
        id: api.data.id,
        name: api.data.name,
        image: api.data.sprites.other.home.front_default,
        types: api.data.types.map(r => {
            return { name: r.type.name }
        })
    }]
}

const getPokemonDatabase = async (name) => {
    const pokemon = await Pokemon.findAll({
        where: { name: { [Op.iLike]: name } },
        include: [
            { model: Type, attributes: ["name"], through: { attributes: [] } }
        ]
    })

    if (pokemon.length > 0) return [{
        id: pokemon[0].id,
        name: pokemon[0].name,
        types: pokemon[0].types.map(r => {
            return { name: r.name }
        })
    }]

    return []
}

const getPokemon = async (name) => {
    const database = await getPokemonDatabase(name)
    if (database.length > 0) return database
    return await getPokemonApi(name)
}

const getPokemonByIdApi = async (idPokemon) => {
    try {
        const api = await axios.get('https://pokeapi.co/api/v2/pokemon/' + idPokemon)

        const stats = {};

        api.data.stats.forEach(r => {
            if (["hp", "speed", "defense", "attack"].includes(r.stat.name)) {
                stats[r.stat.name] = r.base_stat;
            }
        })

        return {
            id: api.data.id,
            name: api.data.name,
            image: api.data.sprites.other.home.front_default,
            types: api.data.types.map(r => {
                return {
                    name: r.type.name
                }
            }),
            hp: stats.hp,
            attack: stats.attack,
            strength: api.strength,
            defense: stats.defense,
            speed: stats.speed,
            height: api.data.height,
            weight: api.data.weight,
        }

    } catch (error) {
        return { message: "Error 404 not found" }
    }

}

const getPokemonByIdDatabase = async (idPokemon) => {
    try {
        const pokemon = await Pokemon.findByPk(idPokemon, {
            include: [
                { model: Type, attributes: ["name"], through: { attributes: [] } }
            ]
        })

        return {
            id: pokemon.id,
            name: pokemon.name,
            types: pokemon.types.map(r => {
                return {
                    name: r.name
                }
            }),
            hp: pokemon.hp,
            attack: pokemon.attack,
            strength: pokemon.strength,
            defense: pokemon.defense,
            speed: pokemon.speed,
            height: pokemon.height,
            weight: pokemon.weight,
        }
    } catch (error) {
        return { message: "Error 404 not found" }
    }
}

const getPokemonId = async (idPokemon) => {
    if (idPokemon.length === 36) return await getPokemonByIdDatabase(idPokemon)
    return await getPokemonByIdApi(idPokemon)
}

module.exports = {
    getPokemons,
    getPokemon,
    getPokemonId
};