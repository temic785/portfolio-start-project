import React from "react";
import sidebarImg from "../../assets/images/profile.webp";
import styled from "styled-components";
import { colorTheme } from "../../styles/ThemeStyled";
import { StyledImage } from "../../components/StyledImage.styled";
import { TitleH4 } from "../../components/TitleH4";
import { TitleP } from "../../components/TitleP";
import { FlexWrapper } from "../../components/FlexWrapper";
import { ListSocial } from "./ListSocial";
import { About } from "./About";
import { ExtraSkills } from "./extraSkills/ExtraSkills";

export const Sidebar = () => {
  return (
    <StyledAside>
      <FlexWrapper direction="column" marg="0 45px 0 40px">
        <StyledImage
          src={sidebarImg}
          width="150"
          height="150"
          alt="My phototo"
        />
        <TitleH4>Rayan Adlardard</TitleH4>
        <TitleP>Font-end Developer</TitleP>
        <ListSocial />
        <About />
        <TitleH4>Extra Skills</TitleH4>
        <ExtraSkills />
        <StyledButtonCV type={"submit"}>Download cv</StyledButtonCV>
      </FlexWrapper>
    </StyledAside>
  );
};
const StyledAside = styled.aside`
  background-color: ${colorTheme.colors.grey.light};
  min-width: 305px;
  height: 1315px;
`;
const StyledButtonCV = styled.button``;
