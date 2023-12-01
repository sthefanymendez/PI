const { Router } = require('express');
const { Pokemon, Type } = require('../db')
// Importar todos los routers;
// const Pokemon = require('../models/Pokemon.js')
// const Type = require('../models/Type.js')
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.get('/pokemon', async (req, res) => {

// })
router.post('/pokemon', async (req, res) => {
    // Pokemon.create({ name: 'xbcnxc' })
    // await fetch('https://pokeapi.co/api/v2/pokemon')
    //     .then(response => response.json())
    //     .then(data => res.json(data))

    const { name, hp, strength, defense, speed, height, weight } = req.body;

    if (!name) return res.status(422).send('this field is required');

    const pokemon = await Pokemon.create({ name, hp, strength, defense, speed, height, weight });

    const type = await Type.findAll({
        where: { name: { [Op.in]: types } }
    });
    
    pokemon.addType(type);

    res.status(200).json({ message: 'correct action' });
    
    // console.log(defense)
});

module.exports = router;
