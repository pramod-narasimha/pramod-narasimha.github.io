import React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import "./CommonComponents/HeaderBar/HeaderBar.less";
import GlobalErrorBoundary from "./CommonComponents/ErrorBoundary/GlobalErrorHandler";
import HeaderBar from "./CommonComponents/HeaderBar/HeaderBar";
import MultiplePosts from "./Scenes/MultiplePosts/MultiplePost";
import SinglePost from "./Scenes/SinglePost/SinglePost";

import '../utils/utilities.less'
import NoMatch from "./CommonComponents/NoMatch";

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
      default: 
        return "";
    }
  }

  render() {
    var selectedPath = 2;

    switch (this.props.location.pathname) {
      case "/":
        selectedPath = 1;
        break;
      case "/posts":
        selectedPath = 1;
        break;
      default:
        selectedPath = 2;
    }

    return (
      <GlobalErrorBoundary>
        <Layout>
          <HeaderBar/>
          <Layout>
            <Switch>
              <Route exact path="/" component={MultiplePosts}/>
              <Route exact path="/posts" component={MultiplePosts}/>
              <Route exact path="/post/:id" component={SinglePost}/>
              <Route component={NoMatch}/>
            </Switch>
              {/* {this.decider(selectedPath)} */}
          </Layout>
        </Layout>
      </GlobalErrorBoundary>
    );
  }
}

export default App;
