import React from "react";
import iconsSprite from "../..//assets/images/icons-sprite.svg";
import styled from "styled-components";
import { myTheme } from "../../styles/ThemeStyled";

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  color?: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    <StyledSvg
      className="icon"
      width={props.width || "25"}
      height={props.height || "25"}
      viewBox={props.viewBox || "0 0 25 25"}
      fill="none"
      // stroke={props.color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
    </StyledSvg>
  );
};
const StyledSvg = styled.svg``;
