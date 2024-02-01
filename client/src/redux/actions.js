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

export const getTypes = () => {
    return async function (dispatch) {
        const json = await axios.get('http://localhost:3001/types');

        return dispatch({
            type: 'LOAD_TYPES',
            payload: json.data
        });
    };
};

export const addPokemon = (pokemon) => {
    return async function (dispatch) {
        const json = await axios.post('http://localhost:3001/pokemons', pokemon);

        return dispatch({
            type: 'LOAD_MESSAGE',
            payload: json.data
        })
    }
};

export const setOrder = (order, pokemons) => {
    return async function (dispatch) {
        console.log(order)
        // const orders = {
        //     'A - Z': pokemons.sort((a, b) => a.name.localeCompare(b.name)),
        //     'Z - A': pokemons.sort((a, b) => b.name.localeCompare(a.name)),
        //     'Attack: Asc - Desc': pokemons.sort((a, b) => b.attack - a.attack),
        //     'Attack: Desc - Asc': pokemons.sort((a, b) => a.attack - b.attack),
        // }

        const data = pokemons.sort((a, b) => a.name.localeCompare(b.name))

        return dispatch({
            type: 'LOAD_POKEMONS',
            payload: data,
        })
    }
};

export const setFilter = (filter) => {
    return async function (dispatch) {
        return dispatch({
            type: 'LOAD_FILTER',
            payload: filter
        })
    }
};
