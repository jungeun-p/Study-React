import React, { useCallback, useRef, useState } from "react";
import "./App.css";
import produce from "immer";

function App() {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm(
      // ...form,
      // [name]: [value],
      produce((draft) => {
        draft[name] = value;
      })
    );
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };
      setData(
        produce((draft) => {
          // immer가 적용되어있기 때문에 push 사용해도 무관
          draft.array.push(info);
        })
        //   {
        //   ...data,
        //   array: data.array.concat(info),
        // }
      );
      setForm({
        name: "",
        username: "",
      });
      nextId.current += 1;
    },
    [form.name, form.username]
  );

  const onRemove = useCallback((id) => {
    setData(
      produce((draft) => {
        // splice (n, 1) n번지 1개를 삭제
        // findIndex 조건에 해당하는 배열의 첫번째
        draft.array.splice(
          draft.array.findIndex((info) => info.id === id),
          1
        );
      })
    );
    //   {
    //   ...data,
    //   array: data.array.filter((info) => info.id !== id),
    // }
  }, []);
  console.log(form);
  console.log(data);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="id"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="name"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">submit</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username}({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
