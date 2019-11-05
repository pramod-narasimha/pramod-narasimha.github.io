import React from "react";
import { withRouter } from "react-router-dom";
import { Avatar, Icon } from "antd";

import userProfile from "../../../../assets/images/user_profile.png";
import {
  InputSearchBar,
  WebViewHeaderWrapper,
  CompanyImageDiv,
  SearchBarWrapper,
  FlexBoxContainer,
  ProfileImageWrapper
} from "./styles";
import HushLogo from "../../../../assets/SVGs/HushLogo";

class WebViewHeaderBar extends React.Component {
  onLogoClick = event => {
    event.stopPropagation();
    this.props.location.pathname !== "/posts" && this.props.location.pathname !== "/" &&
      this.props.history.push("/posts");
  };
  render() {
    return (
      <WebViewHeaderWrapper>
        <FlexBoxContainer>
          <CompanyImageDiv>
            <Icon
              className="pointer"
              component={HushLogo}
              onClick={event => this.onLogoClick(event)}
            />
          </CompanyImageDiv>
          <SearchBarWrapper>
            <div className="inline-block">
              <InputSearchBar
                placeholder="Search Hush"
                // prefix={<Icon component={HamburgerIcon} />}
                prefix={<Icon type="search" />}
              />
            </div>
          </SearchBarWrapper>
          <ProfileImageWrapper>
            <Avatar src={userProfile} />
          </ProfileImageWrapper>
        </FlexBoxContainer>
      </WebViewHeaderWrapper>
    );
  }
}

export default withRouter(WebViewHeaderBar);
