import styles from "../styles/Attractions.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import boothsImg from "../assets/photos/booths.jpg"

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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                </div>
                
                <div className={styles.card}>
                    <img src={boothsImg} alt="" />
                    <div className={styles.content}>
                        <h2>Performances</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                </div>

                <div className={styles.card}>
                    <img src={boothsImg} alt="" />
                    <div className={styles.content}>
                        <h2>Interactive Installations</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={boothsImg} alt="" />
                    <div className={styles.content}>
                        <h2>Photobooth</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={boothsImg} alt="" />
                    <div className={styles.content}>
                        <h2>Merchandise</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                </div>
            </Carousel>

        </div>
    );
}

export default Attractions;