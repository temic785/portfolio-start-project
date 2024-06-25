import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/icon";

export const ListSocial = () => {
  return (
    <StyledListLink>
      <SocialItem>
        <SocialLink>
          <Icon
            iconId={"facebook"}
            width={"24px"}
            height={"24px"}
            viewBox={"0 0 24px 24px"}
          ></Icon>
        </SocialLink>
        <SocialLink>
          <Icon
            iconId={"instagram"}
            width={"24px"}
            height={"24px"}
            viewBox={"0 0 24px 24px"}
          ></Icon>
        </SocialLink>
        <SocialLink>
          <Icon
            iconId={"twitter"}
            width={"24px"}
            height={"24px"}
            viewBox={"0 0 24px 24px"}
          ></Icon>
        </SocialLink>
        <SocialLink>
          <Icon
            iconId={"linkedIn"}
            width={"24px"}
            height={"24px"}
            viewBox={"0 0 24px 24px"}
          ></Icon>
        </SocialLink>
        <SocialLink>
          <Icon
            iconId={"youtube"}
            width={"24px"}
            height={"24px"}
            viewBox={"0 0 24px 24px"}
          ></Icon>
        </SocialLink>
        <SocialLink>
          <Icon
            iconId={"dribbble"}
            width={"24px"}
            height={"24px"}
            viewBox={"0 0 24px 24px"}
          ></Icon>
        </SocialLink>
      </SocialItem>
    </StyledListLink>
  );
};

const StyledListLink = styled.div``;

const SocialItem = styled.ul`
  display: flex;
  gap: 15px;
`;
const SocialLink = styled.li``;
