const axios = require("axios");

export const getPokemons = (page) => {
    return async function (dispatch) {
        const json = await axios.get('http://localhost:3001/pokemons?page=' + page);

        return dispatch({
            type: 'LOAD_POKEMONS',
            payload: json.data
        });
    };
};

export const queryPokemon = (query) => {
    return async function (dispatch) {
        var json = await axios.get('http://localhost:3001/pokemons?name=' + query)

        return dispatch({
            type: 'LOAD_POKEMONS',
            payload: json.data
        })
    }
};

export const getDetail = (idPokemon) => {
    return async function (dispatch) {
        var json = await axios.get('http://localhost:3001/pokemons/' + idPokemon)

        return dispatch({
            type: 'LOAD_DETAIL',
            payload: json.data
        })
    }
};

export const changePage = (page) => {
    return async function (dispatch) {
        return dispatch({
            type: 'CHANGE_PAGE',
            payload: page
        })
    }
};

export const addPokemons = (addPokemon) => {
    return async function (dispatch) {
        return dispatch({
            type: 'ADD_POKEMON',
            payload: addPokemon
        })
    }
};
