import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadBookIfNotExist } from "../../store/book/loadBookIfNotExist";
import { selectBookById } from "../../store/book/selectors";
import styles from "./styles.module.css";
import { selectBookCount } from "../../store/cart/selectors";

export const Order = ({bookId}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBookIfNotExist(bookId))
  }, [bookId])

  const book = useSelector((state) => 
    selectBookById(state, bookId)
  );
  const count = useSelector((state) => selectBookCount(state, bookId))

  if (!book) {
    return null;
  }

  return (
    <div className={styles.root}>
      {book.name} <strong>{book.price * count}₽</strong>
    </div>
  );
};
