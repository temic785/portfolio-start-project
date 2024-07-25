import React from "react";
import { StyledImage } from "../../components/StyledImage.styled";
import mainImage from "../../assets/images/mainPhoto.webp";
import styled from "styled-components";
import { colorTheme } from "../../styles/ThemeStyled";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Header = () => {
  return (
    <StyledHeader>
      <FlexWrapper
        direction="column"
        justify="space-between"
        marg="93px 0 0 0"
        height="300px"
      >
        <Greetings>
          <NameTitle>I’m Rayan Adlrdard</NameTitle>
          <MainTitle>
            <span>Front-end</span> Developer{" "}
          </MainTitle>
        </Greetings>
        <TextTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus.
        </TextTitle>
        <ButtonStyled>Hire me &#8594;</ButtonStyled>
      </FlexWrapper>
      <StyledImage src={mainImage} width="325" height="460"></StyledImage>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  background-color: ${colorTheme.colors.white};
`;

const Greetings = styled.div``;

const NameTitle = styled.h2`
  color: ${colorTheme.colors.secondary};
  font-size: 48px;
`;

const MainTitle = styled.h1`
  color: ${colorTheme.colors.secondary};
  font-size: 48px;
  span {
    color: ${colorTheme.colors.primary};
  }
`;
const TextTitle = styled.p`
  max-width: 424px;
  font-size: 16;
  font-weight: 400px;
`;
export const ButtonStyled = styled.button`
  max-width: 154px;
  min-height: 51px;
  color: ${colorTheme.colors.secondary};
  font-size: 16px;
  text-transform: uppercase;
  background-color: ${colorTheme.colors.primary};
  font-weight: 500;
  border-radius: 5px;
`;
