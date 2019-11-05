import React from "react";
import { Row, Col, Icon } from "antd";

import FacebookShare from "../../../assets/SVGs/FacebookShare";
import LinkedInShare from "../../../assets/SVGs/LinkedInShare";
import URLShare from "../../../assets/SVGs/URLShare";
import TwitterShare from "../../../assets/SVGs/TwitterShare";
import { OuterDiv, ShareText } from "./styles";
import GlobalErrorBoundary from "../../CommonComponents/ErrorBoundary/GlobalErrorHandler";

class ShareSocial extends React.Component {
  render() {
    return (
      <GlobalErrorBoundary>
        <OuterDiv className="mt3">
          <Row className="mb1">
            <Col span={24}>
              <ShareText className="share">SHARE</ShareText>
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
        </OuterDiv>
      </GlobalErrorBoundary>
    );
  }
}

export default ShareSocial;
