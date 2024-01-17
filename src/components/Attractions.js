import styles from "../styles/Attractions.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import boothsImg from "../assets/photos/booths.jpg"
import installationImg from "../assets/photos/installations.jpg"
import merchImg from "../assets/photos/merch.jpg"
import performanceImg from "../assets/photos/performance.jpg"

const Attractions = () => {

    const arrowStyles = {
        position: 'absolute',
        zIndex: 2,
        top: 'calc(30%)',
        width: 50,
        height: 50,
        cursor: 'pointer',
        border: "none",
        background: "rgba(246, 221, 255, 0.9)",
        borderRadius: 4
    }
    return (
        <div className={styles.component}>
            <h1 className={styles.title}>Attractions</h1>
            <Carousel className={styles.carouselMain} showThumbs={false} showStatus={false} showArrows={true} autoPlay={true} infiniteLoop={true} interval={10000}
             renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                    <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 0 }}>
                        <FaChevronLeft className={styles.buttonIcon}/>
                    </button>
                )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 0 }}>
                        <FaChevronRight className={styles.buttonIcon}/>
                    </button>
                )
            }
            >
                <div className={styles.card}>
                    <img src={boothsImg} alt="" />
                    <div className={styles.content}>
                        <h2>Student Organisation Booths</h2>
                        <p>Get ready for an illuminating Night Fiesta experience! Join over 30 fifth rows who will be sharing their achievements right at the campus center. Dive into the excitement with our new RFID technology – visit booths, play games, and collect points for a thrilling twist. Stay tuned to discover the exciting surprises that these points unlock!</p>
                    </div>
                </div>
                
                <div className={styles.card}>
                    <img src={performanceImg} alt="" />
                    <div className={styles.content}>
                        <h2>Performances</h2>
                        <p>You may just need a break after walking around and looking at what our student organisation booths have to offer. Relax and enjoy our captivating performance lineup: get ready to be wowed and have a blast during a night filled with entertainment!</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <img src={installationImg} alt="" />
                    <div className={styles.content}>
                        <h2>Interactive Installations</h2>
                        <p>Discover the enchanting ambiance of Night Fiesta with our specially crafted light displays and showcases, meticulously designed by our talented Decorations teams. Join us for a tranquil yet captivating experience that is sure to add a touch of magic to your evening.</p>
                    </div>
                </div>
                
                <div className={styles.card}>
                    <img src={merchImg} alt="" />
                    <div className={styles.content}>
                        <h2>Merchandise</h2>
                        <p>Discover the charm of Celestia with our four delightful mascots! Take home a special Celestia tee by visiting Night Fiesta today. Dive into a world of merchandise – there's something special waiting just for you!</p>
                    </div>
                </div>
            </Carousel>

        </div>
    );
}

export default Attractions;