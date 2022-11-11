import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { selectBookCount, selectBookCountsByIds, selectBookIdsFromCart, selectCartModule } from "../../store/cart/selectors";
import { Books } from "../../components/Books/Books";
import { Orders } from "../../components/Orders/Orders";
import { useEffect } from "react";
import { selectBooksByIds } from "../../store/book/selectors";

export const CartPage = () => {
  // let bookIds = useSelector((state) => selectBookIdsFromCart(state));
  // let counts = useSelector((state) => selectBookCountsByIds(state, bookIds));

  const booksAndCounts = useSelector((state) => selectCartModule(state));
  const books = useSelector((state) => selectBooksByIds(state, Object.keys(booksAndCounts)))
  
  let sum = 0;
  const bookIds = [];
  for (const [id, cnt] of Object.entries(booksAndCounts)) {
      if (cnt > 0) {
        bookIds.push(id);
        sum += books[id].price * cnt;
      } 
  }

  return (
    <div className={styles.root}>
      <section className={styles.order}>
        <Orders bookIds={bookIds} />
        <h2 className={styles.summary}>Итого: {sum}₽</h2>
      </section>

      <section className={styles.books}>
        <Books bookIds={bookIds} cart={true}/>
      </section>
    </div>
  );
};


