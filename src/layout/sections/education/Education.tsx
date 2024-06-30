import React from "react";
import styled from "styled-components";
import { TitleSection } from "../../../components/TitleSection";
import { SpanSection } from "../../../components/SpanSection";
import { EducationPlace } from "./EducationPlace";

export const Education = () => {
  return (
    <EducationStyled>
      <TitleSection>Education</TitleSection>
      <SpanSection>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </SpanSection>
      <EducationPlace
        title="University of Toronto"
        student="Student"
        dateStudy="Jan 2014 - Dec 2016"
        certificate="Certificate of web training"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."
      />
      <EducationPlace
        title="Programming Course"
        student="Student"
        dateStudy="Jan 2016 - Dec 2021"
        certificate="Certificate of back training"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."
      />
      <EducationPlace
        title="Web developer courses"
        student="Student"
        dateStudy="Jan 2021 - Dec 2024"
        certificate="Certificate of web training"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."
      />
    </EducationStyled>
  );
};

export const EducationStyled = styled.section``;
