import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBookReviewIds } from "../../store/book/selectors";
import { loadReviewsIfNotExist } from "../../store/review/loadReviewsIfNotExist";
import {
  selectIsReviewsLoading,
  selectReviews,
} from "../../store/review/selectors";
import { loadUsersIfNotExist } from "../../store/user/loadUsersIfNotExist";
import { Review } from "../Review/Review";
import styles from "./styles.module.css";

export const Reviews = ({ bookId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadReviewsIfNotExist(bookId));
  }, [bookId]);

  useEffect(() => {
    dispatch(loadUsersIfNotExist(bookId));
  }, [bookId]);

  const reviews = useSelector((state) => selectReviews(state));
  const isLoading = useSelector((state) => selectIsReviewsLoading(state));
  
  if (isLoading) {
    return <h1>Загрузка...</h1>;
  }

  return (
    <div className={styles.root}>
      {
      reviews.map((review) => (
        <Review key={review.id} reviewId={review.id} />
      ))}
    </div>
  );
};
