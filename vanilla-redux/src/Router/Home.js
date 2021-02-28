import React, { useState } from "react";
import { add } from "../store";
//import { actionCreators } from "../store";
import { connect } from "react-redux";
import ToDo from "../Components/ToDo";

const Home = ({ toDos, addToDo }) => {
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
    addToDo(text);
  };

  // 홈에서 store로부터 state를 가져올 수 있도록 해야 합니다
  return (
    <div>
      <h1>🐹ToDoList</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </div>
  );
};

// function을 생성한 후 useConnect를 이용해서 store로부터 state를 받아올 수 있다.
const mapStateToProps = (state) => {
  // 해당 컴포넌트로 보내는 props에 추가도 가능하다
  return { toDos: state };
};

// store.dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    // function text가 필요하며, dispatch한다
    // 뭐를? actionCreators에 있는 addToDo를!
    addToDo: (text) => dispatch(add(text)),
  };
};

// getCurrentState를 통해 store로부터 state를 가져올 수 있다!
// Redux state로부터 home(component)에 prop으로서 전달!
export default connect(mapStateToProps, mapDispatchToProps)(Home);
