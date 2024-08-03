import React from "react";
import styled from "styled-components";
import { myTheme } from "../../../../styles/ThemeStyled";
import { font } from "../../../../styles/Common";

export const ListPortfolio = (props: { listItems: Array<string> }) => {
  return (
    <ListPortfolioStyled>
      {props.listItems.map((item, index) => {
        return <LiElStyled>{item}</LiElStyled>;
      })}
    </ListPortfolioStyled>
  );
};

const ListPortfolioStyled = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 605px;
  width: 100%;
  margin: 0 auto 40px;
`;
const LiElStyled = styled.li`
  color: ${myTheme.colors.secondary};
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: ${myTheme.colors.primary};
  }
  @media ${myTheme.media.tablet} {
    font-size: 12px;
    ${font({ weight: 500, Fmax: 18, Fmin: 12 })}
  }
`;
