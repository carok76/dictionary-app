import React, { useState } from "react";
import "./Search.css";

export default function Search({ onSearch }) {
    let [input, setInput] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        const trimmed = input.trim();
        if(trimmed) onSearch(trimmed);
    }

    return(
        <div className="SearchForm">
            <form onSubmit={handleSubmit}>
                <input
                    type="Search"
                    placeholder="Enter a word"
                    value={input}
                    className="InputKeyword"
                    onChange={(event) => setInput(event.target.value)}
                />
                <input
                    type="submit"
                    value="search"
                    className="InputButton"
                />
            </form>
        </div>
    )
}