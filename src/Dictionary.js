import React from "react";
import "./Dictionary.css";
import Meaning from "./Meaning";

export default function Dictionary({ result }) {
  if (!result || !Array.isArray(result.meanings)) return null;

  return (
    <div className="Results">
      <h2>{result.word}</h2>

      {result.meanings.map((meaning, index) => (
          <Meaning key={index} meaning={meaning}/>
      ))}
    </div>
  );
}