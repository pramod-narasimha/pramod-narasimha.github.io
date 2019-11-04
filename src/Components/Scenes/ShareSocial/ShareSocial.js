import React from "react";
import { Row, Col, Icon } from "antd";
import FacebookShare from "../../../assets/SVGs/FacebookShare";
import LinkedInShare from "../../../assets/SVGs/LinkedInShare";
import URLShare from "../../../assets/SVGs/URLShare";
import "./ShareSocial.less";
import TwitterShare from "../../../assets/SVGs/TwitterShare";

class ShareSocial extends React.Component {
  render() {
    return (
      <div className="right mt3">
        <Row className="mb1">
          <Col span={24}>
            <span className="share">SHARE</span>
          </Col>
        </Row>
        <Row className="mb1">
          <Col span={24}>
            <span>
              <Icon component={FacebookShare} />
            </span>
          </Col>
        </Row>
        <Row className="mb1">
          <Col span={24}>
            <span>
              <Icon component={TwitterShare} />
            </span>
          </Col>
        </Row>
        <Row className="mb1">
          <Col span={24}>
            <span>
              <Icon component={LinkedInShare} />
            </span>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <span>
              <Icon component={URLShare} />
            </span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ShareSocial;
