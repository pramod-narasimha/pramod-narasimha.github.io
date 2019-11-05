import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 564px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const FlexContainerSubDiv = styled.div`
  text-align: center;
  line-height: 30px;
`;
export const Tags = styled.span`
  color: #5f748c;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.25px;
  line-height: 16px;
  background: #d9eaff;
  padding: 0.3rem;
  border-radius: 2px;
`;

export const PostedIn = styled.span`
  color: #405980;
  font-size: 13px;
  letter-spacing: -0.21px;
  line-height: 16px;
`;
