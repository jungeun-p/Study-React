import React, { useEffect, useReducer, useState } from "react";

const Counter = () => {
  //   const [value, setValue] = useState(0);
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { value: state.value + 1 };
      case "DECREMENT":
        return { value: state.value - 1 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { value: -1 });
  const { value } = state;
  useEffect(() => {
    console.log(value);
  }, []);

  return (
    <div>
      <h2>Conter</h2>
      <p>now counter value is {value}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;
