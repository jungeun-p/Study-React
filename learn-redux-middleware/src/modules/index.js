import { combineReducers } from "redux";
import counter from "./counter";
import sample from "./sample";
import loading from "../lib/loading";
const rootReducer = combineReducers({ counter, sample, loading });

export default rootReducer;
