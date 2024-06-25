import React from "react";
import styled from "styled-components";
import { TitleH4 } from "../../../components/TitleH4";
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
