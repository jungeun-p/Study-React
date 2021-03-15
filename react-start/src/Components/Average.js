import React, { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("caculate averaege...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);
  // const onChange = (e) => {
  //   setNumber(e.target.value);
  // };

  // const onInsert = (e) => {
  //   const nextList = list.concat(parseInt(number));
  //   setList(nextList);
  //   setNumber("");
  // };

  const onChange = useCallback((e) => {
    // 처음 마운트 될 때만 함수 생성
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(
    // number or list가 바뀌었을 때만 함수 생성
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
      inputEl.current.focus();
      console.log("111");
    },
    [number, list]
  );

  const handelKeyPress = (e) => {
    if (e.key === "Enter") {
      onInsert();
    }
  };

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <h2>Average</h2>
      <input
        value={number}
        onChange={onChange}
        onKeyPress={handelKeyPress}
        ref={inputEl}
      />
      <button onClick={onInsert}>Add</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>Average: </b> {avg}
      </div>
    </div>
  );
};

export default Average;
