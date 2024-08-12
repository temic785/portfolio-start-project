import React from "react";
import styled from "styled-components";
import { TitleSection } from "../../../components/TitleSection";
import { DescriptionSection } from "../../../components/DescriptionSection";
import { BlogCards } from "./blogCards/BlogCards";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { BlogCard } from "./blogCards/BlogCard";

import cardPort1 from "../../../assets/images/portfolio1.webp";
import cardPort2 from "../../../assets/images/portfolio2.webp";
import cardPort3 from "../../../assets/images/portfolio3.webp";
import { myTheme } from "../../../styles/ThemeStyled";
const responsive = {
  0: { items: 1 },
  660: { items: 2 },
  1370: { items: 3 },
};

const items = [
  <BlogCard
    srcImg={cardPort1}
    title="How to make web tempates"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna "
  />,
  <BlogCard
    srcImg={cardPort2}
    title="make Business card"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna "
  />,
  <BlogCard
    srcImg={cardPort3}
    title="How to make Flyer Design"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna "
  />,
];

export const Blog = () => {
  return (
    <BlogStyled>
      <TitleSection>Blog</TitleSection>
      <DescriptionSection>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </DescriptionSection>
      <BlogCardsWrapper>
        <BlogCards />
      </BlogCardsWrapper>
      <StyledCarouselContainer>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
        />
      </StyledCarouselContainer>{" "}
    </BlogStyled>
  );
};

const BlogStyled = styled.section``;
const BlogCardsWrapper = styled.div`
  @media ${myTheme.media.slider} {
    display: none;
  }
`;

const StyledCarouselContainer = styled.div`
  width: 100%;
  display: none;
  @media ${myTheme.media.slider} {
    display: block;
  }
`;
