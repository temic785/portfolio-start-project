import React from "react";
import styled from "styled-components";
import { myTheme } from "../../styles/ThemeStyled";
import { Menu } from "./Menu";
import { Icon } from "../icon/icon";

const items = [
  "moon",
  "home",
  "services",
  "education",
  "portfolio",
  "blog",
  "contact",
];

export const Navigation = () => {
  return (
    <StyledNavigation>
      <Menu menuItems={items} />
    </StyledNavigation>
  );
};

const StyledNavigation = styled.div`
  background-color: ${myTheme.colors.grey.light};
  min-width: 108px;
  padding-top: 50px;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 1;

  @media ${myTheme.media.desktop.nav} {
    display: flex;
    align-items: center;
    bottom: 0px;
    top: unset;
    left: 0;
    padding: 0;
    height: 80px;
  }
`;
