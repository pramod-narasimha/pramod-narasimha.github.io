import React from "react";
import { Icon } from "antd";

import LikeCount from "../../../../../assets/SVGs/LikeCount";
import HeartCount from "../../../../../assets/SVGs/HeartCount";
import ClapCount from "../../../../../assets/SVGs/ClapCount";
import {
  LikeCountText,
  HeartCountText,
  ClapCountText,
  CommentCountText,
  CountFont
} from "./styles";

class PostReactions extends React.Component {
  render() {
    return (
      <div className="mt1">
        <div className="right inline-block">
          <span>
            <Icon component={LikeCount} />
            <LikeCountText>1</LikeCountText>
          </span>
          <span className="pl1">
            <Icon component={HeartCount} />
            <HeartCountText>2</HeartCountText>
          </span>
          <span className="pl1">
            <Icon component={ClapCount} />
            <ClapCountText>1</ClapCountText>
          </span>
          <span className="pl1 bold">
            <CountFont>&middot;</CountFont>
          </span>
          <span className="pl1">
            <CommentCountText>3 replies</CommentCountText>
          </span>
        </div>
      </div>
    );
  }
}

export default PostReactions;
