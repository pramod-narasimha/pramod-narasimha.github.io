import React from "react";
import { Comment, Avatar, List, Input, Icon, Switch } from "antd";
import moment from "moment";

import ImageUpload from "./Components/ImageUpload/ImageUpload";
import FileUpload from "./Components/FileUpload/FileUpload";
import {
  CommentFormItem,
  PostComment,
  ProfileFormItem,
  SubmitFormItem,
  PostAnonymouslyText,
  CompanyName,
  ProfileName,
  SubmitButton
} from "./styles";
import userProfile from "../../../assets/images/user_profile.png";
import VerifiedIcon from "../../../assets/SVGs/VerifiedIcon";
const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <ProfileFormItem className="pb1">
      <Avatar src={userProfile} />
      <ProfileName className="pl1 pr1">Arun A</ProfileName>
      <CompanyName className="pr1">&middot; Accenture</CompanyName>
      <span>
        <Icon component={VerifiedIcon} />
      </span>
      <span className="pr1 right">
        <Switch size="small" />
      </span>
      <PostAnonymouslyText className="pr1 right">
        Post Anonymoustly
      </PostAnonymouslyText>
    </ProfileFormItem>
    <CommentFormItem>
      <TextArea
        placeholder="Post Your Answer"
        rows={4}
        onChange={onChange}
        value={value}
      />
    </CommentFormItem>
    <SubmitFormItem>
      <span className="pl1">
        <SubmitButton
          htmlType="submit"
          loading={submitting}
          onClick={onSubmit}
          type="primary"
        >
          Submit
        </SubmitButton>
      </span>
      <span className="pr2 right">
        <FileUpload />
      </span>
      <span className="pr2 right">
        <ImageUpload />
      </span>
    </SubmitFormItem>
  </div>
);

class AddComment extends React.Component {
  state = {
    comments: [],
    submitting: false,
    value: ""
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: "",
        comments: [
          {
            author: (
              <span>
                <ProfileName className="pr1">Arun A</ProfileName>
                <CompanyName className="pr1">&middot; Accenture</CompanyName>
                <span>
                  <Icon component={VerifiedIcon} />
                </span>
              </span>
            ),
            avatar: userProfile,
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow()
          },
          ...this.state.comments
        ]
      });
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const { comments, submitting, value } = this.state;

    return (
      <div>
        {comments.length > 0 && <CommentList comments={comments} />}
        <PostComment
          className="pr1 pl1"
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </div>
    );
  }
}

export default AddComment;
