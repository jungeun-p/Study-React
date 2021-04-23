import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import AboveGame from "./components/AboveGame";
import Game from "./components/Game";
import useLocalStorageNumber from "./hook/useLocalStorageNumber";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useLocalStorageNumber("bestScore", 0);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  });
  return (
    <div className="container">
      <Header score={score} bestScore={bestScore} />
      <AboveGame />
      <Game setScore={setScore} />
    </div>
  );
}

export default App;
