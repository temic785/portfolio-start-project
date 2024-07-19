import React from "react";
import { StyledImage } from "../../../../components/StyledImage.styled";
import mainImage from "../../../../assets/images/portfolio6.webp";
import styled from "styled-components";
import { colorTheme } from "../../../../styles/ThemeStyled";

type CardPortfolioPropsType = {
  srcImg: string;
};

export const CardPortfolio = (props: CardPortfolioPropsType) => {
  return (
    <CardPortfolioStyled>
      <StyledImage src={props.srcImg} width="310" height="300"></StyledImage>
    </CardPortfolioStyled>
  );
};
const CardPortfolioStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  position: relative;

  &:hover {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: ${colorTheme.colors.primary};
      opacity: 85%;
    }
    &:after {
      content: "+";
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 4rem;
      color: ${colorTheme.colors.secondary};

      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }
`;
