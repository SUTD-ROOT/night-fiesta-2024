import styles from "../../styles/Question.module.css"

const Question = ({
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
    const handleAnswer = (e, ans) => {
        e.preventDefault()
        const colour = Questions[level - 1].point[ans]


        switch (colour) {
            case "red":
                setRedPoints(redPoints + 1);
                break;
            case "yellow":
                setYellowPoints(yellowPoints + 1);
                break;
            case "green":
                setGreenPoints(greenPoints + 1);
                break;
            case "blue":
                setBluePoints(bluePoints + 1);
                break;
            default:
                break;
        }
        document.getElementById("questionComponent").style.animation = "puffOutCenter 1s cubic-bezier(.165,.84,.44,1.000) both"
        if (level + 1 < 11) {
            const timer = setTimeout(() => {
                setLevel(level + 1);
                document.getElementById("questionComponent").style.removeProperty("animation")
            }, 1200);
            const timer2 = setTimeout(() => {
                document.getElementById("questionComponent").style.opacity = 1;
                document.getElementById("questionComponent").style.transform = "scale(1)";
                document.getElementById("questionComponent").style.filter = "blur(0)"


            }, 1300);
            return () => {
                clearTimeout(timer)
                clearTimeout(timer2)
            };
        } else if (level + 1 === 11) {
            const timer3 = setTimeout(() => {
                setLevel(level + 1);
                document.getElementById("questionComponent").style.removeProperty("animation")
            }, 1200);
            return () => clearTimeout(timer3);

        }

    }
    return (
        <div className={styles.component} id="questionComponent">
            <p className={styles.tag}>Question {level}/10</p>
            <h2 className={styles.question}>{Questions[level - 1].question}</h2>
            <button onClick={(e) => handleAnswer(e, 0)}>{Questions[level - 1].ans0}</button>
            <button onClick={(e) => handleAnswer(e, 1)}>{Questions[level - 1].ans1}</button>
            <button onClick={(e) => handleAnswer(e, 2)}>{Questions[level - 1].ans2}</button>
            <button onClick={(e) => handleAnswer(e, 3)}>{Questions[level - 1].ans3}</button>
        </div>
    );
}

export default Question;