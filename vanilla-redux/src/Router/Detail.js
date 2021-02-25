import React, { useState } from "react";
import { connect } from "react-redux";
const Detail = ({ toDo }) => {
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h3>{toDo?.id}</h3>
    </>
  );
};

const mapStateToPros = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  //   or
  //   const id = ownProps.match.params.id;
  //   console.log(id);
  // state를 통째로 넘겨주는 게 아닌, 해당 state만
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
};

export default connect(mapStateToPros)(Detail);
