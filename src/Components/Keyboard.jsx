export default function Keyboard(props) {
    const alphaList = "qwertyuiopasdfghjklzxcvbnm".split("");

    return (
        <section className="keys-container">
            {alphaList.map((char) => {
                return (
                    <button className= 
                    {"keys " + (props.correct.includes(char) ? "correct" : (props.wrong.includes(char) ? "wrong" : ""))} 
                            key={char}
                            onClick={(e) => props.handleClick(char)}>
                        {char.toUpperCase()}
                    </button>
                )
            })}
        </section>
    )
}