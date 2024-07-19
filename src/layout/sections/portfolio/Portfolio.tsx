import React from "react";
import styled from "styled-components";
import { DescriptionSection } from "../../../components/DescriptionSection";
import { TitleSection } from "../../../components/TitleSection";
import { ListPortfolio } from "./elementsPortfolio/ListPortfolio";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { CardsPortfolio } from "./elementsPortfolio/CardsPortfolio";

const arrList = [
  "All categories",
  "UI Design",
  "Web Templates",
  "Logo",
  "Branding",
];

export const Portfolio = () => {
  return (
    <PortfolioStyled>
      <TitleSection>Portfolio</TitleSection>
      <DescriptionSection>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </DescriptionSection>
      <ListPortfolio listItems={arrList} />
      <CardsPortfolio />
    </PortfolioStyled>
  );
};
const PortfolioStyled = styled.section``;
