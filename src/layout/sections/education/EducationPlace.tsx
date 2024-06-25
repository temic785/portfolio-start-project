import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { TitleH4 } from "../../../components/TitleH4";
import { TitleP } from "../../../components/TitleP";
import { SpanSection } from "../../../components/SpanSection";
import { DateEducationStyled } from "../../../components/DateEducation";
import styled from "styled-components";
import { colorTheme } from "../../../styles/ThemeStyled";

type EducationPlacePropsType = {
  title: string;
  student: string;
  dateStudy: string;
  certificate: string;
  description: string;
};

export const EducationPlace = (props: EducationPlacePropsType) => {
  return (
    <FlexWrapper
      justify="space-around"
      background={colorTheme.colors.grey.light}
    >
      <FlexWrapper direction="column">
        <TitleH4 title="">{props.title}</TitleH4>
        <FlexWrapper>
          <SpanSection>{props.student}</SpanSection>
          <DateEducationStyled>{props.dateStudy} </DateEducationStyled>
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper direction="column">
        <TitleH4> {props.certificate}</TitleH4>
        <TitleP>{props.description}</TitleP>
      </FlexWrapper>
    </FlexWrapper>
  );
};
const EducationPlaceStyled = styled.div`
  background-color: ${colorTheme.colors.grey.light};
`;
