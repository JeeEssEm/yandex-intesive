import { Statuses } from "../../constants/statuses";

export const selectReviewModule = (state) => state.review;

export const selectReviews = (state) =>
  Object.values(selectReviewModule(state).entities);

export const selectReviewById = (state, reviewId) => {
  console.log(state.status);
  return selectReviewModule(state).entities[reviewId];
};

export const selectIsReviewsLoading = (state) =>
  state.status === Statuses.inProgress;
