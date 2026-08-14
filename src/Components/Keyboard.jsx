export default function Keyboard(props) {
    const alphaList = "qwertyuiopasdfghjklzxcvbnm".split("");
    document.addEventListener("keydown", function (e) {
        const key = e.key.toLowerCase();
        if (/^[a-z]$/.test(key) ) {
            props.handleClick(key);
        }
    } )

    return (
        <section className="keys-container">
            {alphaList.map((char) => {
                return (
                    <button className= 
                    {"keys " + (props.correct.includes(char) ? "correct" : (props.wrong.includes(char) ? "wrong" : ""))} 
                            key={char}
                            disabled={props.over}
                            onClick={(e) => props.handleClick(char)}>
                        {char.toUpperCase()}
                    </button>
                )
            })}
        </section>
    )
}