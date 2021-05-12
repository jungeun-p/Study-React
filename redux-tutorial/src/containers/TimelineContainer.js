import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import TimelineList from "../components/TimelineList";
import { actions } from "../modules/timeline";
import { getNextTimeline } from "../lib/mockData";

const TimelineContainer = () => {
  const dispatch = useDispatch();
  const timelines = useSelector((state) => state.timeline.timelines);
  const isLoading = useSelector((state) => state.timeline.isLoading);

  function onAdd() {
    const timeline = getNextTimeline();
    dispatch(actions.addTimeline(timeline));
  }
  function onLike(e) {
    const id = Number(e.target.dateset.id);
    const timeline = timelines.find((item) => item.id === id);
    dispatch(actions.requestLike(timeline));
  }
  return (
    <div>
      <button onClick={onAdd}>
        <TimelineList timelines={timelines} onLike={onLike} />
        {isLoading && <p>loading...</p>}
      </button>
    </div>
  );
};

export default TimelineContainer;
