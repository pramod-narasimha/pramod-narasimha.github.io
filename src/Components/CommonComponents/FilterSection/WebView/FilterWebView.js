import React from "react";
import { withRouter } from "react-router-dom";
import { Icon, Col } from "antd";

import HomeIcon from "../../../../assets/SVGs/HomeIcon";
import Popular from "../../../../assets/SVGs/Popular";
import ShareSocial from "../../../Scenes/ShareSocial/ShareSocial";
import {
  SelectedRow,
  FilterWebViewDiv,
  HushFeed,
  Home,
  PopularText,
  FilterRow,
  GoToFeed
} from "./styles";

class FilterWebView extends React.Component {
    onBackClick = event => {
      console.log(event);
      event.stopPropagation();
      this.props.location.pathname !== "/posts" && this.props.location.pathname !== "/" &&
        this.props.history.push("/posts");
    };
  render() {
    var showBackButtion = false;
    if (
      this.props.location.pathname === "/" ||
      this.props.location.pathname === "/posts"
    ) {
      showBackButtion = false;
    } else {
      showBackButtion = true;
    }

    return (
      <FilterWebViewDiv>
        {!showBackButtion && (
          <div>
            <FilterRow>
              <Col span={24}>
                <HushFeed className="pl1">HUSH FEED</HushFeed>
              </Col>
            </FilterRow>
            <SelectedRow>
              <Col span={24} className="pointer">
                <span className="pl1 pr1">
                  <Icon component={HomeIcon} />
                </span>
                <Home className="bold">Home</Home>
                <span>
                  <Icon
                    className="pr1 right"
                    type="right"
                    style={{ color: "#B9CCEB", lineHeight: "34px" }}
                  />
                </span>
              </Col>
            </SelectedRow>
            <FilterRow>
              <Col span={24} className="pointer">
                <span className="pl1 pr1">
                  <Icon component={Popular} />
                </span>
                <PopularText>Popular</PopularText>
              </Col>
            </FilterRow>
          </div>
        )}
        {showBackButtion && (
          <div>
            <SelectedRow>
              <Col className="pointer" span={24} onClick={event=>this.onBackClick(event)}>
                <span className="pl1 pr1">
                  <Icon type="left"/>
                </span>

                <GoToFeed className="go-to-feed">Go to Feed</GoToFeed>
              </Col>
            </SelectedRow>
            <FilterRow>
              <Col span={24}>
                <ShareSocial />
              </Col>
            </FilterRow>
          </div>
        )}
      </FilterWebViewDiv>
    );
  }
}

export default withRouter(FilterWebView);
