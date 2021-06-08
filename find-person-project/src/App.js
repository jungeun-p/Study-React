import React from "react";
import { Route } from "react-router";
import Search from "./search/container/Search";

function App() {
  return (
    <>
      <Route exact path="/" component={Search} />
      <Route path="/user/:name" component={User} />
    </>
  );
}

export default App;
