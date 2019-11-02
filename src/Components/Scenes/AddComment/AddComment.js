import React from "react";
import { Comment, Avatar, Form, Button, List, Input, Icon, Switch } from "antd";
import moment from "moment";
import ImageUpload from "./Components/ImageUpload/ImageUpload";
import FileUpload from "./Components/FileUpload/FileUpload";

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
    <Form.Item>
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <span>Arun A</span>&middot;<span>Accenture</span>{" "}
      <span style={{ float: "right" }}>
        <Switch />
      </span>
      <span style={{ float: "right" }}>Post Anonymoustly</span>
    </Form.Item>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item style={{ border: "1px solid" }}>
      <span>
        <Button
          htmlType="submit"
          loading={submitting}
          onClick={onSubmit}
          type="primary"
        >
          Submit
        </Button>
      </span>
      <span style={{ float: "right" }}>
        <ImageUpload />
      </span>
      <span style={{ float: "right" }}>
        <FileUpload />
      </span>
    </Form.Item>
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
            author: "Han Solo",
            avatar:
              "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
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
        <Comment
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
