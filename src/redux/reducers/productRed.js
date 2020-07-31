const initialState = [{ favlist: 0 }];

export const favorite = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [...state, { favlist: 5 }];
    case "REMOVE_FAVORITE":
      return state;
    default:
      return state;
  }
};
