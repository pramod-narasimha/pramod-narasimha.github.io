import React from "react";
import { Col, Row, Icon, Tooltip } from "antd";

import './styles.less';
import AnswerIcon from "../../../../../../assets/SVGs/AnswerIcon";
import FacebookGrey from "../../../../../../assets/SVGs/FacebookGrey";
import TwitterIcon from "../../../../../../assets/SVGs/TwitterIcon";
import ShareIcon from "../../../../../../assets/SVGs/ShareIcon";
import MoreIcon from "../../../../../../assets/SVGs/MoreIcon";
import Helpfull from "../../../../../../assets/SVGs/Helpfull";
import { AnswerText, HelpfullText, UserReactionTooltip } from "../styles";
import LikeReaction from "../../../../../../assets/SVGs/LikeReaction";
import HeartReaction from "../../../../../../assets/SVGs/HeartReaction";
import ClapReaction from "../../../../../../assets/SVGs/ClapReaction";
import SuperbIcon from "../../../../../../assets/SVGs/SuperbIcon";
import DislikeReaction from "../../../../../../assets/SVGs/DislikeReaction";

class UserReactionWebView extends React.Component {
  emojis = () => {
    return (
      <div>
        <span className="pr1">
          <Icon component={LikeReaction} />
        </span>
        <span className="pr1">
          <Icon component={HeartReaction} />
        </span>
        <span className="pr1">
          <Icon component={ClapReaction} />
        </span>
        <span className="pr1">
          <Icon component={SuperbIcon} />
        </span>
        <span className="pr1">
          <Icon component={DislikeReaction} />
        </span>
      </div>
    );
  };
  render() {
    return (
      <Row>
        <Col span={4}>
          <UserReactionTooltip id="tooltip"
          className="my-tooltip"
            style={{ color: "#ffff" }}
            placement="top"
            title={this.emojis()}
          >
            <span>
              <span>
                <Icon component={Helpfull} />
              </span>
              <HelpfullText className="pl1">Helpfull</HelpfullText>
            </span>{" "}
          </UserReactionTooltip>
        </Col>
        <Col span={4}>
          <span>
            <span>
              <Icon component={AnswerIcon} />
            </span>
            <AnswerText className="pl1">Answer</AnswerText>
          </span>
        </Col>
        <Col span={8} offset={8}>
          <Col span={6}>
            <Icon component={FacebookGrey} />
          </Col>
          <Col span={6}>
            <Icon component={TwitterIcon} />
          </Col>
          <Col span={6}>
            <Icon component={ShareIcon} />
          </Col>
          <Col span={6}>
            <Icon component={MoreIcon} />
          </Col>
        </Col>
      </Row>
    );
  }
}

export default UserReactionWebView;
