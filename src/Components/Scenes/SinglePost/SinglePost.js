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
import ShareSocial from "../ShareSocial/ShareSocial";

const { Content } = Layout;

class SinglePost extends React.Component {
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
          <FlexBoxContainer>
            <MediaQuery query={"(min-width: 1061px)"}>
              <FilterColumnSection>
                <FilterWebView />
              </FilterColumnSection>
            </MediaQuery>
            <PostColumnSection>
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
