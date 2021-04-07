import { decrease } from "../modules/counter";

const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action && action.type);
  console.log(`이전 상태, ${store.getState()}`);
  console.log(`액션, ${action}`);
  next(action); // 다음 미들웨어 혹은 reducer 에게 전달
  console.log(`다음 상태, ${store.getState()}`);
  console.groupEnd(); //그룹 끝
  // middleware 기본구조
};

// loggerMiddleware = function loggerMiddleware(store){
//     return function(next){
//         return function (action){

//         }
//     }
// }

export default loggerMiddleware;
