import "./Highlight.css";

/**
 * Highlight: reusable card for one "Why Travel With Us" item on the About page.
 * Props: icon (emoji), title, text.
 */
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