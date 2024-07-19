import React from "react";
import styled from "styled-components";
import { TitleP } from "../../../components/TitleP";
import { Icon } from "../../../components/icon/icon";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { colorTheme } from "../../../styles/ThemeStyled";

type CardContactPropsType = {
  iconId: string;
  contInf1: string;
  contVal1: string;
  contInf2: string;
  contVal2: string;
  contInf3: string;
  contVal3: string;
};

export const CardContact = (props: CardContactPropsType) => {
  return (
    <CardContactStyled>
      <Icon
        iconId={props.iconId}
        width={"17px"}
        height={"15px"}
        viewBox={"0 0 17px 15px"}
      />
      <FlexWrapper direction="row" align="center" justify="space-between">
        {/* <TitleH4>{props.contInf1}</TitleH4> */}
        <TitleP>{props.contVal1}</TitleP>
      </FlexWrapper>
      <FlexWrapper direction="row" align="center" justify="space-between">
        {/* <TitleH4>{props.contInf2}</TitleH4> */}
        <TitleP>{props.contVal2}</TitleP>
      </FlexWrapper>
      <FlexWrapper direction="row" align="center" justify="space-between">
        {/* <TitleH4>{props.contInf3}</TitleH4> */}
        <TitleP>{props.contVal3}</TitleP>
      </FlexWrapper>
    </CardContactStyled>
  );
};

const CardContactStyled = styled.div`
  background-color: ${colorTheme.colors.white};
`;
