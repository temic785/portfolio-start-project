import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { TitleP } from "../../../components/TitleP";
import styled from "styled-components";
import { colorTheme } from "../../../styles/ThemeStyled";
import { SomeText } from "../../../components/SomeText";

type EducationPlacePropsType = {
  title?: string;
  student: string;
  dateStudy: string;
  certificate: string;
  description: string;
};

export const EducationPlace = (props: EducationPlacePropsType) => {
  return (
    <EducationPlaceStyled>
      <FlexWrapper
        background={colorTheme.colors.grey.light}
        pad="45px 0 0 35px"
        gap="185px"
        justify="space-between"
      >
        <FlexWrapper direction="column">
          <ImportantName title="">{props.title}</ImportantName>
          <FlexWrapper justify="space-between" marg="25px 0 0 0" align="center">
            <Student>{props.student}</Student>
            <DateEducationStyled>{props.dateStudy} </DateEducationStyled>
          </FlexWrapper>
        </FlexWrapper>
        <CertificateList>
          <ImportantName> {props.certificate}</ImportantName>
          <SomeText>{props.description}</SomeText>
        </CertificateList>
      </FlexWrapper>
    </EducationPlaceStyled>
  );
};

const EducationPlaceStyled = styled.div`
  position: relative;
  z-index: 0;
  :not(:last-child) {
    &::before {
      content: "";
      display: inline-block;
      height: 1.5px;
      background-color: ${colorTheme.colors.grey.medium};

      position: absolute;
      bottom: 0;
      left: 35px;
      right: 35px;
    }
  }
`;
const ImportantName = styled.span`
  font-size: 18px;
  font-weight: 500;
  min-width: 185px;
`;

const DateEducationStyled = styled.span`
  background-color: ${colorTheme.colors.primary};
  color: ${colorTheme.colors.white};
  font-size: 10px;
  padding: 4px 7px;
`;
const Student = styled.span``;
const CertificateList = styled.div`
  display: flex;
  flex-direction: column;
  ${SomeText} {
    padding: 28px 0 11px 0;
  }
  &:last-child {
    padding-bottom: 38px;
  }
`;
