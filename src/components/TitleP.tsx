import styled from "styled-components";
type TitlePPropsType = {
  align?: string;
};

export const TitleP = styled.p<TitlePPropsType>`
  font-size: 15px;
  color: #767676;
  max-width: 248px;
  text-align: ${(props) => props.align || "start"};
`;
