import React from "react";
import styled from "styled-components";
import mainImage from "../../../assets/images/profile.webp";
import { StyledImage } from "../../../components/StyledImage.styled";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { colorTheme } from "../../../styles/ThemeStyled";
import { BytonStyled } from "../../../components/Byton.styled";
export const MainMenu = () => {
  return (
    <FlexWrapper
      background={colorTheme.colors.grey.light}
      width="970px"
      height="467px"
    >
      <div>
        <span>I’m Rayan Adlrdard</span>
        <h1>Front-end Developer </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus.
        </p>
        <BytonStyled>Hire me &#8594;</BytonStyled>
      </div>
      <StyledImage src={mainImage} width="325" height="460"></StyledImage>
    </FlexWrapper>
  );
};
const MainMenuWrapper = styled.div``;
