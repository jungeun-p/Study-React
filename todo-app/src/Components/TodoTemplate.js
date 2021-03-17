import React from "react";

const TodoTemplate = ({ children }) => {
  return (
    <div className="ToDoTemplate">
      <div className="app-title">Edit Plan</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
