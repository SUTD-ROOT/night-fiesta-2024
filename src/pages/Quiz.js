import { useEffect, useState } from "react";
import styles from "../styles/Quiz.module.css"
import StartQuiz from "../components/quiz/StartQuiz";
import Question from "../components/quiz/Question";
import EndQuiz from "../components/quiz/EndQuiz";

const Quiz = () => {
    const [level, setLevel] = useState(0)
    const [redPoints, setRedPoints] = useState(0)
    const [yellowPoints, setYellowPoints] = useState(0)
    const [greenPoints, setGreenPoints] = useState(0)
    const [bluePoints, setBluePoints] = useState(0)

    const Questions = [
        //1
        {
            question: "Choose a club!",
            ans0: "Sports",
            ans1: "Automation, Robotics, and Mechatronics",
            ans2: "Performing Arts",
            ans3: "Chess",
            point: ["yellow", "red", "green", "blue"]
        },
        //2
        {
            question: "You chance upon a 3D printer! You would most likely:",
            ans0: "Immediately tell other people about it",
            ans1: "Carefully scrutinize it",
            ans2: "Attempt to use the machine immediately",
            ans3: "Walk away, it doesn’t really interest you",
            point: ["yellow", "blue", "red", "green"]
        },
        //3
        {
            question: "When you are initially assigned a project together with your teammates, which of the following are you more likely to do first?",
            ans0: "Take the lead",
            ans1: "Silently start researching",
            ans2: "Get to know your group members better first",
            ans3: "Wait patiently for someone to take the lead and do as they say",
            point: ["red", "blue", "yellow", "green"]
        },
        {
            question: "You’re unpacking and your new roommate comes in. What would you do?",
            ans0: "You introduce yourself first and start having conversations so you can get to know them better",
            ans1: "Wait for the other person to introduce themselves first",
            ans2: "Say a quick hi and continue doing your own thing",
            ans3: "Give a silent nod, but don’t say anything",
            point: ["yellow", "green", "red", "blue"]
        },
        //5
        {
            question: "You are working on a group project and one of your team members is not cooperating. What will you do?",
            ans0: "Snitch on your groupmate and report to the prof/teacher",
            ans1: "Check up on the person, try to see if the problem can be solved",
            ans2: "Go with the flow, if they don’t want to help, then bopes la",
            ans3: "Try to tank, as long as the project turns out perfect, all is good",
            point: ["red", "yellow", "green", "blue"]
        },
        //6
        {
            question: "You receive negative feedback from a superior, what is your most likely response?",
            ans0: "Find ways to justify your actions and thought process, because you know best",
            ans1: "Not be bothered at all, because you let it go past your head and forget quickly",
            ans2: "Overthink about the feedback received",
            ans3: "Listen and analyse and actually work on your weaknesses",
            point: ["red", "yellow", "blue", "green"]
        },
        //7
        {
            question: "You are given the chance to choose anywhere to sit in the class. Where would you be more inclined to sit at?",
            ans0: "Front, wherever the prof/teacher is <3",
            ans1: "Middle/By the sides",
            ans2: "Any seat that has people around it",
            ans3: "All the way at the back",
            point: ["red", "green", "yellow", "blue"]
        },
        //8
        {
            question: "You have a question to ask the Professor. Do you:",
            ans0: "Google it yourself",
            ans1: "Accumulate questions and bombard the Prof after class ",
            ans2: "Ask friends first!",
            ans3: "Ask the Prof right away",
            point: ["green", "blue", "yellow", "red"]
        },
        //9
        {
            question: "You are playing a game where you need to send players from your team onto the field. You choose to:",
            ans0: "Choose the most optimal players to go on the field. I need to win!",
            ans1: "Everyone has a chance to go on the game, no one is left out!",
            ans2: "Whoever wants to go, go. A very diplomatic method.",
            ans3: "I don't care lol",
            point: ["red", "yellow", "green", "green"]
        },
        //10
        {
            question: "You are currently taking a difficult exam. Your strategy would be to:",
            ans0: "Start calculating the minimum marks needed to attain a certain grade",
            ans1: "Do the questions you are confident in scoring, whatever results you get... it is what it is",
            ans2: "Try your absolute best, will put down a answer for every question, even if you are not sure that it is correct",
            ans3: "Put a blank for all the questions you don’t know how to do ",
            point: ["blue", "red", "yellow", "green"]
        },
    ]

    useEffect(() => {
        setLevel(0);
        setRedPoints(0);
        setBluePoints(0);
        setGreenPoints(0);
        setYellowPoints(0);
    }, [])
    return (
        <div className={styles.page}>
            <div className={styles.bg}></div>
            {(level === 0) ? <StartQuiz {...{ level, setLevel, redPoints, setRedPoints, yellowPoints, setYellowPoints, greenPoints, setGreenPoints, bluePoints, setBluePoints }} /> : <></>}
            {(level >= 1 && level <= 10) ? <Question {...{level, setLevel, Questions, redPoints, setRedPoints, yellowPoints, setYellowPoints, greenPoints, setGreenPoints, bluePoints, setBluePoints}} /> : <></>}
            {(level === 11) ? <EndQuiz {...{level, setLevel, Questions, redPoints, setRedPoints, yellowPoints, setYellowPoints, greenPoints, setGreenPoints, bluePoints, setBluePoints}}/> : <></>}
        </div>
    );
}

export default Quiz;