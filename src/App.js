import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search';

function App() {
  let [keyword, setKeyword] = useState(null);

  function handleSearch(inputKeyword) {
    setKeyword(inputKeyword);
  }

  return (
    <div className="App">
      <header>
        <h1>Dictionary</h1>
      </header>
      <Search onSearch={handleSearch} />
      <footer>This project was coded by Carolin Krahmer and is on GitHub and hosted on Netlify.</footer>
    </div>
  );
}

export default App;
