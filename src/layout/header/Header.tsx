import React from "react";
import styled from "styled-components";
import { colorTheme } from "../../styles/ThemeStyled";
import { Menu } from "../../components/menu/Menu";

const items = ["home", "services", "education", "portfolio", "blog", "contact"];

export const Header = () => {
  return (
    <StyledHeader>
      <Menu menuItems={items} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: ${colorTheme.colors.grey.light};
  width: 108px;
  height: 1315px;
  display: flex;
  justify-content: center;
`;
