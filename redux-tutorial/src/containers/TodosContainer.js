import { changeInput, insert, toggle, remove } from "../modules/todos";
import { connect } from "react-redux";
import Todos from "../components/Todos";
// import { bindActionCreators } from "redux";
const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

const mapStateToProps = ({ todos }) => ({
  input: todos.input,
  todos: todos.todos,
});

export default connect(mapStateToProps, {
  changeInput,
  insert,
  toggle,
  remove,
})(TodosContainer);
