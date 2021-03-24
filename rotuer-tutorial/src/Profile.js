import React from "react";
import { Route, Link } from "react-router-dom";
const data = {
  rm: {
    name: "namjoon🐨",
    description: "BTS rapper",
  },
  jin: {
    name: "seokjin🐹",
    description: "BTS vocal",
  },
};
const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[match.params.username];
  if (!profile) {
    return <div>no user</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
