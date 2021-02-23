import React, { Profiler } from "react";

import App from "./Components/App";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import store from "./store";

ReactDOM.render(
  // application을 index.js와 연결 (store에)
  // provider를 사용 ->
  // provider에게는 store가 필요하다
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
