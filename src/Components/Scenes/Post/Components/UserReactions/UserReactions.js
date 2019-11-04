import React from "react";
import MediaQuery from "react-responsive";
import { Col, Row, Icon } from "antd";
import AnswerIcon from "../../../../../assets/SVGs/AnswerIcon";
import FacebookGrey from "../../../../../assets/SVGs/FacebookGrey";
import TwitterIcon from "../../../../../assets/SVGs/TwitterIcon";
import ShareIcon from "../../../../../assets/SVGs/ShareIcon";
import MoreIcon from "../../../../../assets/SVGs/MoreIcon";
import Helpfull from "../../../../../assets/SVGs/Helpfull";
import { AnswerText, HelpfullText } from "./styles";
import UserReactionWebView from "./UserReactionsWebView/UserReactionWebView";

class UserReactions extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery query={"(min-width: 564px)"}>
          <UserReactionWebView />
        </MediaQuery>
        <MediaQuery query={"(max-width: 563px)"}>
          <UserReactionWebView />
        </MediaQuery>
      </div>
    );
  }
}

export default UserReactions;
