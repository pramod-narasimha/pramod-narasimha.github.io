import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col } from "antd";
import { AnswerText } from "./styles";

class QuestionAndDescription extends React.Component {
  render() {
    return (
      <Row>
        <Row className="mb2">
          <Col span={24}>
            <AnswerText>
              In a fast-paced environment, projects and priorities can shift
              very very frequently. It’s important that you and your manager are
              in alignment on which tasks or projects you should focus on. So
              frequent communication with the team and also organising your
              schedule well are the key. I have found it super helpful to manage
              my personal tasks on a tool like Trello
            </AnswerText>
          </Col>
        </Row>
      </Row>
    );
  }
}

export default withRouter(QuestionAndDescription);
