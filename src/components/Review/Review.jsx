import { useDispatch, useSelector } from "react-redux";
import { selectReviewById } from "../../store/review/selectors";
import styles from "./styles.module.css";
import { selectReviews } from "../../store/review/selectors";

export const Review = ({ reviewId }) => {
  //const dispatch = useDispatch();

  const review = useSelector((state) => {
    selectReviewById(state, reviewId);
  });

  console.log("review");
  console.log(review);
  
  if (!review) {
    return null;
  }

  console.log(review);
  return (
    <div className={styles.root}>
      <div className={styles.head}>
        {/* <h2>{review.user.name}</h2> */}
        <span className={styles.rating}>{review.rating} звёзд</span>
      </div>

      <p>{review.text}</p>
    </div>
  );
};
