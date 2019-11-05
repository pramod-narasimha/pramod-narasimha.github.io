import React from "react";
import { connect } from "react-redux";
import { Divider } from "antd";
import QuestionAndDescription from "./Components/QuestionAndDescription/QuestionAndDescription";
import UserReactions from "./Components/UserReactions/UserReactions";
import PostReactions from "./Components/PostReactions/PostReactions";
import UserProfile from "./Components/UserProfile/UserProfile";

import { PostCard } from "./styles";
import GlobalErrorBoundary from "../../CommonComponents/ErrorBoundary/GlobalErrorHandler";

class StaticComment extends React.Component {
  render() {
    return (
      <GlobalErrorBoundary>
        <PostCard loading={this.props.isLoading}>
          <UserProfile />
          <QuestionAndDescription />
          <UserReactions />
          <Divider className="m0" />
          <PostReactions />
        </PostCard>
      </GlobalErrorBoundary>
    );
  }
}

const mapStateToProps = statef => {
  return {
    isLoading: statef.apiData.isLoading
  };
};

export default connect(
  mapStateToProps,
  null
)(StaticComment);
