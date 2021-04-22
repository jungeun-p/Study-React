import React, { useState } from "react";
import Header from "./components/Header";
import AboveGame from "./components/AboveGame";
import Game from "./components/Game";

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="container">
      <Header score={score} bestScore={0} />
      <AboveGame />
      <Game />
    </div>
  );
}

export default App;
