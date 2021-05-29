import React from "react";
import { Row, Col, Typography } from "antd";
import "antd/dist/antd.css";
import Settings from "../component/Settings";
import SearchInput from "./SearchInput";

export default function Search() {
  const logout = () => {};
  const options = () => {};
  return (
    <>
      <Row justify="end" style={{ padding: 20 }}>
        <Col>
          <Settings logout={logout} />
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 100 }}>
        <Col>
          <Typography.Title style={{ fontFamily: "Caligraphy" }}>
            search your member
          </Typography.Title>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 50 }}>
        <Col span={12}>
          <SearchInput options={options} />
        </Col>
      </Row>
    </>
  );
}
