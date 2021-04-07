import React, { useCallback } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";
import useActions from "../lib/useActions";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter);
  // mapDispatchToProps
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease), [dispatch]);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
