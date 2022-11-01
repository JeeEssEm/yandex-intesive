import {Books} from "../Books/Books";
import styles from "./styles.module.css";

export const Category = ({category}) => {
    return <div className={styles.root}>
        <Books books={category.books}/>
    </div>
}