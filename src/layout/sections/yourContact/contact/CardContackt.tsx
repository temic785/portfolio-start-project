import React from "react";
import styled from "styled-components";
import { TitleP } from "../../../../components/TitleP";
import { Icon } from "../../../../components/icon/icon";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { colorTheme } from "../../../../styles/ThemeStyled";
import { TitleNameForm } from "../yourInfo/StyledForms";

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
      <FlexWrapper justify="center" direction="column">
        <IconWrapper>
          <Icon
            iconId={props.iconId}
            width={"18px"}
            height={"18px"}
            viewBox={"0 0 18px 18px"}
          />
        </IconWrapper>

        <Couple>
          <TitleNameForm>{props.contInf1}</TitleNameForm>
          <TitleNameForm>{props.contVal1}</TitleNameForm>
        </Couple>
        <Couple>
          <TitleNameForm>{props.contInf2}</TitleNameForm>
          <TitleNameForm>{props.contVal2}</TitleNameForm>
        </Couple>
        <Couple>
          <TitleNameForm>{props.contInf3}</TitleNameForm>
          <TitleNameForm>{props.contVal3}</TitleNameForm>
        </Couple>
      </FlexWrapper>
    </CardContactStyled>
  );
};

const Couple = styled.div`
  display: flex;
  justify-content: space-between;

  ${TitleNameForm} {
    &:nth-child(even) {
      font-size: 15px;
      font-weight: 400;
    }
  }
`;

const CardContactStyled = styled.div`
  background-color: ${colorTheme.colors.white};
  padding: 25px 25px 15px 25px;
  min-height: 210px;

  ${Couple}:not(:last-child) {
    padding-bottom: 16px;
  }
`;
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-bottom: 42px;
  position: relative;
  z-index: 0;
  &::before {
    content: "";
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${colorTheme.colors.primary};

    position: absolute;
    z-index: -1;
    left: 50%;
    top: 16%;
    transform: translate(-50%, -50%);
  }
`;
