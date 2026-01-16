import Synonyms from "./Synonyms"

export default function Meaning({meaning}) {
    function showExamples() {
        if(!meaning.example) return null;
        return (
        <div><strong>Examples: </strong>{meaning.example && (
            <p><em>{meaning.example}</em></p>
            )}
        </div>
        )}
        
        
    return (
        <div className="Meaning">
            <h3>{meaning.partOfSpeech}</h3>
            <p><strong>Definition: </strong>{meaning.definition}</p>
            {showExamples()}
            <Synonyms synonyms={meaning.synonyms}/>
        </div>
    )
}