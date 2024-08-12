import React from "react";
import styled, { css } from "styled-components";
import { myTheme } from "../../../../styles/ThemeStyled";
import { font } from "../../../../styles/Common";

export type TabStatusType = "all" | "ui" | "web" | "logo" | "branding";

type TabMenuPropsType = {
  tabItems: Array<{
    status: TabStatusType;
    title: string;
  }>;
  changeFilterStatus: (value: TabStatusType) => void;
};

export const ListPortfolio = (props: TabMenuPropsType) => {
  return (
    <ListPortfolioStyled>
      {props.tabItems.map((item, index) => {
        return (
          <LiElStyled
            active={false}
            onClick={() => {
              props.changeFilterStatus(item.status);
            }}
          >
            {item.title}
          </LiElStyled>
        );
      })}
    </ListPortfolioStyled>
  );
};

const ListPortfolioStyled = styled.a`
  display: flex;
  justify-content: space-between;
  max-width: 606px;
  width: 100%;
  margin: 0 auto 40px;
`;
const LiElStyled = styled.li<{ active: boolean }>`
  cursor: pointer;
  ${font({ weight: 500, Fmax: 18, Fmin: 12 })}

  &:hover {
    color: ${myTheme.colors.primary};
  }

  @media ${myTheme.media.mobile} {
  }
`;
