import { useEffect, useState } from "react";
import styles from "../styles/Countdown.module.css"


const Countdown = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const eventDate = "February, 24, 2024 18:00:00";

    const getTime = () => {
        const timeLeft = Date.parse(eventDate) - Date.now();
        setDays(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((timeLeft / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((timeLeft / 1000 / 60) % 60));
        setSeconds(Math.floor((timeLeft / 1000) % 60));
    }

    useEffect(() => {
        const interval = setInterval(() => getTime(), 1000)
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.main}>
            <h2 className={styles.note}>NIGHT FIESTA STARTS IN</h2>
            <div className={styles.container}>
                <div className={styles.section}>
                    <h1 className={styles.h1}>{(days < 10) ? 0 : ""}{days}</h1>
                    <p className={styles.p}>Days</p>
                </div>
                <div className={styles.section}>
                    <h1 className={styles.h1}>{(hours < 10) ? 0 : ""}{hours}</h1>
                    <p className={styles.p}>Hours</p>
                </div>
                <div className={styles.section}>
                    <h1 className={styles.h1}>{(minutes < 10) ? 0 : ""}{minutes}</h1>
                    <p className={styles.p}>Minutes</p>
                </div>
                <div className={styles.section}>
                    <h1 className={styles.h1}>{(seconds < 10) ? 0 : ""}{seconds}</h1>
                    <p className={styles.p}>Seconds</p>
                </div>
            </div>

        </div>
    );
}

export default Countdown;