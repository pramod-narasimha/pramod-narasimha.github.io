import React from "react";
import { Icon } from "antd";

import LikeCount from "../../../../../assets/SVGs/LikeCount";
import HeartCount from "../../../../../assets/SVGs/HeartCount";
import ClapCount from "../../../../../assets/SVGs/ClapCount";
import {
  Tags,
  LikeCountText,
  HeartCountText,
  ClapCountText,
  CommentCountText,
  CountFont,
  FlexContainer,
  FlexContainerSubDiv
} from "./styles";

class PostReactions extends React.Component {
  render() {
    return (
      <div className="mt1">
        <FlexContainer>
          {this.props.tags.map(tag => (
            <FlexContainerSubDiv className="pr1" key={tag}>
              <Tags key={tag}>#{tag}</Tags>
            </FlexContainerSubDiv>
          ))}
        </FlexContainer>
        <div className="right inline-block">
          {this.props.likeCount && (
            <span>
              <Icon component={LikeCount} />
              <LikeCountText>{this.props.likeCount}</LikeCountText>
            </span>
          )}
          {this.props.aViewContent && (
            <span className="pl1">
              <Icon component={HeartCount} />
              <HeartCountText>{this.props.aViewContent}</HeartCountText>
            </span>
          )}
          {this.props.viewCount && (
            <span className="pl1">
              <Icon component={ClapCount} />
              <ClapCountText>{this.props.viewCount}</ClapCountText>
            </span>
          )}
          <span className="pl1 bold">
            <CountFont>&middot;</CountFont>
          </span>
          {this.props.commentCount && (
            <span className="pl1">
              <CommentCountText>
                {this.props.commentCount} answers
              </CommentCountText>
            </span>
          )}
        </div>
      </div>
    );
  }
}

export default PostReactions;
