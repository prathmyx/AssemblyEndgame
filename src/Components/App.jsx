import { useState } from "react"
import Status from "./Status"
import Chips from "./Chips"
import { languages } from "./languages"
import { words } from "./words"
import Word from "./Word"
import Keyboard from "./Keyboard"
import Button from "./Button"
import Confetti from "react-confetti"

export default function App() {
    const [word, setWord] = useState(() => words[Math.floor(Math.random() * words.length)]);
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

    function handleButton() {
        setWord(
            prevWord => words[Math.floor(Math.random() * words.length)]
        );
        setGuessed([]);
    }

    const wordList = word.split("");

    return (
        <>
            <Status lastDied={(wrongCount - 1 >= 0)? languages[wrongCount-1].name : ""} won={won} over={over} />
            <Chips list={languages} wrongNo={wrongCount}/>
            <Word word={wordList} guessed={guessed} over={over}/>
            <Keyboard handleClick={handleKeyPress} wrong={wrongLetters} correct={correctLetters} over={over}/>
            {over ? <Button handleClick={handleButton} /> : <></>}
            {won? <Confetti/> : <></>}
        </>
    )
}