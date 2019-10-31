import React from "react";
import { Card, Divider, Avatar, Col, Icon, Row, Tag, Button } from "antd";
import { Flex } from "antd-mobile";
import { postedTime } from "./Components/PostedTime";
import userProfile from "../../../assets/images/user_profile.png";
import QuestionsAskedFor from "./Components/QuestionAskedFor/QuestionsAskedFor";
const { Meta } = Card;

class Post extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ minWidth: "564px", maxWidth: "100%" }}>
          <div>
            <Col span={24}>
              <QuestionsAskedFor />
            </Col>
            <div>
              <Col span={12}>
                <Card size={"small"} bordered={false}>
                  <Meta
                    avatar={<Avatar src={userProfile} />}
                    title="How can I help"
                    description="This is the description"
                  />
                </Card>
              </Col>
              <Col span={12}>
                <div>{postedTime()}</div>
              </Col>
            </div>
            <div>
              <Col span={24}>
                <Card size={"small"} bordered={false}>
                  <Meta
                    title="How can I help my unhappy coworker?"
                    description="I’ve gotten really close with a colleague who started at my company about four months ago. She is really unhappy and is thinking about leaving already. What can I do to help?"
                  />
                </Card>
              </Col>
            </div>
            <div>
              <Row>
                <Col style={{ background: "red" }} span={4}>
                  Answer
                </Col>
                <Col style={{ background: "red" }} span={4}>
                  Helpful
                </Col>
                <Col style={{ background: "red" }} span={8} offset={8}>
                  <Col style={{ background: "red" }} span={8}>
                    Facebook
                  </Col>
                  <Col style={{ background: "red" }} span={8}>
                    Twitter
                  </Col>
                  <Col style={{ background: "red" }} span={8}>
                    Share
                  </Col>
                </Col>
              </Row>

              <Divider />
              <Row>
                <Col span={24}>
                  <Tag color="blue">#Product/UX</Tag>
                </Col>
              </Row>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default Post;
