import { createAction, handleActions } from "redux-actions";
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const incerase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = 0;

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 2,
  },
  initialState
);

// const counters = createSlice({
//   name: "counterReducer",
//   initialState,
//   reducers: {
//     increase: (state, action) => ({ state: state + 1 }),
//     decrease: (state, action) => ({ state: state - 1 }),
//   },
// });

// const counter = counters.reducer;

// export const { increase, decrease } = counters.actions;

// 1초 뒤에 incerase 혹은 decrease 함수를 디스패치
export const increaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(incerase());
  }, 1000);
};
export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

export default counter;
