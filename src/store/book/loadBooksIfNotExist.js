import { bookSlice } from ".";
import { prepareData } from "../utils";

export const loadBooksIfNotExist = (categoryId) => (dispatch, getState) => {
  dispatch(bookSlice.actions.startLoading());
  fetch(`http://localhost:3001/api/books?categoryId=${categoryId}`)
    .then((response) => response.json())
    .then((books) => {
      dispatch(bookSlice.actions.successLoading(prepareData(books)));
    })
    .catch(() => {
      dispatch(bookSlice.actions.failLoading());
    });
};
