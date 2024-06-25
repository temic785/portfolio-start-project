import React from "react";
import styled from "styled-components";
import { TitleSection } from "../../../components/TitleSection";
import { SpanSection } from "../../../components/SpanSection";
import { BlogCards } from "./blogCards/BlogCards";

export const Blog = () => {
  return (
    <BlogStyled>
      <TitleSection>Blog</TitleSection>
      <SpanSection>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </SpanSection>
      <BlogCards />
    </BlogStyled>
  );
};

const BlogStyled = styled.section`
  min-height: 50vh;
`;
