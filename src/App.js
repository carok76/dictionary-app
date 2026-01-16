import React, { useState } from 'react';
import './App.css';
import Search from './Search';

function App() {
  const [, setKeyword] = useState("");

  function handleSearch(keyword) {
    setKeyword(keyword);
  }

  return (
    <div className="App">
      <header>
        <h1>Dictionary</h1>
      </header>

      <h2>What word do you want to look for?</h2>

      <Search onSearch={handleSearch} />

      <footer>
        This project was coded by <a href="https://www.linkedin.com/in/carolin-krahmer-94661399/" target="_blank" rel="noopener noreferrer">Carolin Krahmer</a> and is on <a href="https://github.com/carok76/dictionary-app" target="_blank" rel="noopener noreferrer">GitHub</a> and hosted on <a href="https://caros-dictionary-app.netlify.app/" target="_blank" rel="noopener noreferrer">Netlify</a>.
      </footer>
    </div>
  );
}

export default App;
