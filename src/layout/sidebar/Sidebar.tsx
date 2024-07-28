import React from "react";
import sidebarImg from "../../assets/images/profile.webp";
import styled from "styled-components";
import { colorTheme } from "../../styles/ThemeStyled";
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
          <StyledImage
            src={sidebarImg}
            width="150"
            height="150"
            alt="My phototo"
            bord="50%"
          />
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
  background-color: ${colorTheme.colors.grey.light};
  height: 1315px;
  position: absolute;
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

const StyledButtonCV = styled.button`
  position: relative;
  background-color: ${colorTheme.colors.primary};
  min-height: 40px;
  font-size: 14px;
  font-weight: 600;
  z-index: 0;

  &::before {
    content: "";
    display: inline-block;
    height: 1.5px;
    background-color: ${colorTheme.colors.grey.medium};

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
