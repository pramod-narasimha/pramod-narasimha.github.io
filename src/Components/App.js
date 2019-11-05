import React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import GlobalErrorBoundary from "./CommonComponents/ErrorBoundary/GlobalErrorHandler";
import HeaderBar from "./CommonComponents/HeaderBar/HeaderBar";
import MultiplePosts from "./Scenes/MultiplePosts/MultiplePost";
import SinglePost from "./Scenes/SinglePost/SinglePost";

import "../utils/utilities.less";
import NoMatch from "./CommonComponents/NoMatch";

class App extends React.Component {
  render() {
    return (
      <GlobalErrorBoundary>
        <Layout>
          <HeaderBar />
          <Layout>
            <Switch>
              <Route exact path="/" component={MultiplePosts} />
              <Route exact path="/posts" component={MultiplePosts} />
              <Route exact path="/post/:id" component={SinglePost} />
              <Route component={NoMatch} />
            </Switch>
            {/* {this.decider(selectedPath)} */}
          </Layout>
        </Layout>
      </GlobalErrorBoundary>
    );
  }
}

export default App;
