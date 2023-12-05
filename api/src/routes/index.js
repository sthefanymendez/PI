const { Router } = require('express');
const { Pokemon, Type } = require('../db');
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;
const axios = require('axios')
// Importar todos los routers;
// const Pokemon = require('../models/Pokemon.js')
// const Type = require('../models/Type.js')
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.get('/pokemon', async (req, res) => {

// })
router.get('/pokemons', async (req, res) => {
    // const database = await Pokemon.findAll()

    const api = []

    for (let i = 1; i <= 40; i++) {
        const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        let { 
            id, 
            name, 
            sprites: { other: { home: { front_default: image } } }, 
            types, 
        } = pokemon.data

        // types = types.map(r => r.type.name)
        
        api.push({ id, name, image, types })
    };

    res.send(api)
    // res.send(api.data) 
});

router.post('/pokemon', async (req, res) => {
    // Pokemon.create({ name: 'xbcnxc' })
    // await fetch('https://pokeapi.co/api/v2/pokemon')
    //     .then(response => response.json())
    //     .then(data => res.json(data))

    const { name, hp, strength, defense, speed, height, weight, types } = req.body;

    // if (!name) return res.status(422).send('this field is required');

    // const pokemon = await Pokemon.create({ name, hp, strength, defense, speed, height, weight });


    const type = await Type.findAll({ where: { name: { [Op.in]: types } } });

    // console.log(req.body)

    // pokemon.addType(type);
    // console.log(type)

    // Type.create( { name: "water" })

    res.status(200).json({ message: 'correct action' });
});


module.exports = router;
