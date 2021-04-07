import { handleActions } from "redux-actions";
import produce from "immer";
import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";

// const CHANGE_INPUT = "todos/CHANGE_INPUT";
// const INSERT = "todos/INSERT";
// const TOGGLE = "todos/TOGGLE";
// const REMOVE = "todos/REMOVE";

// export const changeInput = (input) => ({ type: CHANGE_INPUT, input });
// export const changeInput = createAction(CHANGE_INPUT, (input) => input);
// export const changeInput = createAction("CHANGE_INPUT");
//
let id = 3;
// 호출시 id는 1씩 더해진다.
// export const insert = (text) => ({
//   type: INSERT,
//   todo: {
//     id: id++,
//     text,
//     done: false,
//   },
// });
// export const insert = createAction(INSERT, (text) => ({
//   id: id++,
//   text,
//   done: false,
// }));
// export const insert = createAction("INSERT");

// export const toggle = (id) => ({ type: TOGGLE, id });
// export const toggle = createAction(TOGGLE, (id) => id);
// export const toggle = createAction("TOGGLE");

// export const remove = (id) => ({ type: REMOVE, id });
// export const remove = createAction(REMOVE, (id) => id);
// export const remove = createAction("REMOVE");

const initialState = {
  input: "",
  todos: [
    { id: 1, text: "redux basic", done: true },
    { id: 2, text: "react with redux", done: false },
  ],
};

const toDos = createSlice({
  name: "todosReducer",
  initialState,
  reducers: {
    changeInput: (state, action) => ({ ...state, input: action.payload }),
    insert: (state, action) => {
      state.todos.push({ id: id++, text: action.payload, done: false });
    },
    toggle: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      todo.done = !todo.done;
    },
    remove: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === id);
      state.todos.splice(index, 1);
    },
  },
});

const todos = toDos.reducer;

// console.log(todos.actions);
// todos.actions로부터 add, 각각의 타입의 actions를 export 할 수 있다!
export const { changeInput, insert, toggle, remove } = toDos.actions;

// const todos = createReducer(initialState, {
//   [changeInput]: (state, action) => ({ ...state, input: action.payload }),
//   //mutate
//   [insert]: (state, action) => {
//     state.todos.push({ id: id++, text: action.payload, done: false });
//   },
//   [toggle]: (state, action) => {
//     const todo = state.todos.find((todo) => todo.id === action.payload);
//     todo.done = !todo.done;
//   },
//   // return
//   [remove]: (state, action) =>
//     // state.todos.filter((todo) => todo.id !== action.payload),
//     {
//       const index = state.todos.findIndex((todo) => todo.id === id);
//       state.todos.splice(index, 1);
//     },
// });

// function todoss(state = initialState, action) {
//   switch (action.type) {
//     case changeInput.type:
//       console.log(action);
//       return {
//         ...state,
//         input: action.payload,
//       };
//     case insert.type:
//       // return {
//       //   ...state,
//       //   todos: state.todos.concat(action.payload),
//       // };
//       return {
//         ...state,
//         todos: state.todos.concat({
//           id: id++,
//           text: action.payload,
//           done: false,
//         }),
//       };
//     case toggle.type:
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.payload ? { ...todo, done: !todo.done } : todo
//         ),
//       };
//     case remove.type:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// }

// const todos = handleActions(
//   {
//     [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
//     [INSERT]: (state, { payload: todo }) =>
//       // ({
//       //   ...state,
//       //   todos: state.todos.concat(todo),
//       // }),
//       produce(state, (draft) => {
//         draft.todos.push(todo);
//       }),
//     [TOGGLE]: (state, { payload: id }) =>
//       // ({
//       //   ...state,
//       //   todos: state.todos.map((todo) =>
//       //     todo.id === id ? { ...todo, done: !todo.done } : todo
//       //   ),
//       // }),
//       produce(state, (draft) => {
//         const todo = draft.todos.find((todo) => todo.id === id);
//         todo.done = !todo.done;
//       }),
//     [REMOVE]: (state, { payload: id }) =>
//       // ({
//       //   ...state,
//       //   todos: state.todos.filter((todo) => todo.id !== id),
//       // }),
//       produce(state, (draft) => {
//         const index = draft.todos.findIndex((todo) => todo.id === id);
//         draft.todos.splice(index, 1);
//       }),
//   },
//   initialState
// );

export default todos;
