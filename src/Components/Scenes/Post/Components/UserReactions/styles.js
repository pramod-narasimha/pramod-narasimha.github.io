import styled from "styled-components";
import { Tooltip } from "antd";

export const HelpfullText = styled.span`
  color: #23a263;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.2px;
  line-height: 15px;
`;

export const AnswerText = styled.span`
  color: #006aff;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.2px;
  line-height: 15px;
`;

export const UserReactionTooltip = styled(Tooltip)`
&&&{
  >.ant-tooltip-inner {
    color: yellow;
    background-color: green;
  }
  
  >.ant-tooltip-placement-bottom .ant-tooltip-arrow, .ant-tooltip-placement-bottomLeft .ant-tooltip-arrow, .ant-tooltip-placement-bottomRight .ant-tooltip-arrow {
    border-bottom-color: green;
  }
}


`;
