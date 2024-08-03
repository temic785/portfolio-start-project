import React from "react";
import sidebarImg from "../../assets/images/profile.webp";
import styled from "styled-components";
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

export const Sidebar = () => {
  return (
    <StyledAside>
      <FlexWrapper direction="column" marg="0 45px 0 40px">
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
    </StyledAside>
  );
};
const StyledAside = styled.aside`
  background-color: ${myTheme.colors.grey.light};
  position: absolute;
  top: 0;
  left: 0;
  @media ${myTheme.media.desktop.aside} {
    display: none;
  }
  @media ${myTheme.media.tablet} {
    display: none;
  }
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
  z-index: 0;
  margin-bottom: 25px;

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
