import styles from "../styles/Guide.module.css"
import rfidInfo from "../assets/rfidInfo.png"
const Guide = () => {
    return ( 
        <div className={styles.page}>
            <div className={styles.content}>
                <img alt="" src={rfidInfo}/>
            </div>
        </div>
     );
}
 
export default Guide;