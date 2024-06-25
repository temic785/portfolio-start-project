import React from "react";
import { Icon } from "../icon/icon";
import styled from "styled-components";

export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenuNav>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href="#">
                <Icon
                  iconId={item}
                  width={"17px"}
                  height={"18px"}
                  viewBox={"0 0 17px 18px"}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </StyledMenuNav>
  );
};
const StyledMenuNav = styled.nav`
  margin-top: 254px;
`;
