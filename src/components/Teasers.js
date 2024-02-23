import styles from "../styles/Teasers.module.css"
import Countdown from "./Countdown";
import promo from "../assets/poster_placeholder.jpg"
import { Carousel } from "react-responsive-carousel"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Teasers = () => {
    const arrowStyles = {
        position: 'absolute',
        zIndex: 2,
        top: 'calc(80%)',
        width: 32,
        height: 30,
        cursor: 'pointer',
        border: "none",
        background: "rgba(246, 221, 255, 0.9)",
        borderRadius: 4
    }
    return (
        <div className={styles.component}>
            <div className={styles.left}>
                <Countdown />
                <p className={styles.subtitle}>- Announcements -</p>
                <Carousel className={styles.carouselMain} showThumbs={false} showStatus={false} showArrows={true} autoPlay={true} infiniteLoop={true} interval={10000}
                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                        hasPrev && (
                            <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 0 }}>
                                <FaChevronLeft className={styles.buttonIcon} />
                            </button>
                        )
                    }
                    renderArrowNext={(onClickHandler, hasNext, label) =>
                        hasNext && (
                            <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 0 }}>
                                <FaChevronRight className={styles.buttonIcon} />
                            </button>
                        )
                    }
                >
                    <div className={styles.card}>
                        <h3>NIGHT FIESTA STARTS TONIGHT</h3>
                        <p>Get ready for an electrifying night! Come down to SUTD in the evening from 6pm to have a blast!</p>
                    </div>
                    <div className={styles.card}>
                        <h3>About</h3>
                        <p>Join us for an unforgettable evening filled with music,🎶 lights, 🌌 and an atmosphere of pure exhilaration held right after Open House at SUTD! 🎉</p>
                    </div>
                    
                </Carousel>
            </div>
            <div className={styles.promo}>
                <img src={promo} alt="promotional poster" />
            </div>
        </div>
    );
}

export default Teasers;
