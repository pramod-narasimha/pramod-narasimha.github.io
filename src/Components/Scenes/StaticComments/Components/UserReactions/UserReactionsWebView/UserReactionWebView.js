import React from "react";
import { Col, Row, Icon, Tooltip } from "antd";

import "../styles.less";
import AnswerIcon from "../../../../../../assets/SVGs/AnswerIcon";
import FacebookGrey from "../../../../../../assets/SVGs/FacebookGrey";
import TwitterIcon from "../../../../../../assets/SVGs/TwitterIcon";
import ShareIcon from "../../../../../../assets/SVGs/ShareIcon";
import MoreIcon from "../../../../../../assets/SVGs/MoreIcon";
import Helpfull from "../../../../../../assets/SVGs/Helpfull";
import { AnswerText, HelpfullText, MoreSymbolIcon, HelpfullTextOuterSpan } from "../styles";
import LikeReaction from "../../../../../../assets/SVGs/LikeReaction";
import HeartReaction from "../../../../../../assets/SVGs/HeartReaction";
import ClapReaction from "../../../../../../assets/SVGs/ClapReaction";
import SuperbIcon from "../../../../../../assets/SVGs/SuperbIcon";
import DislikeReaction from "../../../../../../assets/SVGs/DislikeReaction";

class UserReactionWebView extends React.Component {
  state = {
    liked: false
  };

  likePost = event => {
    event.stopPropagation();
    this.setState({ liked: true });
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
      <Row className="mb1">
        <Col span={4}>
          <Tooltip
            id="tooltip"
            className="my-tooltip"
            style={{ color: "#ffff" }}
            placement="top"
            title={this.emojis()}
          >
            <HelpfullTextOuterSpan isLiked={this.state.liked} className="pointer">
              <span>
                <Icon component={Helpfull} />
              </span>
              <HelpfullText className="pl1">Helpfull</HelpfullText>
            </HelpfullTextOuterSpan>
          </Tooltip>
        </Col>
        <Col span={4}>
          <span
            className="pointer"
          >
            <span>
              <Icon component={AnswerIcon} />
            </span>
            <AnswerText className="pl1">Comments</AnswerText>
          </span>
        </Col>
        <Col span={8} offset={8}>
          <Col className="pointer" span={6}>
            <Icon component={FacebookGrey} />
          </Col>
          <Col className="pointer" span={6}>
            <Icon component={TwitterIcon} />
          </Col>
          <Col className="pointer" span={6}>
            <Icon component={ShareIcon} />
          </Col>
          <Col className="pointer" span={6}>
            <MoreSymbolIcon component={MoreIcon} />
          </Col>
        </Col>
      </Row>
    );
  }
}

export default UserReactionWebView;
