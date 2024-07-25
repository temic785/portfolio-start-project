import React from "react";
import styled from "styled-components";
import { StyledForms } from "./StyledForms";
import { TitleSection } from "../../../../components/TitleSection";
import { colorTheme } from "../../../../styles/ThemeStyled";
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
`;
