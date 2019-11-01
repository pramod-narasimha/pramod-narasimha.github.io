import React, { Component } from "react";

import "./QuestionsAskedFor.less";
import { Icon } from "antd";
import CompanyIcon from "../../../../assets/SVGs/CompanyIcon";

class QuestionsAskedFor extends React.Component {
  render() {
    return (
      <div>
        <span className="pl1 pr1">
          <Icon component={CompanyIcon} />
        </span>
        <span className="questions-for">Questions for </span>
        <span className="companyName"> {"Microsoft"}</span>
      </div>
    );
  }
}

export default QuestionsAskedFor;
