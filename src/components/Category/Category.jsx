import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { selectCategoryById } from "../../store/category/selectors";
import { Books } from "../Books/Books";
import styles from "./styles.module.css";
import { Outlet } from "react-router-dom";
import { selectCategoryBookIds } from "../../store/category/selectors";
import { loadBooksIfNotExist } from "../../store/book/loadBooksIfNotExist";
import { loadCategoryIfNotExist } from "../../store/category/loadCategoryIfNotExist";

export const Category = () => {
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  const category = useSelector((state) =>
    selectCategoryById(state, categoryId)
  );

  useEffect(() => {
    dispatch(loadCategoryIfNotExist)
  }, [])

  useEffect(() => {
    dispatch(loadBooksIfNotExist(categoryId));
  }, [categoryId]);

  const bookIds = useSelector((state) =>
    selectCategoryBookIds(state, categoryId)
  );

  if (!category || !bookIds) {
    return null;
  }

  return (
    <div className={styles.root}>
      <Books bookIds={bookIds} />
      <Outlet />
    </div>
  );
};
