import React from "react";
import styled from "styled-components";
import { CardPortfolio } from "./CardPortfolio";
import { FlexWrapper } from "../../../../components/FlexWrapper";

export const CardsPortfolio = () => {
  return (
    <CardsPortfolioStyled>
      <FlexWrapper wrap="wrap">
        <CardPortfolio />
        <CardPortfolio />
        <CardPortfolio />
        <CardPortfolio />
        <CardPortfolio />
        <CardPortfolio />
      </FlexWrapper>
    </CardsPortfolioStyled>
  );
};

const CardsPortfolioStyled = styled.div``;
