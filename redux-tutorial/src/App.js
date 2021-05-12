import "./App.css";
import Todos from "./components/Todos";
import CounterContainer from "./containers/CounterContainer";
import TimelineContainer from "./containers/TimelineContainer";
import TodosContainer from "./containers/TodosContainer";

function App() {
  return (
    <>
      <h2>redux tutorial</h2>
      <CounterContainer number={0} />
      <hr />
      <TodosContainer />
      <TimelineContainer />
    </>
  );
}

export default App;
