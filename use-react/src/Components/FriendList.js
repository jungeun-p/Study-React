import React from "react";

// 상태값, 비즈니스로직 X
const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>{`${friend.name} (${friend.age})`}</li>
      ))}
    </ul>
  );
};

export default FriendList;
