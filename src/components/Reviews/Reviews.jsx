import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBookReviews } from "../../store/book/selectors";
import { loadReviewsIfNotExist } from "../../store/review/loadReviewsIfNotExist";
import {
  selectIsReviewsLoading,
  selectReviews,
} from "../../store/review/selectors";
import { Review } from "../Review/Review";
import styles from "./styles.module.css";

export const Reviews = ({ bookId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadReviewsIfNotExist(bookId));
  }, [bookId]);

  const reviews = useSelector((state) => selectReviews(state))

  const reviewIds = useSelector((state) => selectBookReviews(state, bookId));
  const isLoading = useSelector((state) => selectIsReviewsLoading(state));
  
  if (isLoading) {
    return <h1>Загрузка...</h1>;
  }

  return (
    <div className={styles.root}>
      {reviewIds.map((id) => (
        <Review key={id} reviewId={id} />
      ))}
    </div>
  );
};
