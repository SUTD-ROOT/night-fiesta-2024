import styles from "../../styles/StartQuiz.module.css"
const StartQuiz = ({
    level,
    setLevel
}) => {
    const handlePlay = (e) => {
        e.preventDefault();
        document.getElementById("component").style.animation = "puffOutCenter 1s cubic-bezier(.165,.84,.44,1.000) both"

        const timer = setTimeout(() => {
            setLevel(level + 1);
            document.getElementById("component").style.removeProperty("animation")
        }, 1200);
        return () => clearTimeout(timer);
    }
    return (
        <div className={styles.component} id="component">
            <h1>Discover Your Fiesta Character</h1>
            <button className={styles.button} onClick={(e) => handlePlay(e)}>PLAY NOW</button>
        </div>
    );
}

export default StartQuiz;