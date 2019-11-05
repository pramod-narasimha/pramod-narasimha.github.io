import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Avatar, Icon, Input, Col, Row } from "antd";

import userProfile from "../../../../assets/images/user_profile.png";
import { MobileViewHeaderWrapper, MobileViewHeaderRow } from "./styles";
import HushLogo from "../../../../assets/SVGs/HushLogo";
import HamburgerIcon from "../../../../assets/SVGs/HamburgerIcon";
import { openSideDrawer } from "../../../../actions/FetchApiDataActions";

class MobileViewHeaderBar extends React.Component {
  onIconClick = event => {
    console.log(event);
    event.stopPropagation();
    this.props.openSideDrawer();
  };

  onLogoClick = event => {
    event.stopPropagation();
    this.props.location.pathname !== "/posts" &&
      this.props.location.pathname !== "/" &&
      this.props.history.push("/posts");
  };

  render() {
    return (
      <MobileViewHeaderWrapper>
        <MobileViewHeaderRow style={{ background: "#ffff" }}>
          <Col span={24} className="pt2 pb2">
            <div>
              <span className="pl2">
                <Icon
                  className="pointer"
                  component={HushLogo}
                  onClick={event => this.onLogoClick(event)}
                />
              </span>
              <span className="right pr2">
                <Avatar src={userProfile} />
              </span>
            </div>
          </Col>
        </MobileViewHeaderRow>
        <Row style={{ background: "#ffff" }}>
          <Col span={24} className="pb1 pl2 pr2">
            <div>
              <Input
                readOnly
                defaultValue="  Home"
                prefix={
                  <Icon component={HamburgerIcon} onClick={this.onIconClick} />
                }
                // placeholder="Search Hush"

                // prefix={<Icon type="search" />}
              />
            </div>
          </Col>
        </Row>
      </MobileViewHeaderWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  openSideDrawer: () => dispatch(openSideDrawer())
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(MobileViewHeaderBar)
);
