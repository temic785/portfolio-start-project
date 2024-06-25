import React from "react";
import iconsSprite from "../..//assets/images/icons-sprite.svg";
import styled from "styled-components";

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    <svg
      width={props.width || "25"}
      height={props.height || "25"}
      viewBox={props.viewBox || "0 0 25 25"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
    </svg>
  );
};

// const SvgImg = styled.svg<IconPropsType>`
// width:${(props) => props.width || "25"}
// height:${(props) => props.height || "25"}
// viewBox:${(props) => props.viewBox || "0 0 25px 25px"}
// `;
