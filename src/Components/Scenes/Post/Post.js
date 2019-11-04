import React from "react";
import { connect } from "react-redux";
import { Card, Divider, Col, Row, Avatar, List } from "antd";
import QuestionsAskedFor from "./Components/QuestionAskedFor/QuestionsAskedFor";
import QuestionAndDescription from "./Components/QuestionAndDescription/QuestionAndDescription";
import UserReactions from "./Components/UserReactions/UserReactions";
import PostReactions from "./Components/PostReactions/PostReactions";
import UserProfile from "./Components/UserProfile/UserProfile";

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
            <UserProfile postData={this.props.postData}/>
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
