import React from "react";
import { Row, Col, Button } from "antd";

class QuestionAndDescription extends React.Component {
  state = {
    visible: false
  };

  render() {
    return (
      <Row>
        <Col span={24}>
          <Row>
            <Col span={24}>
              <span className="font-size-18 bold">{this.props.title}</span>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              {this.state.visible ? (
                <span>{this.props.description}</span>
              ) : (
                <span>
                  {this.props.metaDescription}
                  {this.props.metaDescription !== this.props.description && (
                    <span style={{color:"blue"}} onClick={() => this.setState({ visible: true })}>
                      See More
                    </span>
                  )}
                </span>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default QuestionAndDescription;
