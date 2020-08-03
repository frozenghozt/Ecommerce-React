export const addFavorite = (payload) => ({
  type: "ADD_FAVORITE",
  payload,
});

export const removeFavorite = (payload) => ({
  type: "REMOVE_FAVORITE",
  payload,
});

export const addCart = (payload) => ({
  type: "ADD_CART",
  payload,
});

export const removeCart = (payload) => ({
  type: "REMOVE_CART",
  payload,
});
