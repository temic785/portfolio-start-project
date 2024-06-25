import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/icon";
import { TitleSection } from "../../../components/TitleSection";
import { Service } from "./service/Service";
import { colorTheme } from "../../../styles/ThemeStyled";
import { SpanSection } from "../../../components/SpanSection";

export const Services = () => {
  return (
    <ServicesSection>
      <TitleSection>My Services</TitleSection>
      <SpanSection>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </SpanSection>
      <FlexWrapper wrap="wrap" justify="center">
        <Service
          iconId="codding"
          title="web development"
          description="blog, e-commerce"
        />
        <Service
          iconId="illustration"
          title="uI/uX design"
          description="Mobile app, website design"
        />
        <Service
          iconId="microphone"
          title="sound design"
          description="Voice Over, Beat Making"
        />
        <Service
          iconId="gameDevelopment"
          title="game design"
          description="Character Design, Props & Objects"
        />
        <Service
          iconId="photographer"
          title="photography"
          description="portrait, product photography"
        />
        <Service
          iconId="ad"
          title="advertising"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vitae nulla diam in ac dictum a urna viverra morbi."
        />
      </FlexWrapper>
    </ServicesSection>
  );
};
const ServicesSection = styled.section`
  background-color: ${colorTheme.colors.grey.medium};
  min-height: 100vh;
  padding-top: 138px;
`;
