const { Router, query } = require('express');
const { Sequelize } = require('sequelize');
const axios = require('axios')
const Op = Sequelize.Op;

const { Pokemon, Type } = require('../db');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

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

////////////////////////////////////////////////////// ~ GET /pokemons - 1
/////////////////////////////////////////// ~ GET /pokemons?name="..." - 3
router.get('/pokemons', async (req, res) => {
    if (req.query.name) return res.send(await getPokemon(req.query.name))
    return res.send(await getPokemons())
})

////////////////////////////////////////// ~ GET /pokemons/{idPokemon} - 2
const getPokemonByIdApi = async (idPokemon) => {
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
}

const getPokemonByIdDatabase = async (idPokemon) => {
    const pokemon = await Pokemon.findByPk(idPokemon, {
        include: [
            { model: Type, attributes: ["name"], through: { attributes: [] } }
        ]
    })
    
    if (pokemon) return {
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

    return null
}

router.get('/pokemons/:idPokemon', async (req, res) => {
    const { idPokemon } = req.params

    if (idPokemon.length === 36) return res.send(await getPokemonByIdDatabase(idPokemon))

    const pokemon = await getPokemonByIdApi(idPokemon)

    return res.send(pokemon)
})

///////////////////////////////////////////////////// ~ POST /pokemons - 4
router.post('/pokemons', async (req, res) => {

    const { name, hp, strength, attack, defense, speed, height, weight, types } = req.body;

    if (!name) res.status(422).send('this field is required');

    const pokemon = await Pokemon.create({ name, hp, strength, attack, defense, speed, height, weight });

    const type = await Type.findAll({ where: { name: { [Op.in]: types } } });

    // console.log(req.body)

    pokemon.addType(type);
    // console.log(type)

    // Type.create( { name: "water" })

    res.status(200).json({ message: 'correct action' });
})

///////////////////////////////////////////////////////// ~ GET /types - 4
router.get('/types', async (req, res) => {
    const api = await axios.get('https://pokeapi.co/api/v2/type');

    const types = api.data.results.map(async r => await Type.findOrCreate({
        where: { name: r.name }
    }))

    res.send(types)
})

module.exports = router;
