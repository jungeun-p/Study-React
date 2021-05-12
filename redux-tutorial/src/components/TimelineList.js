import React from "react";

const timelineList = ({ timelines, onLike }) => {
  return (
    <ul>
      {timelines.map((timeline) => (
        <li key={timeline.id}>
          {timeline.desc}
          <button data-id={timeline.id} onClick={onLike}>
            {`Like(${timeline.likes})`}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default timelineList;
