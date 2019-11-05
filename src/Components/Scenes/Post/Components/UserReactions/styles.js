import styled from "styled-components";
import { Icon } from "antd";

export const HelpfullText = styled.span`
  color: #23a263;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.2px;
  line-height: 15px;
`;

export const HelpfullTextOuterSpan = styled.span`
  background: ${props =>
    props.isLiked? "#EBFFF5" : "transparent"};
`
export const AnswerText = styled.span`
  color: #006aff;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.2px;
  line-height: 15px;
`;

export const MoreSymbolIcon = styled(Icon)`
&&&{
  position: relative;
  top: -4px;
}
`;
