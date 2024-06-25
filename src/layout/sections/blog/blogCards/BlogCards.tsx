import React from "react";
import styled from "styled-components";
import { BlogCard } from "./BlogCard";
import { colorTheme } from "../../../../styles/ThemeStyled";
import { FlexWrapper } from "../../../../components/FlexWrapper";

export const BlogCards = () => {
  return (
    <BlogCardsStyled>
      <FlexWrapper wrap="wrap" justify="center">
        <BlogCard
          title="How to make web tempates"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna "
        />
        <BlogCard
          title="make Business card"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna "
        />
        <BlogCard
          title="How to make Flyer Design"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna "
        />
      </FlexWrapper>
    </BlogCardsStyled>
  );
};

const BlogCardsStyled = styled.div``;
