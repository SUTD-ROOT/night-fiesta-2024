import styles from "../styles/EventMap.module.css"

import _3dc from "../assets/club_logos/3dc.jpg"
import bands from "../assets/club_logos/bands.svg"
import cat from "../assets/club_logos/cat.jpg"
import chess from "../assets/club_logos/chess.jpg"
import energy from "../assets/club_logos/energy.png"
import floorball from "../assets/club_logos/floorball.png"
import gunpla from "../assets/club_logos/gunpla.png"
import ieee from "../assets/club_logos/ieee.jpg"
import indopadi from "../assets/club_logos/indopadi.png"
import keyboard from "../assets/club_logos/keyboard.png"
import klec from "../assets/club_logos/klec.png"
import makerspace from "../assets/club_logos/makerspace.svg"
import mechd from "../assets/club_logos/mechd.png"
import mindsports from "../assets/club_logos/mindsports.png"
import mrs from "../assets/club_logos/mrs.png"
import namaste from "../assets/club_logos/namaste.png"
import root from "../assets/club_logos/root.png"
import lion from "../assets/club_logos/lion.jpg"
import ev from "../assets/club_logos/ev.png"
import scratch from "../assets/club_logos/scratch.png"
import studio from "../assets/club_logos/studio.png"
import ulti from "../assets/club_logos/ulti.jpg"
import vertex from "../assets/club_logos/vertex.jpeg"
import volleyball from "../assets/club_logos/volleyball.png"
import winds from "../assets/club_logos/winds.jpeg"
import xr from "../assets/club_logos/xr.png"
import mvmcxgp from "../assets/club_logos/mvmcxgp.png"
import placeholder from "../assets/club_logos/placeholder.svg"
import lvl1 from "../assets/lvl1.png"
import lvl2 from "../assets/lvl2.png"


const EventMap = () => {

    const boothDirectory = [
        {
            name: "3DC",
            num: 1,
            img: _3dc
        },
        {
            name: "Bands Club",
            num: 2,
            img: bands
        },
        {
            name: "Cat Appreciation Team (CAT)",
            num: 3,
            img: cat
        },
        {
            name: "Chess PC",
            num: 4,
            img: chess
        },
        {
            name: "Energy Club",
            num: 4,
            img: energy
        },
        {
            name: "Floorball Club",
            num: 5,
            img: floorball
        },
        {
            name: "Greenprint and MVMC",
            num: 6,
            img: mvmcxgp
        },
        {
            name: "Gunpla Club",
            num: 7,
            img: gunpla
        },
        {
            name: "IEEE Club",
            num: 8,
            img: ieee
        },
        {
            name: "Indonesian Cultural Club (PADI)",
            num: 9,
            img: indopadi
        },
        {
            name: "Keyboard Warriors",
            num: 10,
            img: keyboard
        },
        {
            name: "Korean Language Enrichment Club",
            num: 11,
            img: klec
        },
        {
            name: "Makerspace Club",
            num: 12,
            img: makerspace
        },
        {
            name: "MECHD",
            num: 8,
            img: mechd
        },
        {
            name: "Mindsports Club",
            num: 8,
            img: mindsports
        },
        {
            name: "Multi-Rotor SUTD",
            num: 8,
            img: mrs
        },
        {
            name: "Namaste Indian Cultural Interest Group",
            num: 8,
            img: namaste
        },
        {
            name: "Rugby Club",
            num: 8,
            img: placeholder
        },
        {
            name: "ROOT",
            num: 8,
            img: root
        },
        {
            name: "SUTD Civil Defence LionHearters Interest Group",
            num: 8,
            img: lion
        },
        {
            name: "SUTD EV Club",
            num: 8,
            img: ev
        },
        {
            name: "SUTD Scratch!",
            num: 8,
            img: scratch
        },
        {
            name: "SUTDio Club",
            num: 8,
            img: studio
        },
        {
            name: "Ultimate",
            num: 8,
            img: ulti
        },
        {
            name: "Vertex Cheerleading",
            num: 8,
            img: vertex
        },
        {
            name: "Volleyball",
            num: 8,
            img: volleyball
        },
        {
            name: "Wind Ensemble Club",
            num: 8,
            img: winds
        },
        {
            name: "XRCommunity",
            num: 8,
            img: xr
        },
        
    ]
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <h1 className={styles.title}>Event Map</h1>
                <p className={styles.tag} >Come visit the booths of Night Fiesta 2024!</p>
                <div className={styles.wrapper}>
                    <h2>Level 1</h2>
                    <img src={lvl1} alt=""/>
                    <h2>Level 2</h2>
                    <img src={lvl2} alt=""/>

                </div>
                <h3 className={styles.subtitle}>Participating Booths:</h3>
                <div className={styles.container}>
                    {
                        boothDirectory.map((booth, i) => (
                            <div className={styles.card} key={i}>
                                <img src={booth.img} alt="" />
                                <h3>{booth.name}</h3>
                                <p>Booth {booth.num}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
}

export default EventMap;