import React, { useState } from "react";
import FriendList from "../Components/FriendList";
import NumberSelect from "../Components/NumberSelect";
import { getNextFriend } from "../data/data";

const FriendPage = () => {
  const [friends, setFriends] = useState([]);
  const [ageLimit, setAgeLimit] = useState(MAX_AGE_LIMIT);
  const [nameLimit, setNameLimit] = useState(MAX_NAME_LIMIT);

  const friendsWithAgelimit = friends.filter((item) => item.age <= ageLimit);

  const friendsWithNameLenLimit = friends.filter(
    (item) => item.name.length <= nameLimit
  );
  function onAdd() {
    const friend = getNextFriend();
    setFriends([...friends, friend]);
  }
  // function onChangeOption(e) {
  //   const value = Number(e.currentTarget.value);
  //   setAgeLimit(value);
  // }
  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <NumberSelect
        value={ageLimit}
        options={AGE_LIMIT_OPTIONS}
        label="세 이하만 보기"
        onChange={setAgeLimit}
      />
      <NumberSelect
        value={nameLimit}
        options={NAME_LEN_LIMIT_OPTIONS}
        label="자 이름만 보기"
        onChange={setNameLimit}
      />
      {/* <div>
        <select onChange={onChangeOption} value={ageLimit}>
          {AGE_LIMIT_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        세 이하만 보기
      </div> */}
      <FriendList friends={friendsWithAgelimit} />
      <FriendList friends={friendsWithNameLenLimit} />
    </div>
  );
};

const MAX_AGE_LIMIT = 100;
const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];
const MAX_NAME_LIMIT = 100;
const NAME_LEN_LIMIT_OPTIONS = [2, MAX_NAME_LIMIT];
export default FriendPage;
