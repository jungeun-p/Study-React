import "./App.css";
import React, { useEffect, useState } from "react";

// import Average from "./Components/Average";
// import Counter from "./Components/Counter";
// import Event from "./Components/EventPractice";
// import Info from "./Components/Info";
// import useTitle from "./Components/useTitle";
// import useInput from "./Components/useInput";
import useTabs from "./Components/useTabs";
const tabs = [
  {
    title: "section 🐻",
    content: "I'm the content of the Section 🐻",
  },
  {
    title: "section 🐹",
    content: "I'm the content of the Section 🐹",
  },
  {
    title: "section 🐨",
    content: "I'm the content of the Section 🐨",
  },
];
function App() {
  // const title = useTitle("init title");
  // useEffect(() => {
  //   console.log("렌더링 완료!");
  //   console.log(title);
  // }, [title]);
  // const maxLen = (value) => value.length <= 10;
  // const ham = useInput("🐹 : ", maxLen);
  const { currentTab, changeItem } = useTabs(0, tabs);
  const tabss = useTabs(0, tabs);
  // same thing tabss.currentTab === currentTab, tabss.changeItem === changeItem

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
      {tabs.map((tab, index) => (
        <button key={index} onClick={() => changeItem(index)}>
          {tab.title}
        </button>
      ))}
      <div>{currentTab.content}</div>
      {/* <input placeholder="Name" {...ham} /> */}
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
