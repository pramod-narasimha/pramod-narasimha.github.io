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
  background: ${props => (props.isLiked ? "#EBFFF5" : "transparent")};
  padding: 0.3rem;
  border-radius: 3px;
`;
export const AnswerText = styled.span`
  color: #495057;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.2px;
  line-height: 15px;
`;

export const MoreSymbolIcon = styled(Icon)`
  &&& {
    position: relative;
    top: -4px;
  }
`;
