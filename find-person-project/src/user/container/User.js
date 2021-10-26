import {
  Col,
  Descriptions,
  PageHeader,
  Row,
  Space,
  Spin,
  Typography,
} from "antd";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import History from "../../common/component/History";
import useFetchInfo from "../../common/hook/useFetchInfo";
import { actions, Types } from "../state";
import Department from "./Department";
import TagList from "./TagList";

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
    dispatch(actions.fetchUser(name));
  }, [name]);

  // const isFetched = true;
  const { isFetched, isSlow } = useFetchInfo(Types.FetchUser);
  //로딩
  const isFetching = true;

  return (
    <Row justify="center">
      <Col xs={20} lg={14}>
        {/*뒤로가기*/}
        <PageHeader
          onBack={() => {}}
          title={
            <Space>
              사용자 정보
              {isSlow && <Spin size="small" />}
            </Space>
          }
        >
          {user && (
            <Descriptions layout="vertical" bordered column={1}>
              <Descriptions.Item label="이름">
                <Typography.Text>{user.name}</Typography.Text>
              </Descriptions.Item>
              <Descriptions.Item label="소속">
                <Department />
                {/* <Typography.Text>{user.department}</Typography.Text> */}
              </Descriptions.Item>
              <Descriptions.Item label="태그">
                <TagList />
              </Descriptions.Item>
              <Descriptions.Item label="수정 내역">
                <History />
              </Descriptions.Item>
            </Descriptions>
          )}
          {/* 응답이 오기 전에 문구가 보이기 때문에 fetch가 완료된 후까지 처리. */}
          {!user && isFetched && (
            <Typography.Text>존재하지 않는 사용자 입니다.</Typography.Text>
          )}
        </PageHeader>
      </Col>
    </Row>
  );
};

export default User;
