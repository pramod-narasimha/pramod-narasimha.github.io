import React from "react";
import { withRouter } from "react-router-dom";
import { Icon, Tooltip } from "antd";

import AnswerIcon from "../../../../../../assets/SVGs/AnswerIcon";
import FacebookGrey from "../../../../../../assets/SVGs/FacebookGrey";
import MoreIcon from "../../../../../../assets/SVGs/MoreIcon";
import Helpfull from "../../../../../../assets/SVGs/Helpfull";
import {
  AnswerText,
  HelpfullText,
  MoreSymbolIcon,
  HelpfullTextOuterSpan
} from "../styles";
import LikeReaction from "../../../../../../assets/SVGs/LikeReaction";
import HeartReaction from "../../../../../../assets/SVGs/HeartReaction";
import ClapReaction from "../../../../../../assets/SVGs/ClapReaction";
import SuperbIcon from "../../../../../../assets/SVGs/SuperbIcon";
import DislikeReaction from "../../../../../../assets/SVGs/DislikeReaction";
import "../styles.less";

class UserReactionMobileView extends React.Component {
  state = {
    liked: false
  };

  likePost = event => {
    event.stopPropagation();
    this.setState({ liked: true });
  };

  onClickOfAnswerIcon = (event, url) => {
    event.stopPropagation();
    (this.props.location.pathname === "/posts" ||
      this.props.location.pathname === "/") &&
      this.props.history.push("/post/" + url);
  };

  emojis = () => {
    return (
      <div>
        <span className="pr1">
          <Icon
            component={LikeReaction}
            onClick={event => this.likePost(event)}
          />
        </span>
        <span className="pr1">
          <Icon
            component={HeartReaction}
            onClick={event => this.likePost(event)}
          />
        </span>
        <span className="pr1">
          <Icon
            component={ClapReaction}
            onClick={event => this.likePost(event)}
          />
        </span>
        <span className="pr1">
          <Icon
            component={SuperbIcon}
            onClick={event => this.likePost(event)}
          />
        </span>
        <span className="pr1">
          <Icon
            component={DislikeReaction}
            onClick={event => this.likePost(event)}
          />
        </span>
      </div>
    );
  };
  render() {
    return (
      <div className="mb1">
        <div className="pl1" style={{ display: "inline-block" }}>
          <Tooltip
            trigger="click"
            className="my-tooltip"
            style={{ color: "#ffff" }}
            placement="top"
            title={this.emojis()}
          >
            <HelpfullTextOuterSpan
              isLiked={this.state.liked}
              className="pointer"
            >
              <span>
                <Icon component={Helpfull} />
              </span>
              <HelpfullText className="pl1">Helpfull</HelpfullText>
            </HelpfullTextOuterSpan>
          </Tooltip>
        </div>
        <div className="pl3 inline-block">
          <span
            className="pointer"
            onClick={event => this.onClickOfAnswerIcon(event, this.props.url)}
          >
            <span>
              <Icon component={AnswerIcon} />
            </span>
            <AnswerText className="pl1">Answer</AnswerText>
          </span>
        </div>
        <div className="pr pointer inline-block right">
          <MoreSymbolIcon component={MoreIcon} />
        </div>
        <div className="pr3 pointer inline-block right">
          <Icon component={FacebookGrey} />
        </div>
      </div>
    );
  }
}

export default withRouter(UserReactionMobileView);
