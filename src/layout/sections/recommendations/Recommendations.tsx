import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { DescriptionSection } from "../../../components/DescriptionSection";
import { TitleSection } from "../../../components/TitleSection";
import { Koment } from "./koment/Koment";
import { myTheme } from "../../../styles/ThemeStyled";
import "../../../styles/slider.css";

import profile1 from "../../../assets/images/profile1.jpg";
import profile2 from "../../../assets/images/profile2.jpg";
import profile3 from "../../../assets/images/profile3.jpg";

const responsive = {
  0: { items: 1 },
  665: { items: 2 },
  1000: { items: 3 },
};

const items = [
  <Koment
    title="Great Quality!"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."
    nameProfile="James Gouse"
    professionProfile="Graphic Designer"
    profImg={profile1}
  />,
  <Koment
    title="Amazing work!"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."
    nameProfile="Tiana Philips"
    professionProfile="Photographer"
    profImg={profile2}
  />,
  <Koment
    title="Great Quality!"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."
    nameProfile="Talan Westervelt"
    professionProfile="Business man"
    profImg={profile3}
  />,
  <Koment
    title="Great Quality!"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."
    nameProfile="James Gouse"
    professionProfile="Graphic Designer"
    profImg={profile1}
  />,
  <Koment
    title="Amazing work!"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."
    nameProfile="Tiana Philips"
    professionProfile="Photographer"
    profImg={profile2}
  />,
  <Koment
    title="Great Quality!"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."
    nameProfile="Talan Westervelt"
    professionProfile="Business man"
    profImg={profile3}
  />,
  <Koment
    title="Great Quality!"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."
    nameProfile="James Gouse"
    professionProfile="Graphic Designer"
    profImg={profile1}
  />,
  <Koment
    title="Amazing work!"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."
    nameProfile="Tiana Philips"
    professionProfile="Photographer"
    profImg={profile2}
  />,
];

export const Recommendations = () => (
  <RecommendationsStyled>
    <FlexWrapper direction="column" align="center">
      <TitleSection>Recommendations</TitleSection>
      <DescriptionSection>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </DescriptionSection>
      <FlexWrapper justify="space-between" width="100%" wrap="wrap" gap="27px">
        <AliceCarousel mouseTracking items={items} responsive={responsive} />
      </FlexWrapper>
    </FlexWrapper>
  </RecommendationsStyled>
);
const RecommendationsStyled = styled.section``;
