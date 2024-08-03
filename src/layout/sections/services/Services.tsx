import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/icon";
import { TitleSection } from "../../../components/TitleSection";
import { Service } from "./service/Service";
import { myTheme } from "../../../styles/ThemeStyled";
import { DescriptionSection } from "../../../components/DescriptionSection";

export const Services = () => {
  return (
    <StyledServices>
      <FlexWrapper direction="column" align="center">
        <TitleSection>My Services</TitleSection>
        <DescriptionSection>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </DescriptionSection>
        <FlexWrapper wrap="wrap" justify="space-between" gap="20px">
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
      </FlexWrapper>
    </StyledServices>
  );
};
const StyledServices = styled.section`
  background-color: ${myTheme.colors.grey.medium};
  padding: 140px 0 0 0;
  @media ${myTheme.media.mobile} {
    padding-top: 85px;
  }
`;
