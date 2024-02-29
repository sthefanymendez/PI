const axios = require("axios");

const sanitizeArray = (array) => {
    return array.filter((value, index, self) => {
        return self.findIndex(obj => obj.id === value.id) === index;
    });
}

const setOrder = (order, pokemons) => {
    switch (order) {
        case 'a-z':
            return pokemons.sort((a, b) => {
                return a.name.localeCompare(b.name);
            })
        case 'z-a':
            return pokemons.sort((a, b) => {
                return b.name.localeCompare(a.name);
            })
        case 'attack-asc-desc':
            return pokemons.sort((a, b) => {
                return b.attack - a.attack
            })
        case 'attack-desc-asc':
            return pokemons.sort((a, b) => {
                return a.attack - b.attack
            })
        default: return pokemons;
    }
}

const setFilters = (filters, pokemons) => {
    const data = []

    for (const pokemon of pokemons) {
        for (const type of pokemon.types) {
            if (filters.includes(type.name.toLowerCase()) && !data.includes(pokemon)) data.push(pokemon)
        }
    }

    return data
}

export const getPokemons = ({ page, filters, order }) => {
    try {

        return async function (dispatch) {
            let data = []

            const json = await axios.get('http://localhost:3001/pokemons');

            data = sanitizeArray(json.data)

            if (filters) data = setFilters(filters.split(','), data)
            if (order) data = setOrder(order, data)

            const indexOfLastItem = page * 12
            const indexOfFirstItem = indexOfLastItem - 12
            const pokemons = data.slice(indexOfFirstItem, indexOfLastItem)

            return dispatch({
                type: 'LOAD_POKEMONS',
                payload: pokemons
            });
        };
    } catch (error) {
        console.log(error)
    }
};

export const queryPokemon = (pokemon) => {
    return async function (dispatch) {
        const json = await axios.get('http://localhost:3001/pokemons?name=' + pokemon)
        return dispatch({
            type: 'LOAD_POKEMONS',
            payload: json.data
        });
    };
};

export const getDetail = (idPokemon) => {
    return async function (dispatch) {
        const json = await axios.get('http://localhost:3001/pokemons/' + idPokemon)
        return dispatch({
            type: 'LOAD_DETAIL',
            payload: json.data
        })
    }
};

export const getTypes = () => {
    return async function (dispatch) {
        const json = await axios.get('http://localhost:3001/types')

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