import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";

export const About = () => {
  return (
    <StyledAbout>
      <AboutList>
        <AboutItem>
          <FlexWrapper justify="space-between">
            <AboutSpan>Age:</AboutSpan>
            <AboutSpan>24</AboutSpan>
          </FlexWrapper>
          <FlexWrapper justify="space-between">
            <AboutSpan>Residence:</AboutSpan>
            <AboutSpan>BD</AboutSpan>
          </FlexWrapper>
          <FlexWrapper justify="space-between">
            <AboutSpan>Freelance:</AboutSpan>
            <AboutSpan>Available</AboutSpan>
          </FlexWrapper>
          <FlexWrapper justify="space-between">
            <AboutSpan>Address:</AboutSpan>
            <AboutSpan>Dhaka,Bangladesh</AboutSpan>
          </FlexWrapper>
        </AboutItem>
      </AboutList>
    </StyledAbout>
  );
};

const StyledAbout = styled.div``;

const AboutList = styled.ul``;

const AboutItem = styled.li``;

const AboutSpan = styled.span``;
