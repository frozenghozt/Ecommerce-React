const initialState = [];

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART":
      return state.some(({ uid }) => uid === action.payload.uid)
        ? state
        : [...state, action.payload];
    case "REMOVE_CART":
      return state.filter(({ uid }) => uid !== action.payload.uid);
    default:
      return state;
  }
};
