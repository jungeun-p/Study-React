import "./App.css";
import ColorBox from "./Components/ColorBox";
import ColorContext from "./Context/color";

function App() {
  return (
    <ColorContext.Provider value={{ color: "beige" }}>
      <ColorBox />
    </ColorContext.Provider>
  );
}

export default App;
