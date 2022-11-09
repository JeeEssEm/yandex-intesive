import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import cart from "./Frame.png";

export const Header = () => {
  return (
    <div className={styles.root}>
      <NavLink to="/" className={styles.text}>
        <h2>Магазин</h2>
      </NavLink>

      <NavLink to="/cart" className={styles.cart}>
        <img src={cart} alt="" />
      </NavLink>
    </div>
  );
};
