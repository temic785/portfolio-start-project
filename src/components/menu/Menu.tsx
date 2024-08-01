import React from "react";
import { Icon } from "../icon/icon";
import styled from "styled-components";
import { myTheme } from "../../styles/ThemeStyled";

export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenuNav>
      <ListStyled>
        {props.menuItems.map((item, index) => {
          return (
            <ElStyled key={index}>
              <LinkStyled href="#">
                <Icon
                  iconId={item}
                  width={"17px"}
                  height={"18px"}
                  viewBox={"0 0 17px 18px"}
                />
              </LinkStyled>
            </ElStyled>
          );
        })}
      </ListStyled>
    </StyledMenuNav>
  );
};
const StyledMenuNav = styled.nav`
  padding: 225px 40px 0 40px;
`;
const ListStyled = styled.ul``;
const ElStyled = styled.li`
  padding-bottom: 65px;
`;
const LinkStyled = styled.a`
  position: relative;
  z-index: 0;
  &:hover::before {
    background-color: ${myTheme.colors.primary};
  }
  &::before {
    content: "";
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${myTheme.colors.grey.medium};

    position: absolute;
    z-index: -1;
    left: 50%;
    top: 35%;
    transform: translate(-50%, -50%);
  }
`;
