import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../store/category/selectors";
import { useEffect } from "react";
import { loadCategoryIfNotExist } from "../../store/category/loadCategoryIfNotExist";
import { NavLink, Outlet, useParams, Navigate } from "react-router-dom";

export const StorePage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategoryIfNotExist);
  }, []);

  const categories = useSelector((state) => selectCategories(state));
  if (categories.length === 0) {
    return null;
  }

  if (Object.keys(params).length === 0) {
    return <Navigate to={`/categories/${categories[0].id}`}></Navigate>;
  }

  return (
    <div className={styles.root}>
      <section className={styles.categories}>
        <div className={styles.inner}>
          {categories.map((category) => (
            <NavLink
              to={`/categories/${category.id}`}
              key={category.id}
              className={({ isActive }) =>
                isActive ? styles.active : styles.button
              }
            >
              {category.name}
            </NavLink>
          ))}
        </div>
      </section>
      <section className={styles.books}>
        <Outlet />
      </section>
    </div>
  );
};
