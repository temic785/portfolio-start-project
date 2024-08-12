import React from "react";
import styled from "styled-components";
import { StyledForms } from "./StyledForms";
import { TitleSection } from "../../../../components/TitleSection";
import { myTheme } from "../../../../styles/ThemeStyled";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Contact } from "../contact/Contact";

export const YourInfo = () => {
  return (
    <YourInfoStyled>
      <StyledForms />
      <Contact />
    </YourInfoStyled>
  );
};
const YourInfoStyled = styled.section`
  display: flex;
  direction: column;
  width: 100%;
  gap: 30px;
  ${TitleSection} {
    font-size: 26px;
  }
`;
