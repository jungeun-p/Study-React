import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id: parseInt(id),
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

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
