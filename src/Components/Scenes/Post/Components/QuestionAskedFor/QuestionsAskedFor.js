import React, { Component } from "react";

import "./QuestionsAskedFor.less";
import { Row, Col, Icon } from "antd";
import CompanyIcon from "../../../../../assets/SVGs/CompanyIcon";

class QuestionsAskedFor extends React.Component {
  render() {
    return (
      <Row>
        <Col span={24} className="pb1">
          <span className="pr1">
            <Icon component={CompanyIcon} />
          </span>
          <span className="questions-for">Questions for </span>
          <span className="companyName">{this.props.companies}</span>
        </Col>
      </Row>
    );
  }
}

export default QuestionsAskedFor;
