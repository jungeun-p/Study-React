import React, { Profiler } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./Components/App";
import store from "./store";

ReactDOM.render(
  // application을 index.js와 연결
  // provider에게는 store가 필요하다
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
