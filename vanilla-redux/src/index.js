// import App from "./App";
// import React from "react";
// import ReactDOM from "react-dom";
// import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

const add = document.getElementById("add");
const number = document.getElementById("span");
const minus = document.getElementById("minus");

// reducer 함수 (빈)
// 데이터를 저장하고 변경하는 곳
const countModifier = () => {};

// 스토어
const countStore = createStore(countModifier);
console.log(countStore);
