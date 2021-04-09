import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import rootReducer from "./modules";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
