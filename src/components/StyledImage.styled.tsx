import styled from "styled-components";

type StyledImagePropsType = {
  width: string;
  height: string;
};

export const StyledImage = styled.img<StyledImagePropsType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: cover;
`;
