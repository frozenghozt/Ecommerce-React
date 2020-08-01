const initialState = {
  favlist: {
    id: "Vic Henry",
  },
};

export const favorite = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        favlist: { ...state.favlist, ...action.payload },
      };
    case "REMOVE_FAVORITE":
      return state;
    default:
      return state;
  }
};
