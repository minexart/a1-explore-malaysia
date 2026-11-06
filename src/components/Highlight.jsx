import "./Highlight.css";

function Highlight(props) {
    return (
        <div className="highlight-card">
            <span className="highlight-icon">{props.icon}</span>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>

    );
}
export default Highlight;