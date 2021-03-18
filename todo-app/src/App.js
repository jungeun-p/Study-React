import React, { useCallback, useRef, useState } from "react";
import TodoTemplate from "./Components/TodoTemplate";
import TodoInsert from "./Components/TodoInsert";
import TodoList from "./Components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "search react basic list",
      checked: true,
    },
    {
      id: 2,
      text: "component styling",
      checked: true,
    },
    {
      id: 3,
      text: "make a todo list app",
      checked: false,
    },
  ]);
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}

export default App;
