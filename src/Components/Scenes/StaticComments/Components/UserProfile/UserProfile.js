import React from "react";
import { List, Icon } from "antd";
import { ProfilePicture, UserName, UserCompany, AskedOn } from "./styles";
import VerifiedIcon from "../../../../../assets/SVGs/VerifiedIcon";
import userProfile from "../../../../../assets/images/user_profile.png";

class UserProfile extends React.Component {
  render() {
    return (
      <List
        dataSource={[
          {
            name: "foody"
          }
        ]}
        renderItem={item => (
          <List.Item extra={<AskedOn>{"Answered 13 hrs ago"}</AskedOn>}>
            <List.Item.Meta
              avatar={<ProfilePicture src={userProfile} />}
              title={
                <span>
                  <span className="pr1">
                    <UserName>{"foody"}</UserName>
                  </span>
                    <span>
                      <Icon component={VerifiedIcon} />
                    </span>
                </span>
              }
              description={<UserCompany>"Microsoft"</UserCompany>}
            />
          </List.Item>
        )}
      />
    );
  }
}

export default UserProfile;
