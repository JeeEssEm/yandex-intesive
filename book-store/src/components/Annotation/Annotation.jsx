import styles from "./styles.module.css";


export const Annotation = ({annotation}) => {
    return <div className={styles.root}>
        <h2>Аннотация</h2>
        <p>{annotation.text}</p>
    </div>
}
