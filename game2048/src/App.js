import React from "react";
import Header from "./components/Header";
import AboveGame from "./components/AboveGame";
import Game from "./components/Game";

function App() {
  return (
    <div className="container">
      <Header />
      <AboveGame />
      <Game />
    </div>
  );
}

export default App;
