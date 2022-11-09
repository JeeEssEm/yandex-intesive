import { Statuses } from "../../constants/statuses";

export const selectReviewModule = (state) => state.review;

export const selectReviews = (state) =>
  Object.values(selectReviewModule(state).entities);

export const selectReviewById = (state, reviewId) => {
  let result = selectReviewModule(state).entities[reviewId];
  console.log(result);
  return result;
};

export const selectIsReviewsLoading = (state) =>
  selectReviewModule(state).status === Statuses.inProgress;
