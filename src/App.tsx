import React, { useState, useEffect } from "react";
import { words } from "./words";
import "./App.css";

function App() {
  const [word, setWord] = useState(words[0]);

  const randomSelectWord = () => {
    return words[Math.floor(Math.random() * words.length)];
  };

  const handleClick = () => {
    const newWord = randomSelectWord();
    setWord(newWord);
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    const newWord = randomSelectWord();
    setWord(newWord);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress, false);
    return () => {
      document.removeEventListener("keydown", handleKeyPress, false);
    };
  });

  return (
    <div className="App" onClick={handleClick}>
      <h1>{word}</h1>
    </div>
  );
}

export default App;
