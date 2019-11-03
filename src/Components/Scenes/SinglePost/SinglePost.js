import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MediaQuery from "react-responsive";
import { Layout, Col, Row } from "antd";
import Post from "../Post/Post";
import FilterWebView from "../../CommonComponents/FilterSection/WebView/FilterWebView";
import AskUs from "../../CommonComponents/AskUsSection/AskUs";
import MultiTags from "../MultiTags/MultiTags";
import AddComment from "../AddComment/AddComment";
import FilterMobileView from "../../CommonComponents/FilterSection/MobileView/FilterMobileView";
import { fetchApiData } from "../../../actions/FetchApiDataActions";
import GlobalErrorBoundary from "../../CommonComponents/ErrorBoundary/GlobalErrorHandler";

const { Content } = Layout;

class SinglePost extends React.Component {
  state = {
    postData: {}
  };

  componentDidMount() {
    this.props.fetchApiData();
  }

  extractURL = currentPath => currentPath.substr(6);

  render() {
    var postURL = this.extractURL(this.props.location.pathname);
    if (this.props.postsList.length) {
      var singlePostData = this.props.postsList.filter(
        post => post.url === postURL
      );
      if (singlePostData.length == 0) {
        this.props.history.push("/posts");
      }
    } else {
      return <div></div>;
    }

    return (
      <GlobalErrorBoundary>
        <Content>
          <Col span={6}>
            {/* <MediaQuery query={"(min-width: 1224px)"}>
            <FilterMobileView />
          </MediaQuery> */}
            <FilterWebView />
          </Col>
          <Col span={12}>
            <Row>
              <Col span={24}>
                <MultiTags />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                {singlePostData && singlePostData.length && (
                  <Post postData={singlePostData[0]} />
                )}
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <AddComment />
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            <AskUs />
          </Col>
        </Content>
      </GlobalErrorBoundary>
    );
  }
}

const mapStateToProps = statef => {
  return {
    isLoading: statef.apiData.isLoading,
    postsList: statef.apiData.postsList
  };
};

const mapDispatchToProps = dispatch => ({
  fetchApiData: () => dispatch(fetchApiData())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SinglePost)
);
