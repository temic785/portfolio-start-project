import React from "react";
import styled from "styled-components";
import { CardPortfolio } from "./CardPortfolio";
import { FlexWrapper } from "../../../../components/FlexWrapper";

import cardPort1 from "../../../../assets/images/portfolio1.webp";
import cardPort2 from "../../../../assets/images/portfolio2.webp";
import cardPort3 from "../../../../assets/images/portfolio3.webp";
import cardPort4 from "../../../../assets/images/portfolio4.webp";
import cardPort5 from "../../../../assets/images/portfolio5.webp";
import cardPort6 from "../../../../assets/images/portfolio6.webp";
import cardPort7 from "../../../../assets/images/portfolio7.webp";
import cardPort8 from "../../../../assets/images/portfolio8.webp";
import cardPort9 from "../../../../assets/images/portfolio9.webp";

export const CardsPortfolio = () => {
  return (
    <CardsPortfolioStyled>
      <FlexWrapper wrap="wrap" gap="20px">
        <CardPortfolio srcImg={cardPort1} />
        <CardPortfolio srcImg={cardPort2} />
        <CardPortfolio srcImg={cardPort3} />
        <CardPortfolio srcImg={cardPort4} />
        <CardPortfolio srcImg={cardPort5} />
        <CardPortfolio srcImg={cardPort6} />
        <CardPortfolio srcImg={cardPort7} />
        <CardPortfolio srcImg={cardPort8} />
        <CardPortfolio srcImg={cardPort9} />
      </FlexWrapper>
    </CardsPortfolioStyled>
  );
};

const CardsPortfolioStyled = styled.div``;
