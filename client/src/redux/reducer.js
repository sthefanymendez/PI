export let initialState = {
  pokemons: [],
  detail: {},
  types: [],
  message: {},
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
    case 'LOAD_TYPES':
      return {
        ...state,
        types: action.payload,
      };
    case 'LOAD_MESSAGE':
      return {
        ...state,
        message: action.payload,
      };
    case 'LOAD_SORT':
      return {
        ...state,
        sort: action.payload,
      };
    case 'SET_POKEMONS':
      return {
        ...state,
        pokemons: action.payload,
      };
    default: return state;
  };
};

export default reducer;