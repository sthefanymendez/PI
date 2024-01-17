let initialState = {
  pokemons: [],
  detail: {},
  page: 1
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_POKEMONS':
      return {
        ...state,
        pokemons: action.payload,
      };
    case 'LOAD_DETAIL':
      return {
        ...state,
        detail: action.payload,
      };
    case 'CHANGE_PAGE':
      return {
        ...state,
        page: action.payload,
      };
    case 'ADD_POKEMON':
      return {
        ...state,
        addPokemon: action.payload,
      };
    default: return state;
  };
};

export default reducer;