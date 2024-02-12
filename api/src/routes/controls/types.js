const axios = require("axios");
const { Type } = require('../../db');

const getTypes = async () => {
    const api = await axios.get('https://pokeapi.co/api/v2/type');
    
    api.data.results.map(async r => await Type.findOrCreate({
        where: { name: r.name }
    }))
    const data = await Type.findAll()
    
    return data.map(r => {
        return { name: r.name, state: false }
    })
};

module.exports = getTypes
