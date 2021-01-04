import React, {useState, useRef, useCallback} from 'react';
import './App.css';
import TodoTemplate from "./Components/TodoTemplate";
import TodoInsert from "./Components/TodoInsert";
import TodoList from "./Components/TodoList";

const App = () =>{
  const [todos, setTodos] = useState([
    {
      id:1,
      text: 'to find react basic',
      checked: true,
    },
    {
      id:2,
      text: 'to styled component',
      checked: true,
    },
    {
      id:3,
      text: 'make a todo-app',
      checked: false,
    },
  ])
  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current +=1;
    },
    [todos],
  );

  const onRemove = useCallback(
    id=>{
      setTodos(todos.filter(todo=>todo.id!==id));
    },
    [todos],
  )

  const onToggle = useCallback(
    id => {
      setTodos(todos.map(todo=>
        todo.id===id? {...todo, checked: !todo.checked}:todo,
      ),
      )
    },
    [todos],
  )

  return (
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
  );
}

export default App;