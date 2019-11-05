import React from "react";
import MediaQuery from "react-responsive";
import UserReactionWebView from "./UserReactionsWebView/UserReactionWebView";
import UserReactionMobileView from "./UserReactionMobileView/UserReactionMobileView";

class UserReactions extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery query={"(min-width: 564px)"}>
          <UserReactionWebView url={this.props.url}/>
        </MediaQuery>
        <MediaQuery query={"(max-width: 563px)"}>
          <UserReactionMobileView url={this.props.url}/>
        </MediaQuery>
      </div>
    );
  }
}

export default UserReactions;
