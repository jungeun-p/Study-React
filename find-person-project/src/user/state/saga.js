import { all, call, takeEvery, put } from "redux-saga/effects";
import { actions, Types } from ".";
import { callApi } from "../../common/util/api";
// import { makeFetchSaga } from "../../common/util/fetch";

function* fetchUser({ name }) {
  const { isSuccess, data } = yield call(callApi, {
    url: "/user/search",
    params: { keyword: name },
  });
  if (isSuccess && data) {
    // 모든 사용자 중 해당 사용자
    const user = data.find((item) => item.name === name);
    if (user) {
      yield put(actions.setValue("user", user));
    }
  }
}

function* fetchUpdateUser({ user, key, value }) {
  const oldValue = user[key];
  // redux 상태값 변경
  yield put(actions.setValue("user", { ...user, [key]: value }));
  const { isSuccess, data } = yield call(callApi, {
    url: "/user/update",
    method: "post",
    data: { name: user.name, key, value, oldValue },
  });

  if (isSuccess && data) {
    // deleteApiCache();
    // yield put(actions.addHistory(data.history));
  } else {
    yield put(actions.setValue("user", user));
  }
}

export default function* () {
  yield all([
    takeEvery(Types.FetchUser, fetchUser),
    takeEvery(Types.FetchUpdateUser, fetchUpdateUser),
    // fetch 상태의 값을 관리.
    // makeFetchSaga({ fetchSaga: fetchUser, canCache: false }),
  ]);
}
