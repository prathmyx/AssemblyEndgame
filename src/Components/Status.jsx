export default function Status(props) {
    let styles = {
        backgroundColor: props.won ? "#10A95B" : "#BA2A2A"
    }

    return (
        <section className="status-container" style={styles}>
            <h1 className="status-head">{props.won?"You Win!" : "Game Over!"}</h1>
            <p className="status-body">{props.won?"Well Done 🎉":"You lose! Better start learning Assembly 💀"}</p>
        </section>
    )
}