import styles from "../styles/Banner.module.css"
import star from "../assets/star.gif"

const Banner = () => {
    return (
        <div className={styles.component}>
            <div className={styles.bg}></div>
            <img alt="" src={star} className={styles.star} />
            <h1 className={styles.h1}>CELESTIA</h1>
            <h3 className={styles.h3}>SUTD NIGHT FIESTA 2024</h3>
            <a href="/leaderboard">CHECK YOUR POINTS HERE</a>
            <p className={styles.p}>24 February 2024 6-9.30pm @ Campus Centre</p>
        </div>
    );
}

export default Banner;