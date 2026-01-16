import React from "react";
import "./Dictionary.css";
import Meaning from "./Meaning";
import Pronounce from "./Pronounce";

export default function Dictionary({ result }) {
  if (!result || !Array.isArray(result.meanings)) return null;

  return (
    <div className="Results">
      <h2>{result.word}</h2>
      <h3>{result.phonetic}</h3>
        <Pronounce text={result.word} lang="en-US" />
      {result.meanings.map((meaning, index) => (
          <Meaning key={index} meaning={meaning}/>
      ))}
    </div>
  );
}