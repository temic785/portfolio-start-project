import React from "react";
import styled from "styled-components";
import { Icon } from "../../../components/icon/icon";
import { TitleP } from "../../../components/TitleP";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { colorTheme } from "../../../styles/ThemeStyled";

type ExtraSkillsItemPropsType = {
  iconId: string;
  description: string;
};

export const ExtraSkillsItem = (props: ExtraSkillsItemPropsType) => {
  return (
    <StyledExtraSkillsItem>
      <Icon iconId={props.iconId} />
      <TitleP>{props.description}</TitleP>
    </StyledExtraSkillsItem>
  );
};
const StyledExtraSkillsItem = styled.li`
  display: flex;
  gap: 15px;
`;
