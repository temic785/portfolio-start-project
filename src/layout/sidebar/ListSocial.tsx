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
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${myTheme.colors.primary};

    position: absolute;
    z-index: -1;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
  }
`;

// export const ListSocial = () => {
//   return (
//     <StyledListLink>
//       <SocialItem>
//         <SocialLink>
//           <Icon
//             iconId={"facebook"}
//             width={"24px"}
//             height={"24px"}
//             viewBox={"0 0 24px 24px"}
//           ></Icon>
//         </SocialLink>
//         <SocialLink>
//           <Icon
//             iconId={"instagram"}
//             width={"24px"}
//             height={"24px"}
//             viewBox={"0 0 24px 24px"}
//           ></Icon>
//         </SocialLink>
//         <SocialLink>
//           <Icon
//             iconId={"twitter"}
//             width={"24px"}
//             height={"24px"}
//             viewBox={"0 0 24px 24px"}
//           ></Icon>
//         </SocialLink>
//         <SocialLink>
//           <Icon
//             iconId={"linkedIn"}
//             width={"24px"}
//             height={"24px"}
//             viewBox={"0 0 24px 24px"}
//           ></Icon>
//         </SocialLink>
//         <SocialLink>
//           <Icon
//             iconId={"youtube"}
//             width={"24px"}
//             height={"24px"}
//             viewBox={"0 0 24px 24px"}
//           ></Icon>
//         </SocialLink>
//         <SocialLink>
//           <Icon
//             iconId={"dribbble"}
//             width={"24px"}
//             height={"24px"}
//             viewBox={"0 0 24px 24px"}
//           ></Icon>
//         </SocialLink>
//       </SocialItem>
//     </StyledListLink>
//   );
// };
