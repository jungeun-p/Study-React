import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";
const ToDo = ({ text, onBtnClick, id }) => {
  return (
    <li>
      <Link to={`/${id}`}>
        {text}
        <button onClick={onBtnClick}>DEL</button>
      </Link>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // ownProps -> 어떤 props를 받고 있는지 확인하고 있다.
  // console.log(ownProps)
  return {
    // state 안에는 text만 존재해.
    // 하지만 우리는 ownProps에서 id값을 받아올 수 있다!
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
