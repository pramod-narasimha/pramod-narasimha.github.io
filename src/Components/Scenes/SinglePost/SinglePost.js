import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MediaQuery from "react-responsive";
import { Layout, Col, Row } from "antd";
import Post from "../Post/Post";

import AskUs from "../../CommonComponents/AskUsSection/AskUs";
import FilterWebView from "../../CommonComponents/FilterSection/WebView/FilterWebView";
import GlobalErrorBoundary from "../../CommonComponents/ErrorBoundary/GlobalErrorHandler";
import { fetchApiData } from "../../../actions/FetchApiDataActions";
import {
  FlexBoxContainer,
  FilterColumnSection,
  PostColumnSection,
  AskUsColumnSection
} from "./styles";
import AddComment from "../AddComment/AddComment";
import MultiTags from "../MultiTags/MultiTags";
import StaticComment from "../StaticComments/StaticComment";

const { Content } = Layout;

class SinglePost extends React.Component {

  state = {
    dummy: [1, 2, 3, 4, 5]
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
      if (singlePostData.length === 0) {
        this.props.history.push("/posts");
      }
    } else {
      return <div></div>;
    }
    return (
      <GlobalErrorBoundary>
        <Content>
          <FlexBoxContainer className="mt1">
            <MediaQuery query={"(min-width: 1061px)"}>
              <FilterColumnSection>
                <FilterWebView />
              </FilterColumnSection>
            </MediaQuery>
            <PostColumnSection>
              <Row>
                <Col span={24}>
                  {singlePostData && singlePostData.length && (
                    <MultiTags tags={singlePostData[0].tags} />
                  )}
                </Col>
              </Row>
              <Row className="mb1">
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
              {this.state.dummy.map(dummyKey => (
                  <Row key={dummyKey} className="mb1">
                    <Col span={24}>
                      <StaticComment />
                    </Col>
                  </Row>
                ))}
            </PostColumnSection>
            <MediaQuery query={"(min-width: 1061px)"}>
              <AskUsColumnSection>
                <AskUs />
              </AskUsColumnSection>
            </MediaQuery>
          </FlexBoxContainer>
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
