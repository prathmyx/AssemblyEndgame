import { useState } from "react"
import Status from "./Status"
import Chips from "./Chips"
import { languages } from "./languages"
import Word from "./Word"

export default function App() {
    const [word, setWord] = useState("react");

    const langs = languages.map((lang) => {
        return {...lang, isAlive: true}
    });

    const wordList = word.split("");
    
    return (
        <>
            <Status won={true}/>
            <Chips list={langs}/>
            <Word word={wordList}/>
        </>
    )
}