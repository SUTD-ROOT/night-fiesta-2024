import { useEffect, useState } from "react";
import styles from "../../styles/EndQuiz.module.css"
import dragonCard from "../../assets/quiz/Dragon_Card.png"
import foxCard from "../../assets/quiz/Fox_Card.png"
import jackalopeCard from "../../assets/quiz/Jackalope_Card.png"
import wolfCard from "../../assets/quiz/Wolf_Card.png"
const EndQuiz = ({
    level,
    setLevel,
    Questions,
    redPoints,
    setRedPoints,
    yellowPoints,
    setYellowPoints,
    greenPoints,
    setGreenPoints,
    bluePoints,
    setBluePoints
}) => {
    const [char, setChar] = useState("")

    useEffect(() => {
        let scoreArr = [
            ["Dragon", redPoints],
            ["Fox", yellowPoints],
            ["Jackalope", greenPoints],
            ["Wolf", bluePoints]
        ]
        scoreArr.sort(function (a, b) {
            return a[1] - b[1];
        })
        setChar(scoreArr[0][0])
    }, [])

    const handleRestart = () => {
        setLevel(0);
        setRedPoints(0);
        setBluePoints(0);
        setGreenPoints(8);
        setYellowPoints(0);
    }
    return (
        <div className={styles.component}>
            {(char == "Dragon") ? <img alt="" src={dragonCard} className={styles.card} /> : <></>}
            {(char == "Fox") ? <img alt="" src={foxCard} className={styles.card} /> : <></>}
            {(char == "Jackalope") ? <img alt="" src={jackalopeCard} className={styles.card} /> : <></>}
            {(char == "Wolf") ? <img alt="" src={wolfCard} className={styles.card} /> : <></>}
            <div className={styles.container}>
                <h1 className={styles.title}>You are a <span>{char}</span></h1>
                {(char == "Dragon") ? <button className={styles.share}><a href={dragonCard} download="NF24-Dragon">DOWNLOAD CARD</a></button> : <></>}
                {(char == "Fox") ? <button className={styles.share}><a href={foxCard} download="NF24-Fox">DOWNLOAD CARD</a></button> : <></>}
                {(char == "Jackalope") ? <button className={styles.share}><a href={jackalopeCard} download="NF24-Jackalope">DOWNLOAD CARD</a></button> : <></>}
                {(char == "Wolf") ? <button className={styles.share}><a href={wolfCard} download="NF24-Wolf">DOWNLOAD CARD</a></button> : <></>}

                <button onClick={() => handleRestart()}className={styles.retry}>RETAKE QUIZ</button>
            </div>
        </div>
    );
}

export default EndQuiz;