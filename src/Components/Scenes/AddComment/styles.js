import { Layout, Form, Comment, Button } from "antd";
import styled from "styled-components";

const { Header } = Layout;

export const PostComment = styled(Comment)`
  &&& {
    background: #ebf4ff;
  }
  & > .ant-comment-inner {
    & > .ant-comment-avatar {
      display: none;
    }
  }
`;

export const CommonCommentFormItem = styled(Form.Item)`
  &&& {
    margin-bottom: 0px;
  }
`;

export const ProfileFormItem = styled(CommonCommentFormItem)`
  &&& {
  }
`;

export const CommentFormItem = styled(CommonCommentFormItem)`
  &&& {
    backgound: #ffff;
    border: 1px solid #bec5ca;
  }
`;

export const SubmitFormItem = styled(CommonCommentFormItem)`
  &&& {
    border: 1px solid #bec5ca;
    background: #f7f7f7;
    border-radius: 0 0 3px 3px;
    height: 41px;
  }
`;

export const MobileViewHeaderWrapper = styled(Header)`
  &&&.ant-layout-header {
    padding: 0px;
    height: auto;
    line-height: 0px;
  }
`;

export const PostAnonymouslyText = styled.span`
	color: #8294A5;
	font-size: 12px;
	letter-spacing: -0.23px;
}
`;

export const CompanyName = styled.span`
  color: #5f748c;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.03px;
`;

export const ProfileName = styled.span`
  color: #333333;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.03px;
`;

export const SubmitButton = styled(Button)`
  &&& {
    height: 28px;
    border-radius: 3px;
    color: #ffffff;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: -0.18px;
    text-align: center;
  }
`;
