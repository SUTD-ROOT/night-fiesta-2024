import styles from "../styles/Footer.module.css"
import root_logo from "../assets/root_logo.png"
import { FaEnvelope, FaInstagram  } from "react-icons/fa";


const Footer = () => {
    return (
        <div className={styles.component}>
            <div className={styles.section1}>
                <h2>Brought to you by:</h2>
                <img alt="ROOT" src={root_logo} />
            </div>
            <div className={styles.section2}>
                <h3>In collaboration with:</h3>
                <p>SUTD Fifth Rows</p>
                <p>Office of Student Life</p>
                <p>Admission Office</p>
                <p>Office of Marketing and Communications</p>
                <p>Office of Campus Infrastructure and Facilities</p>
            </div>
            <div className={styles.section3}>
                <h3>Stay Connected!</h3>
                <a href="mailto:nightfiesta@studentgov.sutd.edu.sg" target="_blank" rel="noreferrer">
                    <button><FaEnvelope />Email</button>
                </a>
                <a href="https://www.instagram.com/sutdlife/" target="_blank" rel="noreferrer">
                    <button><FaInstagram />Instagram</button>
                </a>

            </div>
        </div>
    );
}

export default Footer;