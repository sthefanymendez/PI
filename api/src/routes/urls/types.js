const router = require("express").Router();
const axios = require("axios");
// const { get?, get? } = require("../control/types");

router.get('/', async (req, res) => {
    const api = await axios.get('https://pokeapi.co/api/v2/type');

    const types = api.data.results.map(async r => await Type.findOrCreate({
        where: { name: r.name }
    }))

    res.send(types)
})

module.exports = router;