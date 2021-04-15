import { handleActions, createAction } from "redux-actions";
import * as api from "../lib/api";
// import createReqeustThunk from "../lib/createRequestThunk";
import { startLoading, finishLoading } from "../lib/loading";
import { call, put, takeLatest } from "redux-saga/effects";
import createRequestSaga from "../lib/createRequestSaga";

const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sameple/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

// thunk 함수
// export const getPost = createReqeustThunk(GET_POST, api.getPost);
// export const getUsers = createReqeustThunk(GET_USERS, api.getUsers);

// redux-saga 에서는 요청에 필요한 값을 payload로 넣어주어야 한다!
export const getPost = createAction(GET_POST, (id) => id);
export const getUsers = createAction(GET_USERS);

const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

// parameter로 액션을 받아오면 액션 정보를 조회
// function* getPostSaga(action) {
//   yield put(startLoading(GET_POST));
//   try {
//     // call: Promise 반환하는 함수 호출 후 대기
//     // 1. 함수, 2. 해당 함수에 넣을 인수
//     // redux-saga 에서는 요청에 필요한 값을 payload로 넣어주어야 한다!
//     const post = yield call(api.getPost, action.payload);
//     yield put({
//       type: GET_POST_SUCCESS,
//       payload: post.data,
//     });
//   } catch (e) {
//     yield put({
//       type: GET_POST_FAILURE,
//       payload: e,
//       error: true,
//     });
//   }
//   yield put(finishLoading(GET_POST));
// }

// function* getUsersSaga() {
//   yield put(startLoading(GET_USERS));
//   try {
//     const users = yield call(api.getUsers);
//     yield put({
//       type: GET_USERS_SUCCESS,
//       payload: users.data,
//     });
//   } catch (e) {
//     yield put({
//       type: GET_USERS_FAILURE,
//       payload: e,
//       error: true,
//     });
//   }
//   yield put(finishLoading(GET_USERS));
// }

export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USERS, getUsersSaga);
}

// export const getPost = (id) => async (dispatch) => {
//   dispatch({ type: GET_POST });
//   try {
//     const res = await api.getPost(id);
//     dispatch({
//       type: GET_POST_SUCCESS,
//       payload: res.data,
//     }); // 요청 성공
//   } catch (e) {
//     dispatch({
//       type: GET_POST_FAILURE,
//       payload: e,
//       error: true,
//     }); //error 발생
//     throw e;
//   }
// };

// export const getUsers = () => async (dispatch) => {
//   dispatch({ type: GET_USERS });
//   try {
//     const res = await api.getUsers();
//     dispatch({
//       type: GET_USERS_SUCCESS,
//       payload: res.data,
//     });
//   } catch (e) {
//     dispatch({
//       type: GET_USERS_FAILURE,
//       payload: e,
//       error: true,
//     });
//   }
// };

const initialState = {
  // loading: {
  //   GET_POST: false,
  //   GET_USERS: false,
  // },
  post: null,
  users: null,
};

// const sample = handleActions(
//   {
//     [GET_POST]: (state) => ({
//       ...state,
//       loading: { ...state.loding, GET_POST: true }, // 요청 시작
//     }),
//     [GET_POST_SUCCESS]: (state, action) => ({
//       ...state,
//       loading: { ...state.loading, GET_POST: false }, // 요청 완료
//       post: action.payload,
//     }),
//     [GET_POST_FAILURE]: (state, action) => ({
//       ...state,
//       loading: { ...state.loading, GET_POST: false }, // 요청 완료
//     }),
//     [GET_USERS]: (state) => ({
//       ...state,
//       loading: { ...state.loading, GET_USERS: true },
//     }),
//     [GET_USERS_SUCCESS]: (state, action) => ({
//       ...state,
//       loading: { ...state.loading, GET_USERS: false },
//       users: action.payload,
//     }),
//     [GET_USERS_FAILURE]: (state, action) => ({
//       ...state,
//       loading: { ...state.loading, GET_USERS: false },
//     }),
//   },
//   initialState
// );

const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      post: action.payload,
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      users: action.payload,
    }),
  },
  initialState
);

export default sample;
