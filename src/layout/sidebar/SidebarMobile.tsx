import React from "react";
import sidebarImg from "../../assets/images/profile.webp";
import styled, { css } from "styled-components";
import { myTheme } from "../../styles/ThemeStyled";
import { StyledImage } from "../../components/StyledImage.styled";
import { TitleP } from "../../components/TitleP";
import { FlexWrapper } from "../../components/FlexWrapper";
import { ListSocial } from "./ListSocial";
import { About } from "./About";
import { ExtraSkills } from "./extraSkills/ExtraSkills";
import { TitleBlock } from "../../components/TitleBlock";
import { SpanStyled } from "../../components/SpanStyled";
import { Languages } from "./Languages";

import DownloadImg from "../../assets/download.svg";

const items = [
  "facebook",
  "instagram",
  "twitter",
  "linkedIn",
  "youtube",
  "dribbble",
];

export const SidebarMobile = () => {
  return (
    <StyledAsideMobile>
      <BurgerButton isOpen={false}>
        <span></span>
      </BurgerButton>
      <MobileAsidePopup isOpen={false}>
        <FlexWrapper direction="column" marg="0 45px 0 40px" height="unset">
          <UserWrapper>
            <CircleWrapper>
              <StyledImage
                src={sidebarImg}
                width="150"
                height="150"
                alt="My phototo"
                bord="50%"
              />
            </CircleWrapper>

            <TitleBlock>Rayan Adlardard</TitleBlock>
            <SpanStyled>Font-end Developer</SpanStyled>
            <ListSocial menuItems={items} />
          </UserWrapper>
          <About />
          <Languages />
          <ExtraSkills />
          <StyledButtonCV type={"submit"}>Download cv</StyledButtonCV>
        </FlexWrapper>
      </MobileAsidePopup>
    </StyledAsideMobile>
  );
};
const StyledAsideMobile = styled.aside`
  display: none;
  background-color: ${myTheme.colors.grey.light};
  position: absolute;
  top: 0;
  left: 15px;

  @media ${myTheme.media.tablet} {
    display: block;
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: relative;
  left: 0px;
  top: 0px;
  width: 90px;
  height: 80px;
  z-index: 999999999;

  span {
    display: block;
    width: 30px;
    height: 2px;
    background-color: ${myTheme.colors.primary};
    position: absolute;
    left: 30px;
    top: 42px;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 180, 0, 0);
      `}

    &::before {
      content: "";
      display: block;
      width: 30px;
      height: 2px;
      background-color: ${myTheme.colors.primary};
      position: absolute;
      transform: translateY(-6px);
      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0);
        `}
    }
    &::after {
      content: "";
      display: block;
      width: 30px;
      height: 2px;
      background-color: ${myTheme.colors.primary};
      position: absolute;
      transform: translateY(6px);
      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
        `}
    }
  }
`;

const MobileAsidePopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99999;
  background-color: ${myTheme.colors.white};
  display: none;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      overflow-y: auto;
      display: block;
    `}
`;

const UserWrapper = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 15px;

  ${StyledImage} {
    padding-bottom: 15px;
  }
`;

const CircleWrapper = styled.div`
  position: relative;

  &::after {
    content: "";
    border-radius: 50%;
    width: 16px;
    height: 16px;
    background-color: #7eb942;

    position: absolute;
    right: 10px;
    bottom: 28px;
  }
`;

const StyledButtonCV = styled.button`
  position: relative;
  background-color: ${myTheme.colors.primary};
  min-height: 40px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 25px;
  z-index: 0;

  &::before {
    content: "";
    display: inline-block;
    height: 1.5px;
    background-color: ${myTheme.colors.grey.medium};

    position: absolute;
    top: -25px;
    left: 0;
    right: 0;
  }
  &::after {
    content: "";
    display: inline-block;
    background-image: url(${DownloadImg});
    background-size: cover;
    z-index: 1;
    width: 12px;
    height: 12px;

    position: absolute;
    top: 15px;
    right: 30px;
  }
`;
