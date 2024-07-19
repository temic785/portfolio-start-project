import React from "react";
import styled from "styled-components";
import { colorTheme } from "../../styles/ThemeStyled";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledSmall>© 2021 All Rights Reserved.Ojjomedia</StyledSmall>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${colorTheme.colors.white};
  min-height: 60px;
  text-align: center;
`;
const StyledSmall = styled.small``;
