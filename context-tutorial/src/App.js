import "./App.css";
import ColorBox from "./Components/ColorBox";
import { ColorProvider } from "./Context/color";
import React, { createContext, useContext, useRef, useState } from "react";
import SelectColor from "./Components/SelectColor";

const UserContext = createContext("mike");

function App() {
  const boxListRef = useRef({});

  const onClick = () => {
    let maxRight = 0;
    let maxId = "";
    // 해당하는 BOX_LIST
    for (const box of BOX_LIST) {
      const ref = boxListRef.current[box.id];
      if (ref) {
        const rect = ref.getBoundingClientRect(); // 사각형의 정보를 알 수 있다.
        if (maxRight < rect.right) {
          maxRight = rect.right;
          maxId = box.id;
        }
      }
    }
    alert(`right max id: ${maxId}`);
  };

  // const [name, setName] = useState("mike");
  return (
    // <ColorProvider>
    //   <div>
    //     <SelectColor />
    //     <ColorBox />
    //   </div>
    // </ColorProvider>
    // <UserContext.Provider value={name}>
    //   <div>상단 메뉴</div>
    //   <Profile />
    //   <div>하단 메뉴</div>
    //   <input
    //     type="text"
    //     value={name}
    //     onChange={(e) => setName(e.target.value)}
    //   ></input>
    // </UserContext.Provider>
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100vw",
          height: "100%",
        }}
      >
        {BOX_LIST.map((item) => (
          <div
            key={item.id}
            ref={(ref) => (boxListRef.current[item.id] = ref)}
            style={{
              flex: "0 0 auto",
              width: item.width,
              height: 100,
              backgroundColor: "yellow",
              border: "solid 1px red",
            }}
          >{`box_${item.id}`}</div>
        ))}
      </div>
      <button onClick={onClick}>오른쪽 끝 요소는?</button>
    </div>
  );
}

const BOX_LIST = [
  { id: 1, width: 70 },
  { id: 2, width: 80 },
  { id: 3, width: 100 },
  { id: 4, width: 40 },
  { id: 5, width: 50 },
  { id: 6, width: 40 },
  { id: 7, width: 100 },
];
// const Profile = React.memo(function () {
//   console.log("profile rendering");
//   return (
//     <>
//       <Greeting />
//     </>
//   );
// });

// // Profile 컴포넌트가 업데이트가 되지 않더라도, Provider 값이 잘 변경된다.
// function Greeting() {
//   // 이 부분에서는 username을 사용할 수 없다.
//   // hook을 이용하여 랩핑 가능.
//   const username = useContext(UserContext);
//   return (
//     // <UserContext.Consumer>
//     //   {(username) => <p>{username}, hi!</p>}
//     // </UserContext.Consumer>
//     <p>{`${username}님, 안녕하세요!`}</p>
//   );
// }

export default App;
