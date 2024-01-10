let initialState = {
  gamesLoad: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_GAMES':
      return {
        ...state,
        gamesLoad: action.payload,
      };
      default: return state;
  };
};

export default reducer;