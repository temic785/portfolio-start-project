import React from "react";
import styled from "styled-components";
import { colorTheme } from "../../../../styles/ThemeStyled";

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
  justify-content: center;
  gap: 37px;
  padding-bottom: 50px;
`;
const LiElStyled = styled.li`
  color: ${colorTheme.colors.secondary};
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: ${colorTheme.colors.primary};
  }
`;
