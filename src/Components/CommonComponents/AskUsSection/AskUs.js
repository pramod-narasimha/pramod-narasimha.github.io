import React from "react";
import { Icon } from "antd";
import NeedHelp from "../../../assets/SVGs/NeedHelp";

import './AskUs.less'
class AskUs extends React.Component {
  render() {
    return (
      <div className="ask-us-outerBox">
        <div className="ask-us-innerBox">
          <span className="pr1">
            <Icon component={NeedHelp} />
          </span>
          <span className="ask-new-question-text">Ask new question</span>
        </div>
      </div>
    );
  }
}

export default AskUs;
