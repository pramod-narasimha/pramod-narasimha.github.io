import { Row } from "antd";
import styled from "styled-components";

export const FilterRow = styled(Row)`
    &&&{
        margin-bottom: 6px;
    }
`
export const SelectedRow = styled(FilterRow)`
  box-sizing: border-box;
  height: 33px !important;
  width: 193px;
  border: 1px solid #e1e6ed;
  border-radius: 3px;
  background-color: #ffff;
  line-height: 34px;
`;

export const FilterWebViewDiv = styled.div`
  &>.ant-row {
    margin-bottom: 6px;
  }
`;

export const HushFeed = styled.span`
  color: #5f748c;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: -0.12px;
  line-height: 12px;
  text-transform: capitalize;
`;

export const PopularText = styled.span`
  color: #405980;
  font-size: 13px;
  letter-spacing: -0.23px;
  line-height: 16px;
`;

export const Home = styled.span`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.32px;
  line-height: 16px;
`;

export const GoToFeed = styled.span`
	color: #5F748C;
	font-size: 14px;
	font-weight: 500;
	letter-spacing: -0.32px;
	line-height: 16px;
}
`
