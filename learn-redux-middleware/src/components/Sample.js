import React from "react";

const Sample = ({ loadingPost, loadingUsers, post, users }) => {
  return (
    <div>
      <section>
        <h2>POST</h2>
        {loadingPost && "loading..."}
        {!loadingPost && post && (
          <div>
            <h4>{post.title}</h4>
            <h4>{post.body}</h4>
          </div>
        )}
      </section>
      <hr />
      <section>
        <h2>USERS</h2>
        {loadingUsers && "loading..."}
        {!loadingUsers && users && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.username}({user.email})
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Sample;
