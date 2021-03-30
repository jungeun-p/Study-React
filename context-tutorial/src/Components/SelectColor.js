import React, { useContext } from "react";
import ColorContext, { ColorConsumer } from "../Context/color";

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "violet",
];

const SelectColor = () => {
  const { actions } = useContext(ColorContext);
  return (
    <div>
      <h2>select your color</h2>
      {/* <ColorConsumer>
        {({ actions }) => ( */}
      <div style={{ display: "flex" }}>
        {colors.map((color) => (
          <div
            key={color}
            style={{
              background: color,
              width: "24px",
              height: "24px",
              cursor: "pointer",
            }}
            // setColor
            onClick={() => actions.setColor(color)}
            // setSubcolor
            onContextMenu={(e) => {
              e.preventDefault(); // 마우스 오른쪽 버튼 클릭 시 메뉴가 뜨는 걸 무시함
              actions.setSubcolor(color);
            }}
          />
        ))}
      </div>
      {/* )}
      </ColorConsumer> */}
      <hr />
    </div>
  );
};

export default SelectColor;
