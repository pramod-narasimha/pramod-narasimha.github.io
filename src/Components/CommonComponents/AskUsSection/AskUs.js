import React from "react";
import { Icon } from "antd";

import NeedHelp from "../../../assets/SVGs/NeedHelp";
import { AskUsOuterbox, AskUsInnerBox, AskQuestionText } from "./styles";

class AskUs extends React.Component {
  render() {
    return (
      <AskUsOuterbox>
        <AskUsInnerBox className="pointer">
          <span className="pr1">
            <Icon component={NeedHelp} />
          </span>
          <AskQuestionText>Ask new question</AskQuestionText>
        </AskUsInnerBox>
      </AskUsOuterbox>
    );
  }
}

export default AskUs;
