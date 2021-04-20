import React, { useState } from "react";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentId, setCurrentId] = useState(1);
  const [desc, setDesc] = useState("");
  const [showOdd, setShowOdd] = useState(false);
  function onAdd() {
    const todo = { id: currentId, desc };
    setCurrentId(currentId + 1);
    setTodoList([...todoList, todo]);
  }
  function onDelete(e) {
    const id = Number(e.target.dateset.id);
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  }
  function onSaveToServer() {}
  return (
    <div>
      <h3>todo</h3>
      <ul>
        {todoList.filter((_, index) => (showOdd ? index % 2 === 0 : true))}
      </ul>
      <input type="text" value={""} onChange={(e) => setDesc(e.target.value)} />
      <button onClick={onAdd}>+</button>
      <button onClick={() => setShowOdd(!showOdd)}>
        홀수 아이템만 보기 on/off
      </button>
      <button onClick={onSaveToServer}>server</button>
    </div>
  );
}
