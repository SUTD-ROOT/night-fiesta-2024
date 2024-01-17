import styles from "../styles/VideoBanner.module.css"
import { MdOutlineVideoSettings } from "react-icons/md";
import recapVid from "../assets/nf-recap.mp4"

const VideoBanner = () => {
    return (
        <div className={styles.component}>
            <div className={styles.card}>
                <div className={styles.content}>
                    <video autoPlay muted>
                        <source src={recapVid} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    );
}

export default VideoBanner;