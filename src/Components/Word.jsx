export default function Word(props) {

    return (
        <section className="word-container">
            {props.word.map((char, index) => {
                return (<span 
                    className="word-char" 
                    key={index}>
                        {char.toUpperCase()}
                    </span>)
            })}
        </section>
    )
}