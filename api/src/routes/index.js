const { Router, query } = require('express');
const pokemons = require("./urls/pokemons");
const types = require("./urls/types");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/pokemons", pokemons);
router.use("/types", types);

module.exports = router;
