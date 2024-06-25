import React from "react";
import { StyledImage } from "../../../../components/StyledImage.styled";
import mainImage from "../../../../assets/images/portfolio6.webp";
import styled from "styled-components";

type CardPortfolioPropsType = {
  srcImg?: string;
};

export const CardPortfolio = (props: CardPortfolioPropsType) => {
  return (
    <CardPortfolioStyled>
      <StyledImage src={mainImage} width="310" height="300"></StyledImage>
    </CardPortfolioStyled>
  );
};
const CardPortfolioStyled = styled.div`
  width: 33%;
  max-width: 310px;
  min-height: 310px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;
