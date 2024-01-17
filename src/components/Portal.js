import styles from "../styles/Portal.module.css"
import placeholder from "../assets/photos/booths.jpg"
import { Link } from "react-router-dom";

const Portal = () => {
    return (
        <div className={styles.component}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <Link to="/event-map" className={styles.link}>
                        <div className={styles.card}>
                            <img alt="" src={placeholder} />
                            <h2>EVENT MAP</h2>
                        </div>
                    </Link>
                </div>
                <div className={styles.card}>
                    <img alt="" src={placeholder} />
                    <h2>STAGE SCHEDULE</h2>
                </div>
                {/*<div className={styles.card}>
                    <img alt="" src={placeholder} />
                    <h2>LEADERBOARD</h2>
    </div>*/}
                <div className={styles.card}>
                    <img alt="" src={placeholder} />
                    <h2>CHARACTER QUIZ</h2>
                </div>
                {/*<Link to="/team" className={styles.link}>
                    <div className={styles.card}>
                        <img alt="" src={placeholder} />
                        <h2>THE TEAM</h2>
                    </div>
</Link>*/}
            </div>
        </div>
    );
}

export default Portal;