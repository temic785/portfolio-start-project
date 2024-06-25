import React from "react";
import styled from "styled-components";
import { ExtraSkillsItem } from "./ExtraSkillsItem";

export const ExtraSkills = () => {
  return (
    <StyledExtraSkills>
      <ExtraSkillsList>
        <ExtraSkillsItem iconId="extra" description="Bootstrap, Materialize" />
        <ExtraSkillsItem iconId="extra" description="Stylus, Sass, Less" />
        <ExtraSkillsItem iconId="extra" description="Gulp, Webpack, Grunt" />
        <ExtraSkillsItem iconId="extra" description="GIT Knowledge" />
      </ExtraSkillsList>
    </StyledExtraSkills>
  );
};

const StyledExtraSkills = styled.div``;

const ExtraSkillsList = styled.ul``;
