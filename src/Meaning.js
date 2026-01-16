import Synonyms from "./Synonyms"
import "./Meaning.css";

export default function Meaning({meaning}) {
    function showExamples() {
        if(!meaning.example) return null;
        return (
        <div>{meaning.example && (
            <p><em>{meaning.example}</em></p>
            )}
        </div>
        )}
        
        
    return (
        <div className="Meaning">
            <h3>{meaning.partOfSpeech}</h3>
            <div className="definition">
                {meaning.definition}
            </div>
            <div className="example">
                {showExamples()}
            </div>
            <Synonyms synonyms={meaning.synonyms}/>
        </div>
    )
}