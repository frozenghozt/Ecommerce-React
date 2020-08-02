export const addFavorite = (payload) => ({
  type: "ADD_FAVORITE",
  payload,
});

export const removeFavorite = (payload) => ({
  type: "REMOVE_FAVORITE",
  payload,
});
