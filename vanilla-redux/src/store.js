import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";
import { createStore } from "redux";

// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// // createAction의 type은 text, 함수이기 때문에 reducer case에서 type처럼 사용 가능
// // 두 개의 object를 얻을 수 있다 (type, payload)
// console.log(addToDo.type, deleteToDo());
// console.log(addToDo("add"));

// const reducer = createReducer([], {
//   // switch, case 사용할 필요가 없다
//   // createReducer는 state를 mutate해도 괜찮다!
//   // redux toolkit이 Immer안에 돌아가기 때문에 mutate도 상관 없음.
//   // return시 작동되지 않는다. -> 왜냐하면 새로운 state를 반환하기 때문에, 아무것도 return하지 않아.
//   // 즉, no mutate, no return.
//   // muetate state -> they don't need to return new state
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },

//   // dosen't mutate state -> they return new state
//   [deleteToDo]: (state, action) => {
//     return state.filter((toDo) => toDo.id !== action.payload);
//   },
// });

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

// toDos.Action으로부터 add와 remove를 export 할 수 있다.
// action export 처리
export const { add, remove } = toDos.actions;

// store를 subscribe 시키는 것
// store의 변동사항에 대해서 subscribe
// react 는 변동 사항에 있어서만 rerendering을 처리한다.\
// store.subscribe();
// export const actionCreators = {
//   addToDo,
//   deleteToDo,
// };

export default store;
