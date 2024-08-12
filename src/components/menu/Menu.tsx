import React from "react";
import { Icon } from "../icon/icon";
import styled from "styled-components";
import { myTheme } from "../../styles/ThemeStyled";

export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenuNav>
      <ListStyled>
        {props.menuItems.map((item, index) => (
          <ElStyled key={index} isFirst={index === 0}>
            <LinkStyled href="#" iconId={item}>
              <Icon
                iconId={item}
                width={"17px"}
                height={"18px"}
                viewBox={"0 0 17px 18px"}
              />
            </LinkStyled>
          </ElStyled>
        ))}
      </ListStyled>
    </StyledMenuNav>
  );
};

const StyledMenuNav = styled.nav`
  max-height: 600px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ListStyled = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 42px;
  @media ${myTheme.media.desktop.nav} {
    flex-direction: row;
  }
  @media ${myTheme.media.tablet} {
    gap: 0;
    justify-content: space-between;
    max-width: 520px;
    width: 100%;
    padding: 0 15px;
  }
`;

const ElStyled = styled.li<{ isFirst: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  &:first-of-type {
    /* margin: 0 auto; */

    margin-bottom: 107px;
    @media ${myTheme.media.desktop.nav} {
      margin-bottom: 0;
    }
  }
  & > a {
    border-radius: ${(props) => (props.isFirst ? "50%" : "40px")};
    width: ${(props) => (props.isFirst ? "25px" : "40px")};
    height: ${(props) => (props.isFirst ? "25px" : "40px")};
    background-color: ${(props) => (props.isFirst ? "transparent" : "40px")};

    &:hover {
      background-color: ${(props) =>
        props.isFirst ? "transparent" : myTheme.colors.primary};
    }
  }
`;

const LinkStyled = styled.a<{ iconId: string }>`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${myTheme.colors.grey.medium};

  &:hover {
    background-color: ${myTheme.colors.primary};
  }

  svg {
    ${(props) =>
      props.iconId === "moon" &&
      `
      width: 25px; 
      height: 25px; 

      `}
  }
`;
