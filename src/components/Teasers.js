import styles from "../styles/Teasers.module.css"
import Countdown from "./Countdown";
import promo from "../assets/poster_placeholder.jpg"

const Teasers = () => {
    return (
        <div className={styles.component}>
            <div className={styles.left}>
                <Countdown />
                <p className={styles.subtitle}>- Announcements -</p>
                <div className={styles.card}>
                    <h3>About</h3>
                    <p>Join us for an unforgettable evening filled with music,🎶 lights, 🌌 and an atmosphere of pure exhilaration held right after Open House at SUTD! 🎉</p>
                </div>
            </div>
            <div className={styles.promo}>
                <img src={promo} alt="promotional poster" />
            </div>
        </div>
    );
}

export default Teasers;
