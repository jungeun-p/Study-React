import "./App.css";
import React, { useEffect, useState } from "react";

// import Average from "./Components/Average";
// import Counter from "./Components/Counter";
// import Event from "./Components/EventPractice";
// import Info from "./Components/Info";
// import useTitle from "./Components/useTitle";
import useInput from "./Components/input";

// const useInput = (initialValue, validator) => {
//   const [value, setValue] = useState(initialValue);
//   const onChange = (e) => {
//     // const {
//     //   target: { value },
//     // } = e;
//     const { value } = e.target;
//     let willUpdate = true;
//     if (typeof validator === "function") {
//       willUpdate = validator(value);
//     }
//     if (willUpdate) {
//       setValue(value);
//     } else {
//       alert("too long!");
//     }
//   };
//   return { value, onChange };
// };

function App() {
  // const title = useTitle("init title");
  // useEffect(() => {
  //   console.log("렌더링 완료!");
  //   console.log(title);
  // }, [title]);
  const maxLen = (value) => value.length <= 10;
  const ham = useInput("🐹 : ", maxLen);
  console.log(ham);

  return (
    <div className="App">
      {/* <h1>title changer</h1>
      <h2>변경된 타이틀은 {title.title}</h2>
      <input placeholder="input here" onChange={title.onChange} />
    <button onClick={title.onClick}>Change</button> */}
      {/* <Counter />
      <Info />
      <Average /> */}
      <h2>use Hooks</h2>
      <input placeholder="Name" {...ham} />
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
