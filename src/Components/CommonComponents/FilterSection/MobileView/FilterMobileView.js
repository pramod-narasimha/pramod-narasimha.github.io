import React from "react";
import { connect } from "react-redux";
import { Drawer } from "antd";

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
          onClose={() => this.props.closeSideDrawer()}
        >
          <FilterWebView />
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = statef => {
  console.log(statef);
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
