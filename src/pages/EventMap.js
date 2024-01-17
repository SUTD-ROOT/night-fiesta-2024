import styles from "../styles/EventMap.module.css"

import _3dc from "../assets/club_logos/3dc.svg"

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
            img: _3dc
        },
        {
            name: "Cat Appreciation Team (CAT)",
            num: 3,
            img: _3dc
        },
        {
            name: "Chess PC",
            num: 4,
            img: _3dc
        },
        {
            name: "Energy Club",
            num: 4,
            img: _3dc
        },
        {
            name: "Floorball Club",
            num: 5,
            img: _3dc
        },
        {
            name: "Greenprint and MVMC",
            num: 6,
            img: _3dc
        },
        {
            name: "Gunpla Club",
            num: 7,
            img: _3dc
        },
        {
            name: "IEEE Club",
            num: 8,
            img: _3dc
        },
        {
            name: "Indonesian Cultural Club (PADI)",
            num: 9,
            img: _3dc
        },
        {
            name: "Keyboard Warriors",
            num: 10,
            img: _3dc
        },
        {
            name: "Korean Language Enrichment Club",
            num: 11,
            img: _3dc
        },
        {
            name: "Makerspace Club",
            num: 12,
            img: _3dc
        },
        {
            name: "MECHD",
            num: 8,
            img: _3dc
        },
        {
            name: "Mindsports Club",
            num: 8,
            img: _3dc
        },
        {
            name: "Multi-Rotor SUTD",
            num: 8,
            img: _3dc
        },
        {
            name: "Namaste Indian Cultural Interest Group",
            num: 8,
            img: _3dc
        },
        {
            name: "Rugby Club",
            num: 8,
            img: _3dc
        },
        {
            name: "ROOT",
            num: 8,
            img: _3dc
        },
        {
            name: "SUTD Civil Defence LionHearters Interest Group",
            num: 8,
            img: _3dc
        },
        {
            name: "SUTD EV Club",
            num: 8,
            img: _3dc
        },
        {
            name: "SUTD Scratch!",
            num: 8,
            img: _3dc
        },
        {
            name: "SUTDio Club",
            num: 8,
            img: _3dc
        },
        {
            name: "Ultimate",
            num: 8,
            img: _3dc
        },
        {
            name: "Vertex Cheerleading",
            num: 8,
            img: _3dc
        },
        {
            name: "Volleyball",
            num: 8,
            img: _3dc
        },
        {
            name: "Wind Ensemble Club",
            num: 8,
            img: _3dc
        },
        {
            name: "XRCommunity",
            num: 8,
            img: _3dc
        },
        
    ]
    return (
        <div className={styles.pages}>
            <div className={styles.content}>
                <h1 className={styles.title}>Event Map</h1>
                <p className={styles.tag} >Come visit the booths of Night Fiesta 2024!</p>
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