import React, { useEffect, useReducer, useState } from "react";

const Info = () => {
  // const [name, setName] = useState("");
  // const [nickname, setNickname] = useState("");

  const reducer = (state, action) => {
    return {
      ...state,
      [action.name]: action.value,
    };
  };
  const [state, dispatch] = useReducer(reducer, { name: "", nickname: "" });

  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };
  // const onChangeNickname = (e) => {
  //   setNickname(e.target.value);
  // };

  const { name, nickname } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

  // useEffect(() => {
  //   console.log("effect");
  //   console.log(nickname);
  //   return () => {
  //     console.log("cleanup");
  //     console.log(name);
  //   };
  // }, [name]);

  return (
    <div>
      <h2>Info</h2>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <p>name:{name}</p>
        <p>nickname:{nickname}</p>
      </div>
    </div>
  );
};

export default Info;
