export default function Meaning({meaning}) {
    return (
        <div className="Meaning">
            <h4>{meaning.partOfSpeech}</h4>
            <p>{meaning.definition}</p>
            {meaning.example && (
                <p>
                <em>{meaning.example}</em>
                </p>
            )}
        </div>
    )
}