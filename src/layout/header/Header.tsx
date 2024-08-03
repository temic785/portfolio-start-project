import React from "react";
import { StyledImage } from "../../components/StyledImage.styled";
import mainImage from "../../assets/images/mainPhoto.webp";
import styled from "styled-components";
import { myTheme } from "../../styles/ThemeStyled";
import { FlexWrapper } from "../../components/FlexWrapper";
import triangleSrc from "../../assets/triangle.svg";

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
            <span>Front-end</span> Developer
          </MainTitle>
        </Greetings>
        <TextTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus.
        </TextTitle>
        <ButtonStyled>Hire me &#8594;</ButtonStyled>
      </FlexWrapper>
      <StyledImage src={mainImage} width="325px" height="457px"></StyledImage>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  background-color: ${myTheme.colors.white};
  position: relative;
  flex-wrap: wrap;

  @media ${myTheme.media.mobile} {
    & > *:not(:last-child) {
      padding: 0 32px;
    }
  }

  &::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px ${myTheme.colors.primary} solid;
    border-radius: 50%;

    position: absolute;
    top: 30px;
    left: 40px;

    @media ${myTheme.media.mobile} {
      display: none;
    }
  }
  &::after {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px #05ff00 solid;
    border-radius: 50%;

    position: absolute;
    bottom: 30px;
    left: 88px;

    @media ${myTheme.media.mobile} {
      display: none;
    }
  }

  ${FlexWrapper} {
    @media ${myTheme.media.mobile} {
      height: 100%;
    }

    &::before {
      content: "";
      display: inline-block;
      width: 16px;
      height: 16px;
      border: 2px #05ff00 solid;
      border-radius: 50%;

      position: absolute;
      top: 52px;
      left: 520px;
      @media ${myTheme.media.mobile} {
        top: 52px;
        left: 180px;
      }
    }

    &::after {
      content: "";
      width: 16px;
      height: 16px;
      border: 2px #0047ff solid;
      transform: rotate(26deg);

      position: absolute;
      bottom: 112px;
      left: 374px;

      @media ${myTheme.media.mobile} {
        bottom: 755px;
        left: 60px;
      }
    }
  }

  ${StyledImage} {
    @media ${myTheme.media.mobile} {
      margin-top: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      object-fit: cover;
    }
  }
`;

const Greetings = styled.div`
  &::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px ${myTheme.colors.primary} solid;
    border-radius: 50%;

    position: absolute;
    bottom: 71px;
    right: 396px;
    @media ${myTheme.media.mobile} {
      display: none;
    }
  }
  &::after {
    content: "";
    width: 16px;
    height: 16px;
    border: 2px ${myTheme.colors.primary} solid;
    transform: rotate(26deg);

    position: absolute;
    top: 70px;
    right: 53px;
  }
`;

const NameTitle = styled.h2`
  color: ${myTheme.colors.secondary};
  font-size: 48px;
`;

const MainTitle = styled.h1`
  color: ${myTheme.colors.secondary};
  font-size: 48px;
  span {
    color: ${myTheme.colors.primary};
  }
`;
const TextTitle = styled.p`
  max-width: 424px;
  font-size: 16;
  font-weight: 400px;
  line-height: 1.3;
  @media ${myTheme.media.mobile} {
    padding: 90px 0 35px 0;
  }
`;
export const ButtonStyled = styled.button`
  max-width: 154px;
  min-height: 51px;
  color: ${myTheme.colors.secondary};
  font-size: 16px;
  text-transform: uppercase;
  background-color: ${myTheme.colors.primary};
  font-weight: 500;
  border-radius: 5px;

  &::after {
    content: "";
    width: 16px;
    height: 16px;
    background-image: url(${triangleSrc});
    background-repeat: no-repeat;
    cursor: default;

    position: absolute;
    bottom: 24px;
    right: 33px;
    @media ${myTheme.media.mobile} {
      display: none;
    }
  }
`;
