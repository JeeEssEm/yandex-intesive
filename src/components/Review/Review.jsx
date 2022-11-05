import { useDispatch, useSelector } from "react-redux";
import { selectReviewById } from "../../Store/review/selectors";
import styles from "./styles.module.css";
import { selectReviews } from "../../Store/review/selectors";

export const Review = ({ reviewId }) => {
  //const dispatch = useDispatch();
  const review = useSelector((state) => {
    selectReviewById(state, reviewId);
  });

  //   if (!review) {
  //     return null;
  //   }

  console.log(review);
  return (
    <div className={styles.root}>
      <div className={styles.head}>
        <h2>{review.user.name}</h2>
        <span className={styles.stars}>{review.stars} звёзд</span>
      </div>

      <p>{review.text}</p>
    </div>
  );
};
