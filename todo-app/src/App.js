import React, { useCallback, useRef, useState, useReducer } from "react";
import TodoTemplate from "./Components/TodoTemplate";
import TodoInsert from "./Components/TodoInsert";
import TodoList from "./Components/TodoList";

const createBulkTodos = () => {
  const array = [];
  for (let i = 0; i <= 2500; i++) {
    array.push({ id: i, text: `todo ${i}`, checked: false });
  }
  return array;
};

const todoReducer = (todos, action) => {
  switch (action.type) {
    case "INSERT":
      return todos.concat(action.todo);
    case "REMOVE":
      return todos.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return todos;
  }
};

function App() {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  // const [todos, setTodos] = useState(createBulkTodos);

  const nextId = useRef(2501);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: "INSERT", todo });
    //setTodos(todos.concat(todo));
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: "REMOVE", id });
    //setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: "TOGGLE", id });
    // setTodos((todos) =>
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, checked: !todo.checked } : todo
    //   )
    // );
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
