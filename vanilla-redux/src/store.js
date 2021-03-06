import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";
import { createStore } from "redux";

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  // action 생성보다는 addToDo를 생성
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

//store
//const store = createStore(reducer);
const store = configureStore({ reducer: toDos.reducer });

console.log(toDos.actions);
export const { add, remove } = toDos.actions;

export default store;
