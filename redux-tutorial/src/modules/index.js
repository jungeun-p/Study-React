import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";
import timeline from "./timeline";

const rootReducer = combineReducers({ counter, todos, timeline });

export default rootReducer;
