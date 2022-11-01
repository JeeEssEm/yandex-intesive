import {Book} from "../../components/Book/Book";
import {Reviews} from "../../components/Reviews/Reviews";
import { Annotation } from "../../components/Annotation/Annotation";
import styles from "./styles.module.css";

export const BookPage = ({book}) => {

    return <div className={styles.root}>
        <div className={styles.header}>
            <div className={styles.book}>
                <Book book={book}/>
            </div>
            <div className={styles.annotation}>
                <Annotation annotation={book.annotation}/>
            </div>
        </div>
        <Reviews reviews={book.reviews}/>        
    </div>
}

