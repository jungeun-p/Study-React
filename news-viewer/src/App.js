import "./App.css";
import React, { useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState(null);
  const onClick = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        const data = JSON.stringify(response.data);
        setData(data);
      });
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={data} readOnly={true} />}
    </div>
  );
}

export default App;
