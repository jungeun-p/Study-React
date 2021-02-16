import { createStore } from "redux";

const add = document.getElementById("add");
const number = document.getElementById("span");
const minus = document.getElementById("minus");

// reducer 함수 (빈)
// 데이터를 변경하는 함수 (incerase, decrease)
// return하는 것은 application에 있는 모든 data
// reducer만 data를 modify
// data는 reducer에만 존재한다.
// action을 통해 호출된다
const countModifier = (count = 1, action) => {
  console.log(count, action);
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

// 스토어
// 데이터를 저장하는 곳
// 스토어를 만들면 reducer를 만들어 달라고 한다.
const countStore = createStore(countModifier);
console.log(countStore.getState());
//getState(); state값을 얻는다

// 스토어에 countModifier -> initial state로 불러온다 -> state=0, initialState는 0이 된다

// action
// redux에서 fucntion을 부를 때 두번째 parameter or argument
// countModifier(currentState=0, {type:'hello'}) 리듀스에게 메시지를 보내는 방법
// dispatch와 메시지로 reducer에게 메시지 전달
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "MINUS" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
console.log(countStore.getState());
