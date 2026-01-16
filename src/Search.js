import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Dictionary from "./Dictionary";

export default function Search({ onSearch }) {
    let [keyword, setKeyword] = useState("");
    let [result, setResult] = useState({});
    let [error, setError] = useState(null);

    function handleResponse(response) {
        console.log(response.data);

        if (response.data && Array.isArray(response.data.meanings) && response.data.meanings.length > 0) {
            setResult(response.data);
            setError(null);
        } else {
            setResult({});
            setError("Word could not be found in dictionary. Please check the spelling or change the word.");
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        let apikey = "o922906b22974ec99e9bc3858a42ft20";
        let apiurl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apikey}`;

        const trimmed = keyword.trim();

        if (!trimmed) {
            setResult({});
            setError("Please enter a word.");
            return;
        }

        setError(null);
        setResult({});

        if(trimmed) onSearch(trimmed);

        axios.get(apiurl).then(handleResponse).catch(() => {
            setResult({});
            setError("Network error. Please try again.");
        });

    }

    return(
        <div className="SearchForm">
            <form onSubmit={handleSubmit}>
                <input
                    type="Search"
                    placeholder="Enter a word"
                    value={keyword}
                    className="InputKeyword"
                    onChange={(event) => setKeyword(event.target.value)}
                />
                <input
                    type="submit"
                    value="Search"
                    className="InputButton"
                />
            </form>

            <div className="hint">
                suggested words: dachshund, wine, spring, ...
            </div>

            {error && <p className="ErrorMessage">{error}</p>}

            <Dictionary result={result} keyword={keyword} />
        </div>
    )
}