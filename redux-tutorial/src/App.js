import "./App.css";
import Todos from "./components/Todos";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";

function App() {
  return (
    <>
      <h2>redux tutorial</h2>
      <CounterContainer number={0} />
      <hr />
      <TodosContainer />
    </>
  );
}

export default App;
