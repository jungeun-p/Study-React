import { createAction } from "@reduxjs/toolkit";
import { createStore } from "redux";

// action
// const ADD = "ADD";
// const DELETE = "DELETE";

// actionCreators
// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };

// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// createAction의 type은 text, 함수이기 때문에 reducer case에서 type처럼 사용 가능
// 두 개의 object를 얻을 수 있다 (type, payload)
console.log(addToDo.type, deleteToDo());

//reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    //case ADD:
    case addToDo.type:
      // 액션에게 보내고 싶어하는 정보가 무엇이던지, payload와 함께 보내진다.
      return [{ text: action.payload, id: Date.now() }, ...state];
    //case DELETE:
    case deleteToDo.type:
      // action은 function인 createAction으로 만들어지기 때문에 id or text가 아닌 payload로 받아온다
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
};

//store
const store = createStore(reducer);

// store를 subscribe 시키는 것
// store의 변동사항에 대해서 subscribe
// react 는 변동 사항에 있어서만 rerendering을 처리한다.\
// store.subscribe();
export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
