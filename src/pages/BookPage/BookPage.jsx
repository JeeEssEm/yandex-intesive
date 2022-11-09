import { Book } from "../../components/Book/Book";
import { Reviews } from "../../components/Reviews/Reviews";
import { Annotation } from "../../components/Annotation/Annotation";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectBookById } from "../../store/book/selectors";

export const BookPage = () => {
  const { bookId } = useParams();
  //   console.log(bookId);
  const book = useSelector((state) => selectBookById(state, bookId));

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.book}>
          <Book bookId={bookId} />
        </div>
        <div className={styles.annotation}>
          <Annotation annotation={book.annotation} />
        </div>
      </div>
      <Reviews bookId={bookId} />
    </div>
  );
};
