import { Layout, Row } from "antd";
import styled from "styled-components";

const { Header } = Layout;

export const MobileViewHeaderRow = styled(Row)`
  &&& {
    background: #fff;
  }
`;

export const MobileViewHeaderWrapper = styled(Header)`
  &&&.ant-layout-header {
    padding: 0px;
    height: auto;
    line-height: 0px;
  }
`;
