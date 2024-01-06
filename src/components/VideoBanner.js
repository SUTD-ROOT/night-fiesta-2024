import styles from "../styles/VideoBanner.module.css"
import { MdOutlineVideoSettings } from "react-icons/md";


const VideoBanner = () => {
    return (
        <div className={styles.component}>
            <div className={styles.card}>
                <div className={styles.content}>
                    <MdOutlineVideoSettings className={styles.icon} />
                    <h2>- Highlight Video Coming Soon! -</h2>
                </div>
            </div>
        </div>
    );
}

export default VideoBanner;