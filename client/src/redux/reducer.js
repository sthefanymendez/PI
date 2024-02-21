let initialState = {
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
    // case 'CHANGE_PAGE':
    //   return {
    //     ...state,
    //     page: action.payload,
    //   };
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
        pokemons: action.payload,
      };
    // case 'STATE_FILTERS':
    //   return {
    //     ...state,
    //     types: action.payload,
    //   };
    // case 'SET_URL':
    //   return {
    //     ...state,
    //     url: action.payload,
    //   };
    default: return state;
  };
};

export default reducer;