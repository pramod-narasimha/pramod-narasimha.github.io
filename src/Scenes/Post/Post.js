import React from "react";
import { Card, Divider, Avatar, Col, Icon, Row, Tag, Button } from "antd";
import { postedTime } from "./Components/PostedTime/PostedTime";
import userProfile from "../../assets/images/user_profile.png";
import QuestionsAskedFor from "./Components/QuestionAskedFor/QuestionsAskedFor";
import Helpfull from "../../assets/SVGs/Helpfull";
import AnswerIcon from "../../assets/SVGs/AnswerIcon";
import FacebookGrey from "../../assets/SVGs/FacebookGrey";
import TwitterIcon from "../../assets/SVGs/TwitterIcon";
import ShareIcon from "../../assets/SVGs/ShareIcon";
import MoreIcon from "../../assets/SVGs/MoreIcon";
import "./Post.less";
import LikeCount from "../../assets/SVGs/LikeCount";
import HeartCount from "../../assets/SVGs/HeartCount";
import ClapCount from "../../assets/SVGs/ClapCount";
import QuestionAndDescription from "./Components/QuestionAndDescription/QuestionAndDescription";

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
          <Row>
            <Col span={4}>
              <span>
                <span>
                  <Icon component={Helpfull} />
                </span>
                <span className="helpfull font-size-12 pl1">Helpfull</span>
              </span>
            </Col>
            <Col span={4}>
              <span>
                <span>
                  <Icon component={AnswerIcon} />
                </span>
                <span className="answer font-size-12 pl1">Answer</span>
              </span>
            </Col>
            <Col span={8} offset={8}>
              <Col span={6}>
                <Icon component={FacebookGrey} />
              </Col>
              <Col span={6}>
                <Icon component={TwitterIcon} />
              </Col>
              <Col span={6}>
                <Icon component={ShareIcon} />
              </Col>
              <Col span={6}>
                <Icon component={MoreIcon} />
              </Col>
            </Col>
          </Row>

          <Divider />
          <Row>
            <Col span={8}>
              <Tag color="blue">#Product/UX</Tag>
            </Col>
            <Col span={8} offset={8}>
              <Col span={6}>
                <Icon component={LikeCount} />
              </Col>
              <Col span={6}>
                <Icon component={HeartCount} />
              </Col>
              <Col span={6}>
                <Icon component={ClapCount} />
              </Col>
              <Col span={6}>
                <span>
                  <span>2</span>
                  <span>answers</span>
                </span>
              </Col>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default Post;
