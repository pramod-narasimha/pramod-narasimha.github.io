import React from "react";
import { connect } from "react-redux";
import { Divider } from "antd";
import QuestionsAskedFor from "./Components/QuestionAskedFor/QuestionsAskedFor";
import QuestionAndDescription from "./Components/QuestionAndDescription/QuestionAndDescription";
import UserReactions from "./Components/UserReactions/UserReactions";
import PostReactions from "./Components/PostReactions/PostReactions";
import UserProfile from "./Components/UserProfile/UserProfile";

import { PostCard } from "./styles";
import GlobalErrorBoundary from "../../CommonComponents/ErrorBoundary/GlobalErrorHandler";

class Post extends React.Component {
  render() {
    return (
      <GlobalErrorBoundary>
        <PostCard loading={this.props.isLoading}>
          {this.props.postData && (
            <div>
              {this.props.postData.companyName.length > 0 && (
                <QuestionsAskedFor
                  companies={this.props.postData.companyName}
                />
              )}
              <UserProfile postData={this.props.postData} />
              <QuestionAndDescription
                title={this.props.postData.title}
                metaDescription={this.props.postData.metaDescription}
                description={this.props.postData.description}
                url={this.props.postData.url}
              />
              <UserReactions url={this.props.postData.url} />
              <Divider className="m0" />
              <PostReactions
                tags={this.props.postData.tags}
                likeCount={this.props.postData.likeCount}
                aViewContent={this.props.postData.AviewContent}
                viewCount={this.props.postData.viewCount}
                commentCount={this.props.postData.commentCount}
              ></PostReactions>
            </div>
          )}
        </PostCard>
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

export default connect(
  mapStateToProps,
  null
)(Post);
