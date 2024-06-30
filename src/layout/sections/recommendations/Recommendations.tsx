import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SpanSection } from "../../../components/SpanSection";
import { TitleSection } from "../../../components/TitleSection";
import { Koment } from "./koment/Koment";
import { colorTheme } from "../../../styles/ThemeStyled";

export const Recommendations = () => {
  return (
    <RecommendationsStyled>
      <TitleSection>Recommendations</TitleSection>
      <SpanSection>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </SpanSection>
      <FlexWrapper>
        <Koment
          title="Great Quality!"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."
          nameProfile="James Gouse"
          professionProfile="Graphic Designer"
        />
        <Koment
          title="Amazing work!"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."
          nameProfile="Tiana Philips"
          professionProfile="Photographer"
        />
        <Koment
          title="Great Quality!"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."
          nameProfile="Talan Westervelt"
          professionProfile="Business man"
        />
      </FlexWrapper>
    </RecommendationsStyled>
  );
};

const RecommendationsStyled = styled.section``;
