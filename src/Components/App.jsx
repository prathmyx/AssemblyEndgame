import Status from "./Status"
import Chips from "./Chips"
import { languages } from "./languages"

export default function App() {
    const langs = languages.map((lang) => {
        return {...lang, isAlive: true}
    });

    return (
        <>
            <Status won={true}/>
            <Chips list={langs}/>
        </>
    )
}