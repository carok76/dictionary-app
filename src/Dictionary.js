import "./Dictionary.css";

export default function Dictionary(props) {

    return (
    <div>
        <p>Gesuchtes Wort: <strong>{props.keyword || "—"}</strong></p>
    </div>
    );
}