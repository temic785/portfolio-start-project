import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { colorTheme } from "../../styles/ThemeStyled";
import { SpanStyled } from "../../components/SpanStyled";

export const About = () => {
  return (
    <StyledAbout>
      <FlexWrapper justify="space-between">
        <SpanStyled>Age: </SpanStyled>
        <SpanStyled>24</SpanStyled>
      </FlexWrapper>
      <FlexWrapper justify="space-between">
        <SpanStyled>Residence: </SpanStyled>
        <SpanStyled>BD</SpanStyled>
      </FlexWrapper>
      <FlexWrapper justify="space-between">
        <SpanStyled>Freelance: </SpanStyled>
        <SpanStyled>Available</SpanStyled>
      </FlexWrapper>
      <FlexWrapper justify="space-between">
        <SpanStyled>Address: </SpanStyled>
        <SpanStyled>Dhaka,Bangladesh</SpanStyled>
      </FlexWrapper>
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  padding-top: 50px;

  position: relative;
  &::before {
    content: "";
    display: inline-block;
    height: 1.5px;
    background-color: ${colorTheme.colors.grey.medium};

    position: absolute;
    top: 25px;
    left: 0;
    right: 0;
  }

  ${SpanStyled} {
    color: ${colorTheme.colors.secondary};
    padding: 0 5px;
    :nth-child(odd) {
      background-color: ${colorTheme.colors.primary};
      line-height: 1.7em;
    }
  }
  ${FlexWrapper} {
    max-height: 25px;
    align-items: center;
    :not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

const AboutList = styled.ul``;

const AboutItem = styled.li``;

const AboutSpan = styled.span``;
