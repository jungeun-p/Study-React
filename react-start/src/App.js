import "./App.css";

import React, { useEffect, useState } from "react";

import Average from "./Components/Average";
import Counter from "./Components/Counter";
import Event from "./Components/EventPractice";
import Info from "./Components/Info";
import useTitle from "./Components/useTitle";

function App() {
  const title = useTitle("init title");
  return (
    <div className="App">
      <h1>title changer</h1>
      <h2>변경된 타이틀은 {title.title}</h2>
      <input placeholder="input here" onChange={title.onChange} />
      <button onClick={title.onClick}>Change</button>
    </div>
  );
}

// function App() {
//   // const [visible, setVisible] = useState(false);
//   return (
//     <>
//       <useTitle />
//       {/* <button onClick={()=>{
//       setVisible(!visible);
//     }}>
//       {visible ? 'hide' : 'show'}
//     </button>
//     {visible && <Info/>}
//     <Average/>
//     <Fetch/> */}
//     </>
//   );
// }

export default App;
