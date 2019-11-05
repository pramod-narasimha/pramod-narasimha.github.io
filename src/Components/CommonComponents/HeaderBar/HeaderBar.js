import React from "react";
import { Layout } from "antd";
import MediaQuery from "react-responsive";

import WebViewHeaderBar from "./WebViewHeaderBar/WebViewHeaderBar";
import MobileViewHeaderBar from "./MobileViewHeaderBar/MobileViewHeaderBar";
import FilterMobileView from "../FilterSection/MobileView/FilterMobileView";


class HeaderBar extends React.Component {
  render() {
    return (
      <div>
        <Layout>
        <MediaQuery query={"(min-width: 1061px)"}>
          <WebViewHeaderBar/>
          </MediaQuery>
          <MediaQuery query={"(max-width: 1060px)"}>
          <MobileViewHeaderBar/>
          <FilterMobileView/>
          </MediaQuery>
        </Layout>
      </div>
    );
  }
}

export default HeaderBar;
