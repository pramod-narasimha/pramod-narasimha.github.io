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

const { Content } = Layout;

class MultiplePosts extends React.Component {
  componentDidMount() {
    this.props.fetchApiData();
  }
  render() {
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
              {!this.props.isLoading &&
                this.props.postsList.length > 0 &&
                this.props.postsList.map(post => (
                  <Row key={post.id}>
                    <Col span={24}>
                      <Post postData={post} />
                    </Col>
                  </Row>
                ))}
              {this.props.isLoading && (
                <Row>
                  <Col span={24}>
                    <Post />
                  </Col>
                </Row>
              )}
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
  )(MultiplePosts)
);
