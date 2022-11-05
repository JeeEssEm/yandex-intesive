import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBookById } from "../../Store/book/selectors";
import { selectBookCount } from "../../Store/cart/selectors";
import { cartSlice } from "../../Store/cart/index";
import { loadBookIfNotExist } from "../../Store/book/loadBookIfNotExist";

import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

export const Book = ({ bookId }) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadBookIfNotExist(bookId));
  // }, [bookId]);

  const book = useSelector((state) => selectBookById(state, bookId));
  const count = useSelector((state) => selectBookCount(state, bookId));

  if (!book) {
    return null;
  }

  return (
    <NavLink className={styles.book} to={`/books/${bookId}`}>
      <h2 className={styles.title}>{book.name}</h2>

      <div className={styles.row}>
        <div>
          <p className={styles.author}>{book.author}</p>
          <p className={styles.genre}>{book.genre}</p>
          <span className={styles.stars}>{book.stars} звёзд</span>
        </div>

        <div className={styles.purchase}>
          <button
            onClick={() => dispatch(cartSlice.actions.removeBook(bookId))}
            disabled={count === 0}
            className={styles.crement}
          >
            -
          </button>
          {count || 0}
          <button
            onClick={() => dispatch(cartSlice.actions.addBook(bookId))}
            className={styles.crement}
          >
            +
          </button>
        </div>
      </div>

      <h2 className={styles.price}>{book.price}₽</h2>
    </NavLink>
  );
};
