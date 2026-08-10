export default function Keyboard(props) {
    return (
        <section className="keys-container">
            {props.alpha.map((keys) => {
                return (
                    <button className="keys"
                          key={keys}>
                        {keys.toUpperCase()}
                    </button>
                )
            })}
        </section>
    )
}