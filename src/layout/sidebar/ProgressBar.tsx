import React from "react";
import { FlexWrapper } from "../../components/FlexWrapper";
import { SpanStyled } from "../../components/SpanStyled";
import styled from "styled-components";
import { colorTheme } from "../../styles/ThemeStyled";

type ProgressBarType = {
  langName: string;
  percent: string;
};

export const ProgressBar = (props: ProgressBarType) => {
  return (
    <ProgressBarStyled>
      <FlexWrapper justify="space-between">
        <SpanStyled>{props.langName} </SpanStyled>
        <SpanStyled>{props.percent}</SpanStyled>
      </FlexWrapper>
      <ProgressBarLine percent={props.percent} />
    </ProgressBarStyled>
  );
};
const ProgressBarStyled = styled.div`
  ${FlexWrapper} {
    padding: 10px 0;
  }
`;
const ProgressBarLine = styled.div<{ percent: string }>`
  width: 100%;

  height: 6px;
  border-radius: 30px;
  border: 0.5px ${colorTheme.colors.primary} solid;
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    height: 2px;
    border-radius: 30px;
    width: ${(props) => props.percent};
    background-color: ${colorTheme.colors.primary};

    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
  }
`;
