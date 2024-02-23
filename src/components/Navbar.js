import styles from "../styles/Navbar.module.css"
import { IoMenu } from "react-icons/io5";
import { MdLeaderboard } from "react-icons/md";
import { FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className={styles.component}>

            <div className={styles.right}>
                <a href="/leaderboard">
                    <h3 className={styles.leaderboard}><MdLeaderboard /></h3>
                </a>
                
                <a href="https://www.instagram.com/sutdlife/" target="_blank" rel="noreferrer">
                    <h3 className={styles.instagram}><FaInstagram /></h3>
                </a>
                <a href="https://maps.app.goo.gl/v551YrX8mK7oT2ha6" target="_blank" rel="noreferrer">
                    <h3 className={styles.map}><FaMapMarkerAlt /></h3>
                </a>

            </div>
        </div>
    );
}

export default Navbar;