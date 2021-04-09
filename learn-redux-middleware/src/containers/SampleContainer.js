import React, { useEffect } from "react";
import Sample from "../components/Sample";
import { connect } from "react-redux";
import { getPost, getUsers } from "../modules/sample";
const SampleContainer = ({
  loadingPost,
  loadingUsers,
  post,
  users,
  getPost,
  getUsers,
}) => {
  useEffect(() => {
    getPost(1);
    getUsers(1);
  }, [getPost, getUsers]);
  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default connect(
  ({ sample, loading }) => ({
    post: sample.post,
    users: sample.users,
    //loadingPost: sample.loading.GET_POST,
    loadingPost: loading["sample/GET_POST"],
    //loadingUsers: sample.loading.GET_USERS,
    loadingUsers: loading["sample/GET_USERS"],
  }),
  {
    getPost,
    getUsers,
  }
)(SampleContainer);
