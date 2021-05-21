import React from "react";
import { Row, Col, Typography } from "antd";
import "antd/dist/antd.css";
import Settings from "../component/Settings";

export default function Search() {
  const logout = () => {};
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
        <Col span={12}>검색</Col>
      </Row>
    </>
  );
}
