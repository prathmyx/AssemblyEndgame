export default function Chips(props) {
    return (
        <section className="chips-container">
            {props.list.map((lang) => {
                let styles = {
                    backgroundColor: lang.backgroundColor,
                    color: lang.color,
                }

                return (
                    <span className="chip"
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