import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCategoryById } from "../../Store/category/selectors";
import { Books } from "../Books/Books";
import styles from "./styles.module.css";
import { Outlet } from "react-router-dom";

export const Category = () => {
  const { categoryId } = useParams();
  const category = useSelector((state) =>
    selectCategoryById(state, categoryId)
  );

  if (!category) {
    return null;
  }

  return (
    <div className={styles.root}>
      <Books categoryId={categoryId} />
      <Outlet />
    </div>
  );
};
