import styled from "styled-components";
import { TitleSection } from "../../../components/TitleSection";
import { DescriptionSection } from "../../../components/DescriptionSection";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Card } from "./Card";
import { myTheme } from "../../../styles/ThemeStyled";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../price/sliderPrice.css";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1400: { items: 3 },
};

const cardItems = [
  { icon: "check", span: "UI Design" },
  { icon: "check", span: "web development" },
  { icon: "cross", span: "logo design" },
  { icon: "cross", span: "seo optimization" },
  { icon: "cross", span: "wordPress integration" },
  { icon: "cross", span: "5 Websites" },
  { icon: "cross", span: "unlimited user" },
  { icon: "cross", span: "20 gB bandwith" },
];

const cardItems2 = [
  { icon: "check", span: "UI Design" },
  { icon: "check", span: "web development" },
  { icon: "check", span: "logo design" },
  { icon: "check", span: "seo optimization" },
  { icon: "cross", span: "wordPress integration" },
  { icon: "cross", span: "5 Websites" },
  { icon: "cross", span: "unlimited user" },
  { icon: "cross", span: "20 gB bandwith" },
];
const cardItems3 = [
  { icon: "check", span: "UI Design" },
  { icon: "check", span: "web development" },
  { icon: "check", span: "logo design" },
  { icon: "check", span: "seo optimization" },
  { icon: "check", span: "wordPress integration" },
  { icon: "check", span: "5 Websites" },
  { icon: "check", span: "unlimited user" },
  { icon: "check", span: "20 gB bandwith" },
];

const items = [
  <Card
    title="Silver"
    price="0.00"
    description="For most businesses that want to optimize web queries"
    menuCardItems={cardItems}
  />,
  <Card
    title="Gold"
    price="50.00"
    description="For most businesses that want to optimize web queries"
    myBtnType={myTheme.colors.primary}
    menuCardItems={cardItems2}
    mostPop="Most Popular"
  />,
  <Card
    title="Dimond"
    price="80.00"
    description="For most businesses that want to optimize web queries"
    menuCardItems={cardItems3}
  />,
];

export const PricePlans = () => {
  return (
    <StyledPrice>
      <FlexWrapper direction="column" align="center">
        <TitleSection>Price plans</TitleSection>
        <DescriptionSection>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </DescriptionSection>
        <FlexWrapper
          className="cards"
          justify="space-between"
          width="100%"
          wrap="wrap"
          gap="20px"
        >
          <Card
            title="Silver"
            price="0.00"
            description="For most businesses that want to optimize web queries"
            menuCardItems={cardItems}
          />
          <Card
            title="Gold"
            price="50.00"
            description="For most businesses that want to optimize web queries"
            myBtnType={myTheme.colors.primary}
            menuCardItems={cardItems2}
            mostPop="Most Popular"
          />
          <Card
            title="Dimond"
            price="80.00"
            description="For most businesses that want to optimize web queries"
            menuCardItems={cardItems3}
          />
        </FlexWrapper>
        <StyledCarouselContainer>
          <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
          />
        </StyledCarouselContainer>
      </FlexWrapper>
    </StyledPrice>
  );
};
const StyledPrice = styled.section`
  .cards {
    @media ${myTheme.media.slider} {
      display: none;
    }
  }
`;
const StyledCarouselContainer = styled.div`
  width: 100%;
  display: none;
  @media ${myTheme.media.slider} {
    display: block;
  }
`;
