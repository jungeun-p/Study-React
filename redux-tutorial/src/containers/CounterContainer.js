import React, { useCallback } from "react";
import Counter from "../components/Counter";
// import { bindActionCreators } from "redux";
import { connect, useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../modules/counter";
import useActions from "../lib/useActions";

const CounterContainer = () => {
  // mapStateToProps
  const number = useSelector(({ counter }) => counter.number);
  // mapDispatchToProps
  // const dispatch = useDispatch();
  // const onIncrease = useCallback(() => dispatch(increase), [dispatch]);
  // const onDecrease = useCallback(() => dispatch(decrease), [dispatch]);

  const [onIncrease, onDecrease] = useActions([increase, decrease], []);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

// const mapStateToProps = ({ counter }) => ({
//   number: counter.number,
// });

// const mapDispatchToProps = (dispatch) =>
//   //   increase: () => {
//   //     dispatch(increase());
//   //   },
//   //   decrease: () => {
//   //     dispatch(decrease());
//   //   },
//   //   bindActionCreators(
//   //     {
//   //       increase,
//   //       decrease,
//   //     },
//   //     dispatch
//   //   );
//   {};

export default CounterContainer;
