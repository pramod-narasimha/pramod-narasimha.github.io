import React from "react";
import { connect } from "react-redux";

import userProfile from "../../../../assets/images/user_profile.png";
import {
  MobileViewHeaderWrapper,
  MobileViewHeaderRow
} from "./styles";
import { Avatar, Icon, Input, Col, Row } from "antd";
import HushLogo from "../../../../assets/SVGs/HushLogo";
import HamburgerIcon from "../../../../assets/SVGs/HamburgerIcon";
import { openSideDrawer } from "../../../../actions/FetchApiDataActions";

class MobileViewHeaderBar extends React.Component {
  onIconClick = (event) => {
    console.log(event);
    event.stopPropagation();
    this.props.openSideDrawer();
  }
  render() {
    return (
      <MobileViewHeaderWrapper>
        <MobileViewHeaderRow style={{ background: "#ffff" }}>
          <Col span={24} className="pt2 pb2">
            <div>
              <span className="pl2">
                <Icon component={HushLogo} />
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
                prefix={<Icon component={HamburgerIcon} onClick={this.onIconClick} />}
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

const mapDispatchToProps = dispatch => ({openSideDrawer: () => dispatch(openSideDrawer())});

export default connect(null,mapDispatchToProps)(MobileViewHeaderBar);
