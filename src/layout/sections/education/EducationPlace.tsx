import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { TitleP } from "../../../components/TitleP";
import styled from "styled-components";
import { myTheme } from "../../../styles/ThemeStyled";
import { SomeText } from "../../../components/SomeText";
import { font } from "../../../styles/Common";

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
        className="first"
        background={myTheme.colors.grey.light}
        pad="45px 30px 0 35px"
        gap="170px"
        justify="space-between"
      >
        <FlexWrapper className="second" direction="column">
          <ImportantName>{props.title}</ImportantName>
          <FlexWrapper
            className="third"
            justify="space-between"
            marg="25px 0 0 0"
            align="center"
          >
            <Student>{props.student}</Student>
            <DateEducationStyled>{props.dateStudy} </DateEducationStyled>
          </FlexWrapper>
        </FlexWrapper>
        <CertificateList>
          <ImportantName className="adaptiveFont">
            {props.certificate}
          </ImportantName>
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
      background-color: ${myTheme.colors.grey.medium};

      position: absolute;
      bottom: 0;
      left: 35px;
      right: 35px;
    }
  }

  .first {
    @media ${myTheme.media.tablet} {
      flex-direction: column;
      gap: 0px;
      padding: 30px 32px 0 35px;
    }
  }
  .second {
    width: 189px;
    margin-bottom: 25px;
  }
  .third {
    @media ${myTheme.media.tablet} {
      margin-top: 12px;
    }
  }
`;
const ImportantName = styled.span`
  font-size: 18px;
  font-weight: 500;
  min-width: 185px;
  \ &.adaptiveFont {
    @media ${myTheme.media.mobile} {
    }
  }
`;

const DateEducationStyled = styled.span`
  background-color: ${myTheme.colors.primary};
  color: ${myTheme.colors.white};
  font-size: 10px;
  padding: 4px 7px;
`;
const Student = styled.span``;
const CertificateList = styled.div`
  display: flex;
  flex-direction: column;
  ${SomeText} {
    padding-top: 28px;

    @media ${myTheme.media.mobile} {
      padding-top: 10px;
    }
  }
  &:last-child {
    padding-bottom: 38px;
    @media ${myTheme.media.mobile} {
      padding-bottom: 30px;
    }
  }
`;
