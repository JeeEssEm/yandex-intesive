import { Book } from "../../components/Book/Book";
import { Reviews } from "../../components/Reviews/Reviews";
import { Annotation } from "../../components/Annotation/Annotation";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectBookById, selectBooks } from "../../store/book/selectors";
import { useEffect } from "react";
import { loadBookIfNotExist } from "../../store/book/loadBookIfNotExist";

export const BookVisualizePage = ({bookId}) => {
  const book = useSelector((state) => selectBookById(state, bookId));
//   const boooks = useSelector((state) => selectBooks(state))
//   console.log(boooks);

  if (!book) {
    return <h1>Загрузка...</h1>
  }
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
