import React from "react";
import { connect } from "react-redux";
import { Card, Divider, Col, Row } from "antd";
import { postedTime } from "./Components/PostedTime/PostedTime";
import userProfile from "../../../assets/images/user_profile.png";
import QuestionsAskedFor from "./Components/QuestionAskedFor/QuestionsAskedFor";
import "./Post.less";
import QuestionAndDescription from "./Components/QuestionAndDescription/QuestionAndDescription";
import UserReactions from "./Components/UserReactions/UserReactions";
import PostReactions from "./Components/PostReactions/PostReactions";

class Post extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card loading={this.props.isLoading} style={{ width: "564px" }}>
          {this.props.postData && (
            <div>
              {this.props.postData.companyName.length > 0 && (
                <QuestionsAskedFor
                  companies={this.props.postData.companyName}
                />
              )}
              <Row justify="start">
                <Col span={12}>
                  <Col span={12}>
                    <img
                      height="40"
                      width="40"
                      src={this.props.postData.imageUrl}
                      alt=""
                    />
                  </Col>
                  <Col span={12}>
                    <Row>
                      <Col span={24}>
                        <span>{this.props.postData.userName}</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={24}>
                        <span>Intel</span>
                      </Col>
                    </Row>
                  </Col>
                </Col>
                <Col span={12}>
                  <div>{postedTime(this.props.postData.createdDate)}</div>
                </Col>
              </Row>
              <QuestionAndDescription
                title={this.props.postData.title}
                metaDescription={this.props.postData.metaDescription}
                description={this.props.postData.description}
              />
              <UserReactions />
              <Divider />
              <PostReactions
                likeCount={this.props.postData.likeCount}
                aViewContent={this.props.postData.AviewContent}
                viewCount={this.props.postData.viewCount}
                commentCount={this.props.postData.commentCount}
              ></PostReactions>
            </div>
          )}
        </Card>
      </div>
    );
  }
}

const mapStateToProps = statef => {
  return {
    isLoading: statef.apiData.isLoading,
    postsList: statef.apiData.postsList
  };
};

export default connect(
  mapStateToProps,
  null
)(Post);
