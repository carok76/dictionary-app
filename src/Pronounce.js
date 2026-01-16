import React from "react";

export default function Pronounce({ text, lang = "en-GB" }) {
  function speak() {
    if (!text) return;
    if (!("speechSynthesis" in window)) {
      alert("Dein Browser unterstützt leider keine Sprachausgabe.");
      return;
    }

    window.speechSynthesis.cancel(); // stoppt ggf. laufende Ausgabe
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = lang;
    window.speechSynthesis.speak(utter);
  }

  return (
    <button type="button" onClick={speak}>
      🔊 
    </button>
  );
}