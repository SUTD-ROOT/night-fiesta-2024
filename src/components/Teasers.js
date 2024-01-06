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
                    <h3>About Night Fiesta</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
            </div>
            <div className={styles.promo}>
                <img src={promo} alt="promotional poster" />
            </div>
        </div>
    );
}

export default Teasers;
