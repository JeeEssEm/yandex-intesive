import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBooksIfNotExist } from "../../Store/book/loadBooksIfNotExist";
import { selectIsBooksLoading } from "../../Store/book/selectors";
import { selectCategoryBookIds } from "../../Store/category/selectors";
import { Book } from "../Book/Book";
import styles from "./styles.module.css";

export const Books = ({ bookIds }) => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadBooksIfNotExist(categoryId));
  // }, [categoryId]);

  // const bookIds = useSelector((state) =>
  //   selectCategoryBookIds(state, categoryId)
  // );

  const isLoading = useSelector((state) => selectIsBooksLoading(state));

  if (isLoading) {
    return <h1>Загрузка...</h1>;
  }

  return (
    <div className={styles.root}>
      {bookIds.map((id) => (
        <Book bookId={id} key={id} />
      ))}
    </div>
  );
};
