import { startLoading, finishLoading } from "../lib/loading";

export default function createRequestThunk(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return (id) => async (dispatch) => {
    dispatch({ type });
    try {
      const res = await request(id);
      dispatch({
        type: SUCCESS,
        payload: res.data,
      });
      dispatch(finishLoading(type));
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e,
        error: true,
      });
      dispatch(startLoading(type));
      throw e;
    }
  };
}

// 사용법 createRequestThunk('GET_USERS', api.getUSERS);
