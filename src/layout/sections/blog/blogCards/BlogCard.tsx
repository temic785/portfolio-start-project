import React from "react";
import { StyledImage } from "../../../../components/StyledImage.styled";
import mainImage from "../../../../assets/images/portfolio6.webp";
import styled from "styled-components";
import { TitleH4 } from "../../../../components/TitleH4";
import { TitleP } from "../../../../components/TitleP";
import { colorTheme } from "../../../../styles/ThemeStyled";

type BlogCardPropsType = {
  title: string;
  description: string;
};

export const BlogCard = (props: BlogCardPropsType) => {
  return (
    <BlogCardStyled>
      <StyledImage src={mainImage} width="310" height="300"></StyledImage>
      <TitleH4>{props.title}</TitleH4>
      <TitleP>{props.description}</TitleP>
      <button>Learn more</button>
    </BlogCardStyled>
  );
};
const BlogCardStyled = styled.div`
  width: 33%;
  max-width: 310px;
  min-height: 310px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${colorTheme.colors.while};
`;
