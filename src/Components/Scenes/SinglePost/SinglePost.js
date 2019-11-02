import React from "react";
import MediaQuery from "react-responsive";
import { Layout, Col, Row } from "antd";
import Post from "../Post/Post";
import FilterWebView from "../../CommonComponents/FilterSection/WebView/FilterWebView";
import AskUs from "../../CommonComponents/AskUsSection/AskUs";
import MultiTags from "../MultiTags/MultiTags";
import AddComment from "../AddComment/AddComment";
import FilterMobileView from "../../CommonComponents/FilterSection/MobileView/FilterMobileView";

const { Content } = Layout;

class SinglePost extends React.Component {
  render() {
    return (
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
              <Post />
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
    );
  }
}

export default SinglePost;
