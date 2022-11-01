import styles from "./styles.module.css";


export const Review = ({review}) => {

    return <div className={styles.root}>
        <div className={styles.head}>
            <h2>{review.user.name}</h2>
            <span className={styles.stars}>{review.stars} звёзд</span>
        </div>

        <p>{review.text}</p>
    </div> 
}