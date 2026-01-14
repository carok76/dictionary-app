import React, { useState } from 'react';
import './App.css';
import Search from './Search';
import Dictionary from "./Dictionary";

function App() {
  const [keyword, setKeyword] = useState("");

  function handleSearch(keyword) {
    setKeyword(keyword);
  }

  return (
    <div className="App">
      <header>
        <h1>Dictionary</h1>
      </header>

      <Search onSearch={handleSearch} />
      <Dictionary keyword={keyword} />

      <footer>
        This project was coded by Carolin Krahmer and is on GitHub and hosted on Netlify.
      </footer>
    </div>
  );
}

export default App;
