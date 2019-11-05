import React from "react";
import { FlexContainer, PostedIn, Tags, FlexContainerSubDiv } from "./styles";

class MultiTags extends React.Component {
  render() {
    return (
      <div>
        <FlexContainer className="pb1">
          <FlexContainerSubDiv>
            <PostedIn className="pr1">Posted in</PostedIn>
          </FlexContainerSubDiv>
          {this.props.tags &&
            this.props.tags.map(tag => (
              <FlexContainerSubDiv>
                <Tags key={tag} className="mr1">
                  {tag}
                </Tags>
              </FlexContainerSubDiv>
            ))}
        </FlexContainer>
      </div>
    );
  }
}

export default MultiTags;
