import { Input, Layout } from "antd";
import styled from "styled-components";

const { Header } = Layout;

export const InputSearchBar = styled(Input)`
  > .ant-input {
    box-sizing: border-box;
    height: 32px;
    width: 452px;
    border: 1px solid #b9cceb;
    border-radius: 3px;
    background-color: #ffffff;
  }
`;

export const WebViewHeaderWrapper = styled(Header)`
  &&&.ant-layout-header {
    padding: 0px;
    height: 50px;
    line-height: 0px;
  }
`;

export const FlexBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
`;

export const CompanyImageDiv = styled.div`
  text-align: left;
  width: 192px;
  line-height: 64px;
  margin-right: 24px;
`;

export const SearchBarWrapper = styled.div`
  text-align: center;
  width: 565px;
  line-height: 52px;
`;

export const ProfileImageWrapper = styled.div`
  text-align: right;
  width: 248px;
  line-height: 52px;
  margin-left: 24px;
`;
