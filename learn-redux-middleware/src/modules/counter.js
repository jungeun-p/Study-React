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

export default counter;
