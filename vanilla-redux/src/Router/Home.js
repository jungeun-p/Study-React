import React, { useState } from "react";

import { connect } from "react-redux";

const Home = (toDos) => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
    // const { name, value } = e.target;
    // setText((state) => ({ ...state, [name]: value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    setText("");
  };

  // 홈에서 store로부터 state를 가져올 수 있도록 해야 합니다
  return (
    <div>
      <h1>🐹ToDoList</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </div>
  );
};

// function을 생성한 후 useConnect를 이용해서 store로부터 state를 받아올 수 있다.
const mapStateToProps = (state) => {
  // 해당 컴포넌트로 보내는 props에 추가도 가능하다
  return { toDos: state };
};

// getCurrentState를 통해 store로부터 state를 가져올 수 있다!
// Redux state로부터 home(component)에 prop으로서 전달!
export default connect(mapStateToProps)(Home);
