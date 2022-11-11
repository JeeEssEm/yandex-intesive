import styles from "./styles.module.css";


export const Annotation = ({annotation}) => {
    if (!annotation) {
        return null;
    }
    return <div className={styles.root}>
        <h2>Аннотация</h2>
        <p>{annotation}</p>
    </div>
}
