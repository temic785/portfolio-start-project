import React, { useState } from "react";
import styled from "styled-components";
import { DescriptionSection } from "../../../components/DescriptionSection";
import { TitleSection } from "../../../components/TitleSection";
import {
  ListPortfolio,
  TabStatusType,
} from "./elementsPortfolio/ListPortfolio";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { CardsPortfolio } from "./elementsPortfolio/CardsPortfolio";
import { title } from "process";
import cardPort1 from "../../../assets/images/portfolio1.webp";
import cardPort2 from "../../../assets/images/portfolio2.webp";
import cardPort3 from "../../../assets/images/portfolio3.webp";
import cardPort4 from "../../../assets/images/portfolio4.webp";
import cardPort5 from "../../../assets/images/portfolio5.webp";
import cardPort6 from "../../../assets/images/portfolio6.webp";
import cardPort7 from "../../../assets/images/portfolio7.webp";
import cardPort8 from "../../../assets/images/portfolio8.webp";
import cardPort9 from "../../../assets/images/portfolio9.webp";
import { StyledImage } from "../../../components/StyledImage.styled";
import { myTheme } from "../../../styles/ThemeStyled";
// const tabsItems = [
//   "All categories",
//   "UI Design",
//   "Web Templates",
//   "Logo",
//   "Branding",
// ];

const tabItems: Array<{
  status: TabStatusType;
  title: string;
}> = [
  { title: "All categories", status: "all" },
  { title: "UI Design", status: "ui" },
  { title: "Web Templates", status: "web" },
  { title: "Logo", status: "logo" },
  { title: "Branding", status: "branding" },
];

const potfolioData = [
  { src: cardPort1, type: "ui" },
  { src: cardPort2, type: "ui" },
  { src: cardPort3, type: "ui" },
  { src: cardPort4, type: "web" },
  { src: cardPort5, type: "web" },
  { src: cardPort6, type: "web" },
  { src: cardPort7, type: "logo" },
  { src: cardPort8, type: "branding" },
  { src: cardPort9, type: "logo" },
];

export const Portfolio: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
  let filteredWorks = potfolioData;

  if (currentFilterStatus === "ui") {
    filteredWorks = potfolioData.filter((portfolio) => portfolio.type === "ui");
  }

  if (currentFilterStatus === "web") {
    filteredWorks = potfolioData.filter(
      (portfolio) => portfolio.type === "web"
    );
  }

  if (currentFilterStatus === "logo") {
    filteredWorks = potfolioData.filter(
      (portfolio) => portfolio.type === "logo"
    );
  }

  if (currentFilterStatus === "branding") {
    filteredWorks = potfolioData.filter(
      (portfolio) => portfolio.type === "branding"
    );
  }

  function changeFilterStatus(value: TabStatusType) {
    setCurrentFilterStatus(value);
  }
  return (
    <PortfolioStyled>
      <TitleSection>Portfolio</TitleSection>
      <DescriptionSection>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </DescriptionSection>
      <ListPortfolio
        tabItems={tabItems}
        changeFilterStatus={changeFilterStatus}
      />
      <FlexWrapper wrap="wrap" gap="20px">
        {filteredWorks.map((w) => {
          return (
            <CardPortfolio>
              <StyledImage
                src={w.src}
                width="100%"
                height="300px"
              ></StyledImage>
            </CardPortfolio>
          );
        })}
      </FlexWrapper>
    </PortfolioStyled>
  );
};
const PortfolioStyled = styled.section``;
const CardPortfolio = styled.div`
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
