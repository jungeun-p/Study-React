import "./App.css";
import ColorBox from "./Components/ColorBox";
import { ColorProvider } from "./Context/color";
import React, { createContext, useContext, useState } from "react";
import SelectColor from "./Components/SelectColor";

const UserContext = createContext("mike");

function App() {
  const [name, setName] = useState("mike");
  return (
    // <ColorProvider>
    //   <div>
    //     <SelectColor />
    //     <ColorBox />
    //   </div>
    // </ColorProvider>
    <UserContext.Provider value={name}>
      <div>상단 메뉴</div>
      <Profile />
      <div>하단 메뉴</div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
    </UserContext.Provider>
  );
}

const Profile = React.memo(function () {
  console.log("profile rendering");
  return (
    <>
      <Greeting />
    </>
  );
});

// Profile 컴포넌트가 업데이트가 되지 않더라도, Provider 값이 잘 변경된다.
function Greeting() {
  // 이 부분에서는 username을 사용할 수 없다.
  // hook을 이용하여 랩핑 가능.
  const username = useContext(UserContext);
  return (
    // <UserContext.Consumer>
    //   {(username) => <p>{username}, hi!</p>}
    // </UserContext.Consumer>
    <p>{`${username}님, 안녕하세요!`}</p>
  );
}

export default App;
