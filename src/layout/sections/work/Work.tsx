import React from "react";
import { EducationStyled } from "../education/Education";
import { TitleSection } from "../../../components/TitleSection";
import { SpanSection } from "../../../components/SpanSection";
import { EducationPlace } from "../education/EducationPlace";
import styled from "styled-components";

export const Work = () => {
  return (
    <EducationStyled>
      <TitleSection>Work History</TitleSection>
      <SpanSection>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </SpanSection>
      <EducationPlace
        title="Lead Web Designer"
        student="Student"
        dateStudy="Jan 1016 - Dec 2021"
        certificate="Certificate of web training"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."
      />

      <EducationPlace
        title="Junior Web Designer"
        student="Student"
        dateStudy="Jan 1016 - Dec 2021"
        certificate="Certificate of web training"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."
      />

      <EducationPlace
        title="Senior Web Designer"
        student="Student"
        dateStudy="Jan 1016 - Dec 2021"
        certificate="Certificate of web training"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."
      />
    </EducationStyled>
  );
};
