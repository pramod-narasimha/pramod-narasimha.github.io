import React from "react";

import "./FilterMobileView.less";
import { connect } from "react-redux";
import { Icon, Col, Drawer, Row } from "antd";
import Popular from "../../../../assets/SVGs/Popular";
import HomeIcon from "../../../../assets/SVGs/HomeIcon";
import { closeSideDrawer } from "../../../../actions/FetchApiDataActions";
import FilterWebView from "../WebView/FilterWebView";

class FilterMobileView extends React.Component {
  render() {
    return (
      <div>
        <Drawer
          placement={"left"}
          closable={false}
          visible={this.props.sideDrawer === "open" ? true : false}
          onClose={()=>this.props.closeSideDrawer()}
        >
          <FilterWebView/>
          {/* <Row>
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
          </Row> */}
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = statef => {
  console.log(statef)
  return {
    sideDrawer: statef.apiData.sideDrawer
  };
};

const mapDispatchToProps = dispatch => ({
  closeSideDrawer: () => dispatch(closeSideDrawer())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterMobileView);