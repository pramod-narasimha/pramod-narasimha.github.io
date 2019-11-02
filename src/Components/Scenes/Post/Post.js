import React from "react";
import { Card, Divider, Col, Row } from "antd";
import { postedTime } from "./Components/PostedTime/PostedTime";
import userProfile from "../../../assets/images/user_profile.png";
import QuestionsAskedFor from "./Components/QuestionAskedFor/QuestionsAskedFor";
import "./Post.less";
import QuestionAndDescription from "./Components/QuestionAndDescription/QuestionAndDescription";
import UserReactions from "./Components/UserReactions/UserReactions";
import PostReactions from "./Components/PostReactions/PostReactions";

class Post extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ width: "564px" }}>
          <QuestionsAskedFor />
          <Row justify="start">
            <Col span={12}>
              <Col span={12}>
                <img height="40" width="40" src={userProfile} alt="" />
              </Col>
              <Col span={12}>
                <Row>
                  <Col span={24}>
                    <span>Keratin</span>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <span>Intel</span>
                  </Col>
                </Row>
              </Col>
            </Col>
            <Col span={12}>
              <div>{postedTime()}</div>
            </Col>
          </Row>
          <QuestionAndDescription />
          <UserReactions />
          <Divider />
          <PostReactions />
        </Card>
      </div>
    );
  }
}

export default Post;
