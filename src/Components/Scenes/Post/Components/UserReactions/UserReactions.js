import React from "react";
import { Col, Row, Icon } from "antd";
import AnswerIcon from "../../../../../assets/SVGs/AnswerIcon";
import FacebookGrey from "../../../../../assets/SVGs/FacebookGrey";
import TwitterIcon from "../../../../../assets/SVGs/TwitterIcon";
import ShareIcon from "../../../../../assets/SVGs/ShareIcon";
import MoreIcon from "../../../../../assets/SVGs/MoreIcon";
import Helpfull from "../../../../../assets/SVGs/Helpfull";

class UserReactions extends React.Component {
  render() {
    return (
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
    );
  }
}

export default UserReactions;
