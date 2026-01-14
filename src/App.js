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

      <Search onSearch={handleSearch} />

      <footer>
        This project was coded by Carolin Krahmer and is on GitHub and hosted on Netlify.
      </footer>
    </div>
  );
}

export default App;
