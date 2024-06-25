import styled from "styled-components";
import { colorTheme } from "../../../../styles/ThemeStyled";

export const StyledService = styled.div`
  width: 33%;
  background-color: ${colorTheme.colors.grey.light};
  max-width: 310px;
  min-height: 225px;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
