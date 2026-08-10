export default function Chips(props) {
    return (
        <section className="chips-container">
            {props.list.map((lang, index) => {
                let styles = {
                    backgroundColor: lang.backgroundColor,
                    color: lang.color,
                }

                return (
                    <span className= {"chip " + (index < props.wrongNo ? "died" : "")}
                        style={styles}
                        key={lang.name}
                        >
                            {lang.name}
                    </span>
                )
            }
            )}
        </section>
    )
}