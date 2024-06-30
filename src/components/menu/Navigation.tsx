import React from "react";
import styled from "styled-components";
import { colorTheme } from "../../styles/ThemeStyled";
import { Menu } from "./Menu";

const items = ["home", "services", "education", "portfolio", "blog", "contact"];

export const Navigation = () => {
  return (
    <StyledNavigation>
      <Menu menuItems={items} />
    </StyledNavigation>
  );
};

const StyledNavigation = styled.div`
  background-color: ${colorTheme.colors.grey.light};
  width: 108px;
  min-height: 1315px;
  display: flex;
  justify-content: center;
  position: fixed;
  right: 0px;
`;
