let initialState = {
  pokemonsLoad: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_POKEMONS':
      return {
        ...state,
        pokemonsLoad: action.payload,
      };
      default: return state;
  };
};

export default reducer;