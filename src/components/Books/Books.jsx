import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBooksIfNotExist } from "../../store/book/loadBooksIfNotExist";
import { selectIsBooksLoading } from "../../store/book/selectors";
import { selectCategoryBookIds } from "../../store/category/selectors";
import { Book } from "../Book/Book";
import styles from "./styles.module.css";

export const Books = ({ bookIds }, {cart}) => {
  const isLoading = useSelector((state) => selectIsBooksLoading(state));

  if (isLoading) {
    return <h1>Загрузка...</h1>;
  }

  return (
    <div className={styles.root}>
      {bookIds.map((id) => (
        <Book bookId={id} key={id} cart={cart}/>
      ))}
    </div>
  );
};
