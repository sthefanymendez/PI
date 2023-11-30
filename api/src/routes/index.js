const { Router } = require('express');
// const { Pokemon } = require('../db')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post('/pokemon', async (req, res) => { 
    // Pokemon.create({ name: 'xbcnxc' })
    // await fetch('https://pokeapi.co/api/v2/pokemon')
    //     .then(response => response.json())
    //     .then(data => res.json(data))
    const { id, name, hp, strength, defense, speed, height, weight } = req.body;
    if (!id || !name) {
        res.json({ error: 'this field is required' })
    }
    // console.log(defense)

    res.json({ message: 'correct action'})
    
});


module.exports = router;
