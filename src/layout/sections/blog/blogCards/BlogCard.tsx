import React from "react";
import { StyledImage } from "../../../../components/StyledImage.styled";
import mainImage from "../../../../assets/images/portfolio6.webp";
import styled from "styled-components";
import { TitleP } from "../../../../components/TitleP";
import { myTheme } from "../../../../styles/ThemeStyled";
import { TitleH3 } from "../../../../components/TitleH3";
import { MainButton } from "../../../../components/MainButton";

type BlogCardPropsType = {
  title: string;
  description: string;
  srcImg: string;
};

export const BlogCard = (props: BlogCardPropsType) => {
  return (
    <BlogCardStyled>
      <StyledImage src={props.srcImg} width="310" height="300"></StyledImage>
      <BlockInfo>
        <TitleH3>{props.title}</TitleH3>
        <TitleP>{props.description}</TitleP>
        <ButtonLink>Learn more &rsaquo;</ButtonLink>
      </BlockInfo>
    </BlogCardStyled>
  );
};
const BlogCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${myTheme.colors.white};
  flex-grow: 1;
  margin: 0 auto;
  max-width: 310px;
  ${TitleP} {
    padding: 8px 0;
  }
  ${StyledImage} {
    margin: 0 auto;
  }
`;
const BlockInfo = styled.div`
  padding: 25px 35px 15px 25px;
`;
const ButtonLink = styled.a`
  color: ${myTheme.colors.primary};
`;
