import React from "react";

import "./FilterMobileView.less";
import { Icon, Col, Drawer, Row } from "antd";
import Popular from "../../../../assets/SVGs/Popular";
import HomeIcon from "../../../../assets/SVGs/HomeIcon";

class FilterMobileView extends React.Component {
  render() {
    return (
      <div>
        <Drawer placement={"left"} closable={false} visible={true}>
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
              <span className="home bold">Home</span>
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
        </Drawer>
      </div>
    );
  }
}

export default FilterMobileView;
