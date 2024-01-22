import styles from "../styles/Merch.module.css"
import banner from "../assets/shirt-banner.png"
import front from "../assets/shirt_front.png"
import back from "../assets/shirt_back.png"
import { Carousel } from "react-responsive-carousel"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Merch = () => {
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
        <div className={styles.page}>
            <div className={styles.wrapper}>
            <h1 className={styles.pageTitle}>Night Fiesta Merchandise</h1>
            <img src={banner} alt="" className={styles.banner} />

            <div className={styles.container}>
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
                    <img src={front} alt="" />
                    <img src={back} alt="" />
                </Carousel>
                <div className={styles.content}>
                    <h1 className={styles.title}>NF Exclusive Shirt</h1>
                    <h1 className={styles.subtitle}>Early Bird Sale</h1>
                    <h3 className={styles.price}>1 for $10 | 3 for $24</h3>
                    <button><a href="https://forms.office.com/r/KPWqrSzyr4" target="_blank" rel="noopener">Order Now!</a></button>
                </div>

            </div>
            </div>
        </div>
    );
}

export default Merch;