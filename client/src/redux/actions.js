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

// export const setOrder = (arrange) => {
//     return async function (dispatch) {
//         const json = await axios.get('http://localhost:3001/pokemons'+ arrange);

//         return dispatch({
//             type: 'LOAD_ORDER',
//             payload: json.data
//         })
//     }
// };

export const setOrder = (arrange) => {
    return async function (dispatch) {
        return dispatch({
            type: 'LOAD_ORDER',
            payload: arrange
        })
    }
};
