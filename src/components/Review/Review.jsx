import { useDispatch, useSelector } from "react-redux";
import { selectReviewById } from "../../store/review/selectors";
import styles from "./styles.module.css";
import { selectReviews } from "../../store/review/selectors";
import { useEffect } from "react";
// import { loadUserIfNotExist } from "../../store/user/loadUsersIfNotExist";
import { selectUserById } from "../../store/user/selectors";

export const Review = ({ reviewId }) => {
  // const dispatch = useDispatch();

  const review = useSelector((state) => 
   selectReviewById(state, reviewId)
  );

  let userId = -1;

  if (review) {
   userId = review.user; 
  }

  const user = useSelector((state) => selectUserById(state, userId));
  
  if (!(review && user)) {
    return null;
  }
  
  return (
    <div className={styles.root}>
      <div className={styles.head}>
        <h2>{user.name}</h2>
        <span className={styles.rating}>{review.rating} звёзд</span>
      </div>

      <p>{review.text}</p>
    </div>
  );
};
