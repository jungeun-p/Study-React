import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";
import Login from "./auth/container/Login";
import Signup from "./auth/container/Signup";
import { actions as authActions } from "./auth/state";

import Search from "./search/container/Search";
import User from "./user/container/User";

function App() {
  useEffect(() => {
    const bodyEl = document.getElementsByTagName("body")[0];
    const loadingEl = document.getElementById("init-loading");
    bodyEl.removeChild(loadingEl);
  }, []);
  const dispatch = useDispatch();
  // app이 마운트 됐을 때 액션 실행.
  useEffect(() => {
    dispatch(authActions.fetchUser());
  }, [dispatch]);
  return (
    <>
      <Route exact path="/" component={Search} />
      <Route path="/user/:name" component={User} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </>
  );
}

export default App;
