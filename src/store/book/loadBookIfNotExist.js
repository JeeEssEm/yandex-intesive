import { bookSlice } from ".";
import { prepareData } from "../utils";
import { selectBooks } from "./selectors";

export const loadBookIfNotExist = (bookId) => (dispatch, getState) => {
  if (selectBooks(getState())?.length > 0) {
    return;
  }

  dispatch(bookSlice.actions.startLoading());
  fetch(`http://localhost:3001/api/books?bookId=${bookId}`)
    .then((response) => response.json())
    .then((books) => {
      dispatch(bookSlice.actions.successLoading(prepareData(books)));
    })
    .catch(() => {
      dispatch(bookSlice.actions.failLoading());
    });
};
