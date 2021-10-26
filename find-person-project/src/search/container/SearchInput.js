// @ts-nocheck
import { AutoComplete, Input, Space, Typography } from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../state";
import { actions as userActions } from "../../user/state";
import { useHistory } from "react-router-dom";

const SearchInput = ({ options }) => {
  const keyword = useSelector((state) => state.search.keyword);
  const dispatch = useDispatch();
  // value와 keyword("")가 다를 경우 dispatch 실행.
  const setkeyword = (value) => {
    if (value !== keyword) {
      dispatch(actions.setValue("keyword", value));
      dispatch(actions.fetchAutoComplete(value));
    }
  };
  const autoCompletes = useSelector((state) => state.search.autoCompletes);
  const history = useHistory();
  const goToUser = (value) => {
    const user = autoCompletes.find((item) => item.name === value);
    if (user) {
      dispatch(userActions.setValue("user", user));
      history.push(`/user/${user.name}`);
    }
  };
  return (
    <AutoComplete
      keyword={keyword}
      onChange={setkeyword}
      onSelect={goToUser}
      style={{ width: "100%" }}
      options={autoCompletes.map((item) => ({
        value: item.name,
        label: (
          <Space>
            <Typography.Text strong>{item.name}</Typography.Text>
            <Typography.Text type="secondary">
              {item.department}
            </Typography.Text>
            <Typography.Text>{item.tag}</Typography.Text>
          </Space>
        ),
      }))}
      autoFocus
    >
      <Input.Search
        size="large"
        placeholder="input here"
        prefix={<SearchOutlined />}
      />
    </AutoComplete>
  );
};

export default SearchInput;
