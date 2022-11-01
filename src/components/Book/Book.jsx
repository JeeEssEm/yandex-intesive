import { useState } from "react"
import styles from "./styles.module.css";

export const Book = ({book}) => {
    let [count, setCount] = useState(book.orders);
    return <div className={styles.book}>
        <h2 className={styles.title}>{book.name}</h2>

        <div className={styles.row}>
            <div>
                <p className={styles.author}>{book.author}</p>
                <p className={styles.genre}>{book.genre}</p>
                <span className={styles.stars}>{book.stars} звёзд</span>
            </div>

            <div className={styles.purchase}>
                <button onClick={() => setCount(count -= 1)} disabled={count === 0} className={styles.crement}>-</button>
                    {count}
                <button onClick={() => setCount(count += 1)} className={styles.crement}>+</button>
            </div>
        </div>

        <h2 className={styles.price}>{book.price}₽</h2>
    </div>
}