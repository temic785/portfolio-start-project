import React from "react";
import styled from "styled-components";
import { TitleSection } from "../../components/TitleSection";
import { myTheme } from "../../styles/ThemeStyled";
import { FlexWrapper } from "../../components/FlexWrapper";
import { SpanStyled } from "../../components/SpanStyled";
import { ProgressBar } from "./ProgressBar";

export const Languages = () => {
  return (
    <LanguagesStyled>
      <LineBlock>
        <TitleSection>Languages</TitleSection>
      </LineBlock>
      <ProgressBar langName="Bangla" percent="100%" />
      <ProgressBar langName="English" percent="80%" />
      <ProgressBar langName="Spanish" percent="60%" />
      <LineBlock>
        <TitleSection>Skills</TitleSection>{" "}
      </LineBlock>
      <ProgressBar langName="Html" percent="90%" />
      <ProgressBar langName="CSS" percent="85%" />
      <ProgressBar langName="Js" percent="80%" />
      <ProgressBar langName="PHP" percent="75%" />
      <ProgressBar langName="WordPress" percent="85%" />
    </LanguagesStyled>
  );
};
const LanguagesStyled = styled.div`
  ${TitleSection} {
    padding-top: 50px;
    font-size: 18px;
    font-weight: 500;
    text-align: start;
  }
`;
const LineBlock = styled.div`
  position: relative;
  &::before {
    content: "";
    display: inline-block;
    height: 1.5px;
    background-color: ${myTheme.colors.grey.medium};

    position: absolute;
    top: 25px;
    left: 0;
    right: 0;
  }
`;
