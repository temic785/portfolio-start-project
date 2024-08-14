import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/icon";
import { myTheme } from "../../styles/ThemeStyled";

export const ListSocial = (props: { menuItems: Array<string> }) => {
  return (
    <StyledListSocial>
      <SocialList>
        {props.menuItems.map((item, index) => {
          return (
            <SocialEl key={index}>
              <SocialLink href="#">
                <Icon
                  iconId={item}
                  width={"14px"}
                  height={"14px"}
                  viewBox={"0 0 14px 14px"}
                />
              </SocialLink>
            </SocialEl>
          );
        })}
      </SocialList>
    </StyledListSocial>
  );
};

const StyledListSocial = styled.div``;

const SocialList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  gap: 25px;
`;
const SocialEl = styled.li``;
const SocialLink = styled.a`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${myTheme.colors.primary};
  transition: ${myTheme.animations.transition};

  &:hover {
    transform: translateY(-4px);
    color: red;
  }
`;
