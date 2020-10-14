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
      return {
        ...state,
        color: [...state.color, action.payload],
      };
    case "REMOVE_COLOR":
      return {
        ...state,
        color: state.color.filter((each) => each !== action.payload),
      };
    case "ADD_SIZE":
      return {
        ...state,
        size: [...state.size, action.payload],
      };
    case "REMOVE_SIZE":
      return {
        ...state,
        size: state.size.filter((each) => each !== action.payload),
      };
    default:
      return state;
  }
};
