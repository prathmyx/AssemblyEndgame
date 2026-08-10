export default function Word(props) {

    return (
        <section className="word-container">
            {props.word.map((char, index) => {
                return (
                    <span 
                        className="word-char" 
                        key={index}>
                        {((props.over || props.guessed.includes(char)) ? char.toUpperCase() : "")}
                    </span>
                )
            })}
        </section>
    )
}