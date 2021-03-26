import React from "react";
import { NavLink, Route } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  const activeStyle = { background: "black", color: "white" };
  return (
    <div>
      <h3>user list</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/rm" active>
            🐨
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/jin">
            🐹
          </NavLink>
        </li>
      </ul>
      <Route path="/profiles" exact render={() => <div>select user</div>} />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
