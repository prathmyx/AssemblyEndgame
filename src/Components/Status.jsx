import { useMemo } from "react";

export default function Status(props) {
    let language = props.lastDied;
    
    const farewells = [
        `Farewell, ${language}`,
        `Adios, ${language}`,
        `R.I.P., ${language}`,
        `We'll miss you, ${language}`,
        `Oh no, not ${language}!`,
        `${language} bites the dust`,
        `Gone but not forgotten, ${language}`,
        `The end of ${language} as we know it`,
        `Off into the sunset, ${language}`,
        `${language}, it's been real`,
        `${language}, your watch has ended`,
        `${language} has left the building`
    ];

    const farewell = useMemo(
        () => farewells[Math.floor(Math.random() * farewells.length)],
        [language]
    )

    let styles = {
        backgroundColor: props.over ? (props.won ? "#10A95B" : "#BA2A2A") : "#7A5EA7" ,
        visibility: ((language == "" && !props.over )? "hidden" : "")
    }

    if (!props.over) {
        styles.border = "1px dashed #323232";
    }

    return (
        <section className="status-container" style={styles} >
            {props.over ? 
                <>
                    <h1 className="status-head">{props.won?"You Win!" : "Game Over!"}</h1>
                    <p className="status-body">{props.won?"Well Done 🎉":"You lose! Better start learning Assembly 💀"}</p>
                </>
                : 
                <>
                    {farewell}
                </>
            }
        </section>
    )
}