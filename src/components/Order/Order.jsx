import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadBookIfNotExist } from "../../store/book/loadBookIfNotExist";
import { selectBookById } from "../../store/book/selectors";

export const Order = (bookId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBookIfNotExist(bookId));
  }, [bookId]);

  const book = useSelector((state) => {
    selectBookById(state, bookId);
  });

  console.log(bookId);
  console.log(book);
  return (
    <div>
      {book.name} <strong>{book.price}₽</strong>
    </div>
  );
};
