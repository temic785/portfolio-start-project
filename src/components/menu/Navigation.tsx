import React from "react";
import styled from "styled-components";
import { myTheme } from "../../styles/ThemeStyled";
import { Menu } from "./Menu";
import { Icon } from "../icon/icon";

const items = ["home", "services", "education", "portfolio", "blog", "contact"];

export const Navigation = () => {
  return (
    <StyledNavigation>
      <ButtonImg>
        <Icon
          iconId={"moon"}
          width={"25"}
          height={"25"}
          viewBox={"0 0 30 30"}
        />
      </ButtonImg>
      <Menu menuItems={items} />
    </StyledNavigation>
  );
};

const StyledNavigation = styled.div`
  background-color: ${myTheme.colors.grey.light};
  min-width: 108px;
  min-height: 1315px;
  position: fixed;
  right: 0px;
  z-index: 1;

  @media ${myTheme.media.tablet} {
    display: none;
  }
  @media ${myTheme.media.desktop.nav} {
    display: none;
  }
`;

const ButtonImg = styled.button`
  height: 30px;
  margin: 50px 40px 0 40px;
`;
