import React from "react";
import { Col, Row, Typography, Form } from "antd";
/**
 *
 * @param {object} param
 * @param {()=>void} param.onFinish // 함수 타입
 * @param {import('react').ReactNode} param.children
 */

const AuthLayout = ({ children, onFinish }) => {
  return (
    <>
      <Row justify="center" style={{ marginTop: 100 }}>
        <Col>
          <Typography.Title style={{ fontFamily: "Caligraphy" }}>
            찾아야한다
          </Typography.Title>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Form
            initialValues={{ remember: true }}
            style={{ width: 300, marginTop: 50 }}
            onFinish={onFinish}
          >
            {children}
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default AuthLayout;
