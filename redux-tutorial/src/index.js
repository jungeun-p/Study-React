import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./modules";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore, createReducer } from "@reduxjs/toolkit";
import { all } from "redux-saga/effects";
import saga from "./modules/saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
// const store = configureStore({ reducer: rootReducer.reducer });

function* rootSaga() {
  yield all([saga()]);
}

sagaMiddleware(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
