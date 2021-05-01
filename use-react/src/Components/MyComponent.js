import PropTypes from "prop-types";
import React from "react";

// 속성값의 타입 정보
// 가장 위에 작성하는 이유: 사용하는 사람 입장에서,
// 올바른 값을 입력하기 위해 빠르게 확인할 수 있는 방법.
// 타입스크립트 사용시 타입으로 속성값을 정리하면 된다.
MyComponent.propTypes = {
  // 리액트 요소
  // <div>hello</div>=>참
  menu: PropTypes.element,

  // 컴포넌트 함수가 반환할 수 있는 모든 값
  description: PropTypes.node,

  // 특정 클래스의 객체인지 아닌지를 검사
  message: PropTypes.instanceOf(Message),

  // 배열에 포함된 값 중에서 하나를 만족
  name: PropTypes.oneOf(["jone", "mike"]),

  // 배열에 포함된 타입 중에서 하나를 만족
  // 타입을 배열로 입력한다. number, string 모두 true
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  // 특정 타입만 포함하는 배열
  ages: PropTypes.arrayOf(PropTypes.number),

  // 객체의 속성값 타입을 정의
  info: PropTypes.shape({
    color: PropTypes.string,
    weight: PropTypes.number,
  }),

  // 객체에서 모든 속성값의 타입이 같은 경우
  // 각 속성의 value 타입이 number다.
  infos: PropTypes.objectOf(PropTypes.number),

  // 에러 메시지도 작성 가능.
  age: function (props, propName, componentName) {
    if (value < 10 || value > 20) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. it must be 10<= value <=20`
      );
    }
  },
};

// prop-types 패키지를 이용해서 타입 정보를 입력.
// 속성값의 타입을 정리해서 작성하는 패키지.

// 함수 이름과 컴포넌트 이름을 동일시하게.
// 명명된 매개변수 문법으로 작성하기(props.xxx)식으로 하지 말기.
export const MyComponent = ({ prop1, prop2 }) => {
  return <div>MyComponent</div>;
};

// 컴포넌트 외부 변수와 함수는 하단에 정의.
// 변수명은 대문자.
// 컴포넌트 안에 있을 경우 업데이트 될때마다 생성.
const COLUMNES = [
  { id: 1, name: "phoneNumber", width: 200, color: "white" },
  { id: 1, name: "city", width: 100, color: "grey" },
];

const URL_PRODUCT_LIST = "/api/products";
function getTotalPrice({ price, total }) {}

// export default MyComponent;
