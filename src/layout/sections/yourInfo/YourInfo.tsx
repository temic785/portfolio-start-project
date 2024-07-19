import React from "react";
import styled from "styled-components";
import { TitleSection } from "../../../components/TitleSection";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledForms } from "./StyledForms";

export const YourInfo = () => {
  return (
    <YourInfoStyled>
      <TitleSection>Leave us your info</TitleSection>
      <StyledForms />
    </YourInfoStyled>
  );
};
const YourInfoStyled = styled.section``;
