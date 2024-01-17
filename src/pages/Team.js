import Navbar from "../components/Navbar";
import styles from "../styles/Team.module.css"
import placeholder from "../assets/photos/booths.jpg"

const Team = () => {
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <h1 className={styles.title}>Our Team</h1>
                <p className={styles.tag}>Meet the organising team behind Night Fiesta 2024!</p>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <img src={placeholder} alt="" />
                        <p>Project Directors</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;