import React from "react";
import { Layout, Row, Col, Avatar, Input, Icon } from "antd";
import MediaQuery from "react-responsive";
import "./CommonComponents/HeaderBar/HeaderBar.less";
import HushLogo from "./assets/SVGs/HushLogo";
import GlobalErrorBoundary from "./CommonComponents/ErrorBoundary/GlobalErrorHandler";
import HeaderBar from "./CommonComponents/HeaderBar/HeaderBar";
import MultiplePosts from "./Scenes/MultiplePosts/MultiplePost";
import SinglePost from "./Scenes/SinglePost/SinglePost";

import './utils/utilities.less'

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.location);
  }

  decider = (path) => {
    switch(path){
      case 1:
        return <MultiplePosts/>
      case 2:
        return <SinglePost/>
    }
  }

  render() {
    var selectedPath = "2";

    switch (this.props.location.pathname) {
      case "/":
        selectedPath = "1";
      case "/posts":
        selectedPath = "1";
        break;
      default:
        selectedPath = "2";
    }

    return (
      <GlobalErrorBoundary>
        <Layout>
          <HeaderBar/>
          <Layout>
              {this.decider(selectedPath)}
          </Layout>
        </Layout>
      </GlobalErrorBoundary>
    );
  }
}

export default App;
