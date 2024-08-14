import React from "react";
import { Icon } from "../icon/icon";
import styled from "styled-components";
import { myTheme } from "../../styles/ThemeStyled";
import { Link } from "react-scroll";

const items = [
  {
    icon: "moon",
    href: "",
  },
  {
    icon: "home",
    href: "home",
  },
  {
    icon: "services",
    href: "services",
  },
  {
    icon: "education",
    href: "education",
  },
  {
    icon: "portfolio",
    href: "portfolio",
  },
  {
    icon: "blog",
    href: "blog",
  },
  {
    icon: "contact",
    href: "contact",
  },
];

export const Menu = () => {
  return (
    <StyledMenuNav>
      <ListStyled>
        {items.map((item, index) => (
          <ElStyled key={index} isFirst={index === 0}>
            <LinkStyled
              to={item.href}
              smooth={true}
              activeClass="active"
              spy={true}
              iconId={item.icon}
            >
              <Icon
                iconId={item.icon}
                width={"17px"}
                height={"18px"}
                viewBox={"0 0 17px 18px"}
              />
            </LinkStyled>
          </ElStyled>
        ))}
      </ListStyled>
    </StyledMenuNav>
  );
};

const StyledMenuNav = styled.nav`
  max-height: 600px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ListStyled = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 42px;
  @media ${myTheme.media.desktop.nav} {
    flex-direction: row;
  }
  @media ${myTheme.media.tablet} {
    gap: 0;
    justify-content: space-between;
    max-width: 520px;
    width: 100%;
    padding: 0 15px;
  }
`;

const ElStyled = styled.li<{ isFirst: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  &:first-of-type {
    margin-bottom: 107px;
    @media ${myTheme.media.desktop.nav} {
      margin-bottom: 0;
    }
  }
  & > a {
    border-radius: ${(props) => (props.isFirst ? "50%" : "40px")};
    width: ${(props) => (props.isFirst ? "25px" : "40px")};
    height: ${(props) => (props.isFirst ? "25px" : "40px")};
    background-color: ${(props) => (props.isFirst ? "transparent" : "40px")};
    transition: ${myTheme.animations.transition};

    &:hover {
      background-color: ${(props) =>
        props.isFirst ? "transparent" : myTheme.colors.primary};
      transform: translateY(-4px);
    }
  }
`;

const LinkStyled = styled(Link)<{ iconId: string }>`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${myTheme.colors.grey.medium};

  &:hover,
  &.active {
    background-color: ${myTheme.colors.primary};
  }

  svg {
    ${(props) =>
      props.iconId === "moon" &&
      `
      width: 25px; 
      height: 25px; 

      `}
  }
`;

// const LinkStyled = styled.a<{ iconId: string }>`
//   width: 40px;
//   height: 40px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 50%;
//   background-color: ${myTheme.colors.grey.medium};

//   &:hover {
//     background-color: ${myTheme.colors.primary};
//   }

//   svg {
//     ${(props) =>
//       props.iconId === "moon" &&
//       `
//       width: 25px;
//       height: 25px;

//       `}
//   }
// `;
