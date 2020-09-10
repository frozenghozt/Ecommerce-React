const initialState = {
  price: [],
  color: [],
  size: [],
};

export const filter = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRICE":
      return {
        ...state,
        price: [...state.price, ...action.payload],
      };
    case "REMOVE_PRICE":
      return {
        ...state,
        price: state.price.filter(
          (each) => each !== action.payload[0] && each !== action.payload[1]
        ),
      };
    case "ADD_COLOR":
      return { ...state, ...action.payload };
    case "REMOVE_COLOR":
      return { ...state, ...action.payload };
    case "ADD_SIZE":
      return { ...state, ...action.payload };
    case "REMOVE_SIZE":
      return { ...state, ...action.payload };
    case "CLEAR":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
