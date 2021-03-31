import { createStore } from "redux";

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// action type
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// action function
// action 객체를 만드는 액션 생성 함수
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE }, difference);
const decrease = () => ({ type: DECREASE });

const initialState = {
  toggle: false,
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, // no mutate
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

const render = () => {
  const state = store.getState();
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }
  // counter 처리
  counter.innerText = state.counter; // initialState.counter
};
render();

// 스토어 상태가 바뀔 때마다 render 함수를 호출.
store.subscribe(render);

// 액션을 발생시키는 dispatch 함수
divToggle.onClick = () => {
  store.dispatch(toggleSwitch());
};

btnIncrease.onClick = () => {
  store.dispatch(increase(1));
};

btnDecrease.onClick = () => {
  store.dispatch(decrease());
};
