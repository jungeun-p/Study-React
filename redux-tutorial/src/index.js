import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore, createReducer } from "@reduxjs/toolkit";

const store = createStore(rootReducer, composeWithDevTools());
// const store = configureStore({ reducer: rootReducer.reducer });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
