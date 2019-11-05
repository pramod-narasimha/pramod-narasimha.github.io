import styled from "styled-components";

export const Tags = styled.span`
  background: #EBF4FF;
	color: #5F748C;
	font-size: 12px;
	font-weight: 500;
	letter-spacing: -0.23px;
  line-height: 16px;
  padding: 5px;
  border-radius: 1px;
}
`;

export const CountFont = styled.span`
	font-size: 12px;
	font-weight: 500;
	letter-spacing: -0.2px;
  line-height: 15px;
  position: relative;
  top: -4px;

`;

export const LikeCountText = styled(CountFont)`
  color: #5187CE;
`
export const HeartCountText = styled(CountFont)`
  color: #E4421C;
`
export const ClapCountText = styled(CountFont)`
  color: #71A954;
`
export const CommentCountText = styled(CountFont)`
  color: #2477EA;
`

export const FlexContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  @media(min-width: 320px){
    width: 31vw;
  }
  @media(min-width: 400px){
    width: 38vw
  }
  @media(min-width: 450px){
    width: 44vw
  }
  @media (min-width: 500px) {
      width: 250px;
  }
`;

export const FlexContainerSubDiv = styled.div`
  text-align: center;
  line-height: 30px;
`;
