import React from "react";
import styled from "styled-components";
import { ExtraSkillsItem } from "./ExtraSkillsItem";
import { TitleSection } from "../../../components/TitleSection";
import { colorTheme } from "../../../styles/ThemeStyled";

export const ExtraSkills = () => {
  return (
    <StyledExtraSkills>
      <TitleSection>Extra Skills</TitleSection>

      <ExtraSkillsList>
        <ExtraSkillsItem iconId="extra" description="Bootstrap, Materialize" />
        <ExtraSkillsItem iconId="extra" description="Stylus, Sass, Less" />
        <ExtraSkillsItem iconId="extra" description="Gulp, Webpack, Grunt" />
        <ExtraSkillsItem iconId="extra" description="GIT Knowledge" />
      </ExtraSkillsList>
    </StyledExtraSkills>
  );
};

const StyledExtraSkills = styled.div`
  position: relative;
  padding-bottom: 50px;

  &::before {
    content: "";
    display: inline-block;
    height: 1.5px;
    background-color: ${colorTheme.colors.grey.medium};

    position: absolute;
    top: 25px;
    left: 0;
    right: 0;
  }
  ${TitleSection} {
    padding-top: 50px;
    font-size: 18px;
    font-weight: 500;
    text-align: start;
  }
`;

const ExtraSkillsList = styled.ul``;
