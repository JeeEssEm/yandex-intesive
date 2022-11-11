import { userSlice } from ".";
import { prepareData } from "../utils";
// import { selectCategories } from "./selectors";

export const loadUsersIfNotExist = (bookId) => (dispatch, getState) => {
  // if (selectCategories(getState())?.length > 0) {
  //   return;
  // }

  dispatch(userSlice.actions.startLoading());
  fetch(`http://localhost:3001/api/users?bookId=${bookId}`)
    .then((response) => response.json())
    .then((user) => {
      dispatch(userSlice.actions.successLoading(prepareData(user)));
    })
    .catch(() => {
      dispatch(userSlice.actions.failLoading());
    });
};
