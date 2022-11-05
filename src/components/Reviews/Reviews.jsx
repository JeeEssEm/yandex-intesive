import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBookReviews } from "../../Store/book/selectors";
import { loadReviewsIfNotExist } from "../../Store/review/loadReviewsIfNotExist";
import { selectReviews } from "../../Store/review/selectors";
import { Review } from "../Review/Review";
import styles from "./styles.module.css";

export const Reviews = ({ bookId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadReviewsIfNotExist(bookId));
  }, [bookId]);

  const reviewIds = useSelector((state) => selectBookReviews(state, bookId));
  console.log(reviewIds);
  return (
    <div className={styles.root}>
      {reviewIds.map((id) => (
        <Review key={id} reviewId={id} />
      ))}
    </div>
  );
};
