import React from "react";
import { BytonStyled } from "../../components/Byton.styled";
import { StyledImage } from "../../components/StyledImage.styled";
import mainImage from "../../assets/images/mainPhoto.webp";
import styled from "styled-components";

export const Header = () => {
  return (
    <StyledHeader>
      <span>I’m Rayan Adlrdard</span>
      <h1>Front-end Developer </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
        feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
        lectus.
      </p>
      <BytonStyled>Hire me &#8594;</BytonStyled>
      <StyledImage src={mainImage} width="325" height="460"></StyledImage>
    </StyledHeader>
  );
};

const StyledHeader = styled.header``;
