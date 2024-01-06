import styles from "../styles/Directions.module.css"
import map from "../assets/map.png"
import { FaBusAlt, FaTrain  } from "react-icons/fa";


const Directions = () => {
    return (
        <div className={styles.component}>
            <div className={styles.card}>
                <img alt="" src={map} />
                <div className={styles.content}>
                    <h1>Getting to SUTD</h1>
                    <h3> <FaTrain /> By train</h3>
                    <p>Alight at: <br /><br />
                        1. Upper Changi MRT Station (DT34) and take Exit E – you will be led directly into our campus <br /><br />
                        2. Expo MRT Station (DT35 / CG1) and walk to our campus – along Changi South Avenue 1 in the direction of Max Pavilion/Somapah Road</p>

                    <h3> <FaBusAlt /> By Bus</h3>
                    <p>Alight at one of the bus stops along Somapah Road and walk to our Campus: <br />
                        • B96449: SUTD. Service No: 20<br />
                        • B96441: Opposite SUTD. Service No: 20<br /><br />
                        Alight at one of the bus stops along Upper Changi Road East and walk to our Campus:<br />
                        • B96041: Upper Changi Station/Opp SUTD. Service No: 2, 5, 24<br />
                        • B96049: Upper Changi Station/SUTD. Service No: 2, 5, 24</p>
                </div>
            </div>
        </div>
    );
}

export default Directions;