import React, { useState, useCallback } from "react";
import "./TodoInsert.scss";
import { MdAdd } from "react-icons/md";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState();

  const onChange = useCallback((e) => {
    const { value } = e.target;
    setValue(value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="make a todo"
        onChange={onChange}
        value={value || ""}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
