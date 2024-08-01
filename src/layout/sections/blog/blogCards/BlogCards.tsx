import React from "react";
import styled from "styled-components";
import { BlogCard } from "./BlogCard";
import { myTheme } from "../../../../styles/ThemeStyled";
import { FlexWrapper } from "../../../../components/FlexWrapper";

import cardPort1 from "../../../../assets/images/portfolio1.webp";
import cardPort2 from "../../../../assets/images/portfolio2.webp";
import cardPort3 from "../../../../assets/images/portfolio3.webp";

export const BlogCards = () => {
  return (
    <BlogCardsStyled>
      <FlexWrapper wrap="wrap" gap="20px">
        <BlogCard
          srcImg={cardPort1}
          title="How to make web tempates"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna "
        />
        <BlogCard
          srcImg={cardPort2}
          title="make Business card"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna "
        />
        <BlogCard
          srcImg={cardPort3}
          title="How to make Flyer Design"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna "
        />
      </FlexWrapper>
    </BlogCardsStyled>
  );
};

const BlogCardsStyled = styled.div``;
