import { all, call, put, takeEvery, takeLeading } from "redux-saga/effects";
import { actions, Types } from ".";
import { callApi } from "../../common/util/api";

function* fetchSignup({ email }) {
  const { isSuccess, data } = yield call(callApi, {
    url: "/auth/signup",
    method: "post",
    data: {
      email,
    },
  });
  if (isSuccess && data) {
    yield put(actions.setUser(data.name));
  }
}
function* fetchLogin({ name, password }) {
  const { isSuccess, data } = yield call(callApi, {
    url: "/auth/login",
    method: "post",
    data: {
      name,
      password,
    },
  });
  if (isSuccess && data) {
    yield put(actions.setUser(data.name));
  }
}

function* fetchUser() {
  const { isSuccess, data } = yield call(callApi, {
    url: "/auth/user",
  });
  if (isSuccess && data) {
    yield put(actions.setUser(data.name));
  }
}

function* fetchLogout() {
  const { isSuccess } = yield call(callApi, {
    url: "/auth/logout",
  });
  if (isSuccess) {
    yield put(actions.setUser(""));
  }
}

export default function* () {
  yield all([
    takeEvery(Types.FetchLogin, fetchLogin),
    takeEvery(Types.FetchSignup, fetchSignup),
    takeEvery(Types.FetchUser, fetchUser),
    takeLeading(Types.FetchLogout, fetchLogout),
  ]);
}
