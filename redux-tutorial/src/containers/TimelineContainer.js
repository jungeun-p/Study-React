import React, { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TimelineList from "../components/TimelineList";
import { actions } from "../modules/timeline";
import { getNextTimeline } from "../lib/mockData";

const TimelineContainer = () => {
  const [currentText, setCurrentText] = useState("");
  const text = useSelector((state) => state.timeline.text);
  const dispatch = useDispatch();
  const timelines = useSelector((state) => state.timeline.timelines);
  const isLoading = useSelector((state) => state.timeline.isLoading);
  const error = useSelector((state) => state.timeline.error);

  function onAdd() {
    const timeline = getNextTimeline();
    dispatch(actions.addTimeline(timeline));
  }
  function onLike(e) {
    const id = Number(e.target.dateset.id);
    const timeline = timelines.find((item) => item.id === id);
    dispatch(actions.requestLike(timeline));
  }
  function onChangeText(e) {
    const text = e.target.value;
    dispatch(actions.trySetText(text));
    setCurrentText(text);
  }
  return (
    <div>
      <button onClick={onAdd}>timeline</button>
      <TimelineList timelines={timelines} onLike={onLike} />
      {isLoading && <p>loading...</p>}
      {!!error && <p>❗️error❗️</p>}
      <input type="text" value={currentText} onChange={onChangeText} />
      {!!text && <p>{text}</p>}
    </div>
  );
};

export default TimelineContainer;
