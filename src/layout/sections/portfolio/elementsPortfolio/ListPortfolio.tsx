import React from "react";
import styled from "styled-components";

export const ListPortfolio = (props: { listItems: Array<string> }) => {
  return (
    <ListPortfolioStyled>
      {props.listItems.map((item, index) => {
        return <li>{item}</li>;
      })}
    </ListPortfolioStyled>
  );
};

const ListPortfolioStyled = styled.ul`
  display: flex;
  justify-content: space-around;
  min-width: 606px;
`;
