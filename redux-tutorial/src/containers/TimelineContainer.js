import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import TimelineList from "../components/TimelineList";
import { actions } from "../modules/timeline";

const TimelineContainer = () => {
  const dispatch = useDispatch();
  const timelines = useSelector((state) => state.timeline.timelines);
  const isLoading = useSelector((state) => state.timeline.isLoading);

  function onLike(e) {
    const timeline = getNextTimeline();
    const id = Number(e.target.dateset.id);
    const timeline = timelines.find((item) => item.id === id);
    dispatch(actions.requestLike(timeline));
  }
  return (
    <div>
      <button onClick={onAdd}>
        <TimelineList timeline={timeline} onLike={onLike} />
        {isLoading && <p>loading...</p>}
      </button>
    </div>
  );
};

export default TimelineContainer;
