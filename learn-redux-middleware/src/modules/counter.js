import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const counters = createSlice({
  name: "counterReducer",
  initialState,
  reducers: {
    increase: (state, action) => ({ state: state + 1 }),
    decrease: (state, action) => ({ state: state - 1 }),
  },
});

const counter = counters.reducer;

export const { increase, decrease } = counters.actions;

// 1초 뒤에 incerase 혹은 decrease 함수를 디스패치
export const increaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};
export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

export default counter;
