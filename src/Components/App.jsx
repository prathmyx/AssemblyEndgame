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
    const correctLetters = guessed.filter((letter) => word.includes(letter));

    const over = (wrongLetters.length == languages.length) || (correctLetters.length == new Set(word).size);
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
            <Status lastDied={(wrongLetters.length - 1 >= 0)? languages[wrongLetters.length-1].name : ""} won={won} over={over} />
            <Chips list={langs}/>
            <Word word={wordList}/>
            <Keyboard handleClick={handleKeyPress} wrong={wrongLetters} correct={correctLetters} over={over}/>
            <Button handleClick={false} />
        </>
    )
}