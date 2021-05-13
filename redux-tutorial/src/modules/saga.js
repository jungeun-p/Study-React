import { put, call, all, takeLeading } from "redux-saga/effects";
import { actions, types } from "../modules/timeline";
import { callApiLike } from "../api/api";

export function* fetchData(action) {
  // loading===true, likecount, api, loading===false
  yield put(actions.setLoading(true));
  yield put(actions.addLike(action.timeline.id, 1));
  // 예외 처리
  // yield put(actions.setValue('error:', ''));
  // try{
  //   yield call(callApiLike);
  // } catch(e){
  //   yield put(actions.setValue('error:', e));
  //   yield put(actions.addLike(action.timeline.id, -1));
  // }
  yield call(callApiLike);
  yield put(actions.setLoading(false));
}

export default function* () {
  // 해당 액션 발생시, fetchData 함수를 전달.
  yield all([takeLeading(types.REQUEST_LIKE, fetchData)]);
}
