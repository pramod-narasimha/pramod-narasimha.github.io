import { Avatar } from "antd";
import styled from "styled-components";

export const ProfilePicture = styled(Avatar)`
  &&& {
    height: 40px;
    width: 40px;
  }
`;
export const UserName = styled.span`
  color: #333333;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.03px;
`;

export const UserCompany = styled.span`
	color: #5F748C;
	font-size: 13px;
	font-weight: 500;
	letter-spacing: -0.03px;
}
`;
