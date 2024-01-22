import styles from "../styles/Schedule.module.css"
import logo from "../assets/nf-logo-withbg.png"

import bands from "../assets/stage_logos/bands.png"
import winds from "../assets/stage_logos/winds.jpeg"
import manners from "../assets/stage_logos/manners.jpg"
import vertex from "../assets/stage_logos/vertex.jpeg"
import ddz from "../assets/stage_logos/ddz.jpg"
import taal from "../assets/stage_logos/Taal.jpg"
import mrs from "../assets/stage_logos/mrs.png"
import ballroom from "../assets/stage_logos/ballroom.png"
import funktion from "../assets/stage_logos/funktion.jpg"

const Schedule = () => {
    const stages = [
        {
            name: "LSHR (Band)",
            time: "1805 - 1820",
            img: bands
        },
        {
            name: "Ballroom",
            time: "1820 - 1830",
            img: ballroom
        },
        {
            name: "FUNKtion",
            time: "1850 - 1900",
            img: funktion
        },
        {
            name: "dBdz (Band)",
            time: "1900 - 1905",
            img: bands
        },
        {
            name: "MRS Drone Race",
            time: "1925 - 1930",
            img: mrs
        },
        {
            name: "SUTD Winds",
            time: "1930 - 1945",
            img: winds
        },
        {
            name: "Taal",
            time: "1945 - 1955",
            img: taal
        },
        {
            name: "DanceDerivativeZ",
            time: "2005 - 2015",
            img: ddz
        },
        {
            name: "Vertex",
            time: "2020 - 2030",
            img: vertex
        },
        {
            name: "Manners (Band)",
            time: "2045 - 2100",
            img: bands
        },
    ]

    return (
        <div className={styles.page}>
            <div className={styles.banner}>
                <img src={logo} alt="" />
                <div className={styles.header}>
                    <h1 className={styles.title}>Stage Schedule</h1>
                    <h3>Night Fiesta 2024</h3>
                    <p>Playlist</p>
                </div>

            </div>
            <div className={styles.container}>
                {stages.map((item, i) => (
                    <div className={styles.card} key={i}>
                        <div className={styles.left}>
                            <img src={item.img} alt="" />
                            <h2 className={styles.name}>{item.name}</h2>
                        </div>
                        <div className={styles.right}>
                            <h3>{item.time}</h3>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
}

export default Schedule;