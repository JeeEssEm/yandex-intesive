import { Book } from "../../components/Book/Book";
import { Reviews } from "../../components/Reviews/Reviews";
import { Annotation } from "../../components/Annotation/Annotation";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectBookById } from "../../store/book/selectors";
import { useEffect } from "react";
import { loadBookIfNotExist } from "../../store/book/loadBookIfNotExist";
import { BookVisualizePage } from "../../components/BookVisualizePage/BookVisualizePage";

export const BookPage = () => {
  const dispatch = useDispatch();
  const { bookId } = useParams();
  //   console.log(bookId);
  useEffect(() => {
    dispatch(loadBookIfNotExist(bookId))
  }, [bookId])

  // const book = useSelector((state) => selectBookById(state, bookId));
  
  return (
    <div>
      <BookVisualizePage bookId={bookId}/>      
    </div>
  );
};
