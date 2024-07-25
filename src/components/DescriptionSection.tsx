import styled from "styled-components";
import { colorTheme } from "../styles/ThemeStyled";

export const DescriptionSection = styled.p`
  font-size: 15px;
  color: ${colorTheme.colors.grey.dark};
  display: flex;
  text-align: center;
  margin: 30px auto 50px;
  font-weight: 400;
  max-width: 438px;
  line-height: 1.3;
  text-transform: capitalize;
`;
