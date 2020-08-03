const initialState = [];

export const favorite = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return state.some(({ uid }) => uid === action.payload.uid)
        ? state
        : [...state, action.payload];
    case "REMOVE_FAVORITE":
      return state.filter(({ uid }) => uid !== action.payload.uid);
    default:
      return state;
  }
};
