import React from "react";
import { Row, Col, Icon } from "antd";

import CompanyIcon from "../../../../../assets/SVGs/CompanyIcon";
import { QuestionsFor, CompanyName } from "./styles";

class QuestionsAskedFor extends React.Component {
  render() {
    return (
      <Row>
        <Col span={24} className="pb1">
          <span className="pr1">
            <Icon component={CompanyIcon} />
          </span>
          <QuestionsFor>Questions for </QuestionsFor>
          <CompanyName>{this.props.companies}</CompanyName>
        </Col>
      </Row>
    );
  }
}

export default QuestionsAskedFor;
