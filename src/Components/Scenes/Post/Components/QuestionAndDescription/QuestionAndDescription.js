import React from "react";
import { withRouter } from "react-router-dom";
import MediaQuery from "react-responsive";
import { Row, Col } from "antd";
import { QuestionAsked, AnswerText } from "./styles";

class QuestionAndDescription extends React.Component {
  state = {
    visible: false
  };

  onClickOfQuestion = (event, url) => {
    event.stopPropagation();
    (this.props.location.pathname==="/posts" || this.props.location.pathname==='/') && this.props.history.push("/post/" + url);
  };

  render() {
    return (
      <Row>
        <Row className="mb1">
          <Col span={24}>
            <QuestionAsked
              className="font-size-18 bold pointer"
              onClick={event => this.onClickOfQuestion(event, this.props.url)}
            >
              {this.props.title}
            </QuestionAsked>
          </Col>
        </Row>
        <Row className="mb2">
          <Col span={24}>
            {this.state.visible ? (
              <AnswerText>{this.props.description}</AnswerText>
            ) : (
              <AnswerText>
                {this.props.metaDescription}
                {this.props.metaDescription !== this.props.description && (
                  <span className="pointer">
                    <MediaQuery query={"(min-width: 564px)"}>
                      <span
                        style={{ color: "#006aff" }}
                        onClick={() => this.setState({ visible: true })}
                      >
                        ...more
                      </span>
                    </MediaQuery>
                    <MediaQuery query={"(max-width: 563px)"}>
                      <span
                        style={{ color: "#006aff" }}
                        onClick={() => this.setState({ visible: true })}
                      >
                        ...See More
                      </span>
                    </MediaQuery>
                  </span>
                )}
              </AnswerText>
            )}
          </Col>
        </Row>
      </Row>
    );
  }
}

export default withRouter(QuestionAndDescription);
