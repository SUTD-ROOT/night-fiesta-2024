import styles from "../styles/Portal.module.css"
import placeholder from "../assets/photos/booths.jpg"
import { Link } from "react-router-dom";
import layoutThumbnail from "../assets/lvl1.png"
import quizThumbnail from "../assets/quiz-thumbnail.jpg"
import stageThumbnail from "../assets/stage-thumbnail.jpg"
import merchThumbnail from "../assets/shirt-banner.png"

const Portal = () => {
    return (
        <div className={styles.component}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <Link to="/event-map" className={styles.link}>
                        <div className={styles.card}>
                            <img alt="" src={layoutThumbnail} />
                            <h2>EVENT MAP</h2>
                        </div>
                    </Link>
                </div>
                <Link to="/schedule" className={styles.link}>
                <div className={styles.card}>
                    <img alt="" src={stageThumbnail} />
                    <h2>STAGE SCHEDULE</h2>
                </div>
                </Link>
                {/*<div className={styles.card}>
                    <img alt="" src={placeholder} />
                    <h2>LEADERBOARD</h2>
    </div>*/}
                <div className={styles.card}>
                    <a href="/quiz">
                    <img alt="" src={quizThumbnail} />
                    <h2>CHARACTER QUIZ</h2>
                    </a>
                </div>
                <div className={styles.card}>
                    <a href="/merch">
                    <img alt="" src={merchThumbnail} />
                    <h2>Merchandise</h2>
                    </a>
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