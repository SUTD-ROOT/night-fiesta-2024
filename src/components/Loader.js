import styles from "../styles/Loader.module.css"
const Loader = () => {
    return (
        <div className={styles.component}>
            <div className={styles.loader}></div>
            <h2>Loading...</h2>
        </div>
    );
}

export default Loader;