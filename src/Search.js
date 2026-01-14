import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search({ onSearch }) {
    let [keyword, setKeyword] = useState("sunset");

    function handleResponse(response) {
        console.log(response.data);
    }

    function handleSubmit(event) {
        event.preventDefault();

        let apikey = "o922906b22974ec99e9bc3858a42ft20";
        let apiurl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apikey}`;

        const trimmed = keyword.trim();
        if(trimmed) onSearch(trimmed);

        axios.get(apiurl).then(handleResponse);

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
                    value="search"
                    className="InputButton"
                />
            </form>
        </div>
    )
}