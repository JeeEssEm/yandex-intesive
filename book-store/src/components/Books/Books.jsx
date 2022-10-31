import {Book} from "../Book/Book";
import styles from "./styles.module.css";

export const Books = ({books}) => {
    return <div className={styles.root}>
            {
                books.map((book) => <Book book={book} key={book.id}/>)
            }
    </div>
}