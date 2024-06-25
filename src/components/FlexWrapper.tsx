import styled from "styled-components";

type FlexWrapper = {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  background?: string;
  width?: string;
  height?: string;
  marg?: string;
};

export const FlexWrapper = styled.div<FlexWrapper>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  background-color: ${(props) => props.background};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.marg};
`;
