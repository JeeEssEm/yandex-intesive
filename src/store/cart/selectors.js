export const selectCartModule = (state) => state.cart;

export const selectBookCount = (state, bookId) =>
  selectCartModule(state)[bookId];

export const selectBookIdsFromCart = (state) =>
  Object.keys(selectCartModule(state));

export const selectBookCountsByIds = (state, ids) => {
  const books = selectCartModule(state);
  console.log(books);

  if (!books) {
    return;
  }
  let result = {};
  ids.forEach((id) => {
    result[id] = books[id];
  });
  return Object.entries(result);
};
