import { useEffect, useState } from "react";
import styles from "../styles/Leaderboard.module.css"
import axios from "axios"

const Leaderboard = () => {

    const [checkingID, setCheckingID] = useState("")
    const [checkPoints, setCheckPoints] = useState()
    const [checkName, setCheckName] = useState("")
    const [isCheck, setIsCheck] = useState(false)
    const [checkError, setCheckError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const [rankBoard, setRankBoard] = useState([])

    useEffect(() => {
        // Function to fetch leaderboard data
        const fetchLeaderboardData = () => {
            axios.get("https://nf-admin.sutdroot.com/booths/leaderboard/", {
                responseType: "json",
            })
                .then(function (response) {
                    console.log(response.data);
                    setRankBoard(response.data);
                })
                .catch(function (error) {
                    console.error(error.message);
                });
        };

        // Fetch leaderboard data initially
        fetchLeaderboardData();

        // Fetch leaderboard data every 1 minute
        const interval = setInterval(fetchLeaderboardData, 20000);

        // Cleanup function to clear interval on component unmount
        return () => clearInterval(interval);
    }, []);

    const check = (e) => {
        e.preventDefault();
        setIsCheck(true);

        if (checkingID != "" && checkingID.length === 6) {
            axios.post('https://nf-admin.sutdroot.com/booths/points_rfid/', {
                rfid: checkingID
            })
                .then(function (response) {
                    console.log(response);
                    setCheckName(response.data.name)
                    setCheckPoints(response.data.score)
                    setCheckError(false);
                    setErrorMsg("")

                }).catch(function (error) {
                    console.error(error.message)
                    setCheckError(true);
                    if (error.response.status === 404) {
                        setErrorMsg("RFID Data Not Found")
                    } else {
                        setErrorMsg(error.message)
                    }
                })
        } else {
            setCheckError(true);
            setErrorMsg("Please key in a 6 digit ID")
        }
    }

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <h1 className={styles.title}>Leaderboard</h1>
                <div className={styles.banner}>
                    <h2>Check your points here!</h2>
                    <h4>Please Enter your 6-digit ID:</h4>
                    <input value={checkingID} onChange={(e) => (setCheckingID(e.target.value))} type="number" placeholder="6-digit ID"></input>
                    <button onClick={(e) => check(e)}>Check</button>
                    <a href="/guide">How does this work?</a>
                </div>
                {(isCheck) ?
                    <div className={styles.checkResultCard}>
                        <h3>{(checkError) ? "Error" : "Your Score Is:"}</h3>
                        <h4>{(checkError) ? errorMsg : `${checkName}: ${checkPoints}`}</h4>
                    </div>
                    : <></>}
                <h3>Top 30 Rankings</h3>
                <p className={styles.note}>Only those in the Top 30 are eligible to participate in the lucky draw!<br/>The more points you get, the greater are your chances of winning!</p>
                <p>(Please refresh the page to see the latest update)</p>
                <div className={styles.rankBoard}>
                    {(rankBoard) ? rankBoard.map((item, i) => (
                        <div className={styles.rankCard} key={i}>
                            <div className={styles.rankCardLeft}>
                                <div className={(i + 1 === 1) ? styles.rankNum1 : (i + 1 === 2) ? styles.rankNum2 : (i + 1 === 3) ? styles.rankNum3 : styles.rankNum}>
                                    <h3>{i + 1}</h3>
                                </div>
                                <div className={styles.rankPerson}>
                                    <h4>{item.name}</h4>
                                    <h4>(ID: {item.id})</h4>

                                </div>

                            </div>
                            <h4 className={styles.rankCardRight}>{item.score}</h4>
                        </div>
                    )) :
                    <h2>Leaderboard is closed</h2>
                    }


                </div>
            </div>

        </div>
    );
}

export default Leaderboard;