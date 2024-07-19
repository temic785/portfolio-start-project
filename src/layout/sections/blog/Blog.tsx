import React from "react";
import styled from "styled-components";
import { TitleSection } from "../../../components/TitleSection";
import { DescriptionSection } from "../../../components/DescriptionSection";
import { BlogCards } from "./blogCards/BlogCards";

export const Blog = () => {
  return (
    <BlogStyled>
      <TitleSection>Blog</TitleSection>
      <DescriptionSection>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </DescriptionSection>
      <BlogCards />
    </BlogStyled>
  );
};

const BlogStyled = styled.section``;
