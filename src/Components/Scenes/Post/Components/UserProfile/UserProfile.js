import React from "react";
import { List, Avatar } from "antd";
import { postedTime } from "../PostedTime/PostedTime";
import { ProfilePicture, UserName, UserCompany } from "./styles";

class UserProfile extends React.Component {
  render() {
    return (
      <List
        dataSource={[
          {
            name: "Lily"
          }
        ]}
        renderItem={item => (
          <List.Item extra={postedTime(this.props.postData.createdDate)}>
            <List.Item.Meta
              avatar={
                <ProfilePicture src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
              }
              title={<UserName>{this.props.postData.userName}</UserName>}
              description={<UserCompany>Intel</UserCompany>}
            />
          </List.Item>
        )}
      />
    );
  }
}

export default UserProfile;
