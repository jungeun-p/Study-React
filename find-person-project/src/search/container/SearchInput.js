import { AutoComplete, Input } from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const SearchInput = ({ options }) => {
  const keyword = useSelector((state) => state.search.keyword);
  const setkeyword = (value) => {};
  const gotoUser = (value) => {};
  return (
    <AutoComplete
      keyword={keyword}
      onChange={setkeyword}
      onSelect={gotoUser}
      style={{ width: "100%" }}
      options={[]}
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
