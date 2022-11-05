import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../Store/category/selectors";
import { useEffect } from "react";
import { loadCategoryIfNotExist } from "../../Store/category/loadCategoryIfNotExist";
import { NavLink, Outlet } from "react-router-dom";

export const StorePage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => selectCategories(state));
  // const [activeCategory, setActiveCategory] = useState(categories[0]);

  useEffect(() => {
    dispatch(loadCategoryIfNotExist);
  }, []);

  return (
    <div className={styles.root}>
      <section className={styles.categories}>
        <div className={styles.inner}>
          {categories.map((category) => (
            <NavLink to={category.id} key={category.id}>
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
