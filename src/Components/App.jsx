import { useState } from "react"
import Status from "./Status"
import Chips from "./Chips"
import { languages } from "./languages"
import Word from "./Word"
import Keyboard from "./Keyboard"
import Button from "./Button"

export default function App() {
    const [word, setWord] = useState("react");
    const [guessed, setGuessed] = useState([]);

    const wrongLetters = guessed.filter((letter) => !word.includes(letter));
    const wrongCount = wrongLetters.length;
    const correctLetters = guessed.filter((letter) => word.includes(letter));

    const over = (wrongCount == languages.length) || (correctLetters.length == new Set(word).size);
    const won = (correctLetters.length == new Set(word).size);

    function handleKeyPress(letter) {
        setGuessed(
            prevGuessed => [... new Set(prevGuessed).add(letter)]
        )
    }

    const langs = languages.map((lang) => {
        return {...lang, isAlive: true}
    });

    const wordList = word.split("");

    return (
        <>
            <Status lastDied={(wrongCount - 1 >= 0)? languages[wrongCount-1].name : ""} won={won} over={over} />
            <Chips list={langs} wrongNo={wrongCount}/>
            <Word word={wordList}/>
            <Keyboard handleClick={handleKeyPress} wrong={wrongLetters} correct={correctLetters} over={over}/>
            <Button handleClick={false} />
        </>
    )
}