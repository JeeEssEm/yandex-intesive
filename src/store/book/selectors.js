import { Statuses } from "../../constants/statuses";

export const selectBookModule = (state) => state.book;

export const selectBooks = (state) =>
  Object.values(selectBookModule(state).entities);

export const selectIsBooksLoading = (state) =>
  selectBookModule(state).status === Statuses.inProgress;

export const selectBookById = (state, bookId) => {
  return selectBookModule(state).entities[bookId];
};

export const selectBookReviewIds = (state, bookId) =>
  selectBookModule(state).entities[bookId].reviews;

export const selectBooksByIds = (state, ids) => {
  let res = {};
  ids.forEach((id) => {
    res[id] = selectBookById(state, id);
  });
  return res;
};
