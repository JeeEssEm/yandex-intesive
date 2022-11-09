import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { selectBookIdsFromCart } from "../../store/cart/selectors";
import { Books } from "../../components/Books/Books";
import { Orders } from "../../components/Orders/Orders";

export const CartPage = () => {
  const bookIds = useSelector((state) => selectBookIdsFromCart(state));
  console.log(bookIds);
  return (
    <div className={styles.root}>
      <section className={styles.order}>
        <Orders bookIds={bookIds} />
      </section>

      <section className={styles.books}>
        <Books bookIds={bookIds} />
      </section>
    </div>
  );
};
