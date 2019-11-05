import React from "react";
import { List, Icon } from "antd";
import { postedTime } from "../PostedTime/PostedTime";
import { ProfilePicture, UserName, UserCompany } from "./styles";
import VerifiedIcon from "../../../../../assets/SVGs/VerifiedIcon";

class UserProfile extends React.Component {
  render() {
    return (
      <List
        dataSource={[
          {
            name: this.props.postData.userName
          }
        ]}
        renderItem={item => (
          <List.Item extra={postedTime(this.props.postData.createdDate)}>
            <List.Item.Meta
              avatar={<ProfilePicture src={this.props.postData.userImage} />}
              title={
                <span>
                  <span className="pr1">
                    <UserName>{this.props.postData.userName}</UserName>
                  </span>
                  {this.props.postData.userVerified && (
                    <span>
                      <Icon component={VerifiedIcon} />
                    </span>
                  )}
                </span>
              }
              description={<UserCompany>Intel</UserCompany>}
            />
          </List.Item>
        )}
      />
    );
  }
}

export default UserProfile;
