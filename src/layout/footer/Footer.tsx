import React from "react";
import styled from "styled-components";
import { colorTheme } from "../../styles/ThemeStyled";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledSmall>© 2024 All Rights Reserved.Ojjomedia</StyledSmall>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${colorTheme.colors.white};
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledSmall = styled.small`
  color: ${colorTheme.colors.secondary};
  font-size: 15px;
  font-weight: 400;
  text-transform: capitalize;
`;
