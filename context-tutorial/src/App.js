import "./App.css";
import ColorBox from "./Components/ColorBox";
import { ColorProvider } from "./Context/color";
import React from "react";
import SelectColor from "./Components/SelectColor";

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColor />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
