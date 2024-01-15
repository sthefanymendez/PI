const axios = require("axios");

export const getPokemons = () => {
    return async function(dispatch) {
        const json = await axios.get('http://localhost:3001/pokemons');
        return dispatch({
            type: 'LOAD_POKEMONS',
            payload: json.data
        });
    };
};

export const queryPokemon = (query) => {
    return async function(dispatch) {
        var json = await axios.get('http://localhost:3001/pokemons?name=' + query)
        
        return dispatch({
            type: 'LOAD_POKEMONS',
            payload: json.data
        })
    }
}



export const getDetail = (idPokemon) => {
    return async function(dispatch) {
        var json = await axios.get('http://localhost:3001/pokemons/' + idPokemon)
        
        return dispatch({
            type: 'LOAD_DETAIL',
            payload: json.data
        })
    }
}
