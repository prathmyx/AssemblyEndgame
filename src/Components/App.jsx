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
            <Status won={true}/>
            <Chips list={langs}/>
            <Word word={wordList}/>
            <Keyboard handleClick={handleKeyPress} wrong={wrongLetters} correct={correctLetters}/>
            <Button handleClick={false} />
        </>
    )
}