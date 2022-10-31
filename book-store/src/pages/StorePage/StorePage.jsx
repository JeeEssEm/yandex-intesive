import {Category} from "../../components/Category/Category";
import { useState } from "react";
import styles from "./styles.module.css";

export const StorePage = (props) => {
    const [activeCategory, setActiveCategory] = useState(props.categories[0]);
    return <div className={styles.root}>
        <section className={styles.categories}>
            <div className={styles.inner}>
                {
                    props.categories.map((category) =>
                     <button className={styles.button}
                      key={category.id} onClick={() => setActiveCategory(category)}>
                        {category.name}
                    </button>)
                }
            </div>
        </section>

        <section className={styles.books}>
            <Category category={activeCategory}/>
        </section>

    </div>
}

