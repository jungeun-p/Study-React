import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increaseAsync, decreaseAsync } from "../modules/counter";

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
  // const number = useSelector((state) => state.counter);
  // mapDispatchToProps
  // const dispatch = useDispatch();
  // const onIncrease = useCallback(() => dispatch(increase), [dispatch]);
  // const onDecrease = useCallback(() => dispatch(decrease), [dispatch]);

  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    />
  );
};

export default connect((state) => ({ number: state.counter }), {
  increaseAsync,
  decreaseAsync,
})(CounterContainer);
