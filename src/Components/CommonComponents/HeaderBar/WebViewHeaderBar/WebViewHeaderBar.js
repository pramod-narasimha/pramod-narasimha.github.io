import React from "react";

import userProfile from "../../../../assets/images/user_profile.png";
import {
  InputSearchBar,
  WebViewHeaderWrapper,
  CompanyImageDiv,
  SearchBarWrapper,
  FlexBoxContainer,
  ProfileImageWrapper
} from "./styles";
import { Avatar, Icon } from "antd";
import HushLogo from "../../../../assets/SVGs/HushLogo";

class WebViewHeaderBar extends React.Component {
  render() {
    return (
      <WebViewHeaderWrapper>
        <FlexBoxContainer>
          <CompanyImageDiv>
            <Icon component={HushLogo} />
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

export default WebViewHeaderBar;
