import React from "react";
import { StyledImage } from "../../../../components/StyledImage.styled";
import mainImage from "../../../../assets/images/portfolio6.webp";
import styled from "styled-components";
import { myTheme } from "../../../../styles/ThemeStyled";

type CardPortfolioPropsType = {
  srcImg: string;
};

export const CardPortfolio = (props: CardPortfolioPropsType) => {
  return (
    <CardPortfolioStyled>
      <StyledImage src={props.srcImg} width="100%" height="300px"></StyledImage>
    </CardPortfolioStyled>
  );
};
const CardPortfolioStyled = styled.div`
  width: 310px;

  display: flex;
  flex-direction: column;
  flex-grow: 1;
  cursor: pointer;
  position: relative;

  ${StyledImage} {
    @media ${myTheme.media.mobile} {
      width: 310px;
      margin: 0 auto;
    }
  }

  &:hover {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: ${myTheme.colors.primary};
      opacity: 85%;
    }
    &:after {
      content: "+";
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 4rem;
      color: ${myTheme.colors.secondary};

      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }
`;
