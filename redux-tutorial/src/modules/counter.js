// import { createAction, handleActions } from "redux-actions";
import { createAction, createReducer } from "@reduxjs/toolkit";

// const INCREASE = "counter/INCREASE";
// const DECREASE = "counter/DECREASE";

// export const increase = createAction(INCREASE);
// export const decrease = createAction(DECREASE);

export const increase = createAction("INCREASE");
export const decrease = createAction("DECREASE");

const initialState = {
  number: 0,
};

// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }

const counter = createReducer(initialState, {
  [increase]: (state, action) => ({ number: state.number + 1 }),
  [decrease]: (state, action) => ({ number: state.number - 1 }),
});
// const counter = handleActions(
//   {
//     [INCREASE]: (state, action) => ({ number: state.number + 1 }),
//     [DECREASE]: (state, action) => ({ number: state.number - 1 }),
//   },
//   initialState
// );

export default counter;
