const router = require("express").Router();
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

const { Pokemon, Type } = require('../../db');
const { getPokemons, getPokemon, getPokemonId } = require("../controls/pokemons");

router.get('/', async (req, res) => {
    if (req.query.name) return res.send(await getPokemon(req.query.name))
    return res.send(await getPokemons(req.query.page))
})

router.get('/:idPokemon', async (req, res) => {
    const { idPokemon } = req.params

    res.send(await getPokemonId(idPokemon))
})

router.post('/', async (req, res) => {

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

module.exports = router;