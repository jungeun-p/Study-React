import { Col, PageHeader, Row } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { actions } from "../state";

/**
 *
 * @param {object} param
 * @param {import('react-router').match} param.match
 */

const User = ({ match }) => {
  const history = useHistory();
  // @ts-ignore
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const name = match.params.name;
  useEffect(() => {
    //   dispatch(actions.fetchUser(name))
  }, [name]);
  return (
    <Row justify="center">
      <Col xs={20} lg={14}>
        {/*뒤로가기*/}
        <PageHeader onBack={() => {}} title="사용자 정보">
          {user?.name}
        </PageHeader>
      </Col>
    </Row>
  );
};

export default User;
