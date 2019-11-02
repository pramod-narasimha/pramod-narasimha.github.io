import React from "react";
import { Icon, Row, Col } from "antd";
import HomeIcon from "../../../../assets/SVGs/HomeIcon";
import Popular from "../../../../assets/SVGs/Popular";

import "./FilterWebView.less";
import ShareSocial from "../../../Scenes/ShareSocial/ShareSocial";

class FilterWebView extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={24}>
            <span className="hush-feed">Hush Feed</span>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <span className="pr1">
              <Icon component={HomeIcon} />
            </span>
            <span className="bold">Home</span>
            <span>
              <Icon type="right" style={{ color: "#B9CCEB" }} />
            </span>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <span className="pr1">
              <Icon component={Popular} />
            </span>
            <span className="popular">Popular</span>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <span className="pr1">
              <Icon type="left" />
            </span>

            <span className="go-to-feed">Go to Feed</span>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <ShareSocial/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default FilterWebView;
