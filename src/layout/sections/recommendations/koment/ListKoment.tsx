import styled from "styled-components";
import { Icon } from "../../../../components/icon/icon";
import { colorTheme } from "../../../../styles/ThemeStyled";

export const ListKoment = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenuNav>
      <UlStyled>
        {props.menuItems.map((item, index) => {
          return (
            <li key={index}>
              <Icon
                iconId={item}
                height={"18px"}
                width={"18px"}
                viewBox={"0 0 18px 18px"}
                color={colorTheme.colors.primary}
              />
            </li>
          );
        })}
      </UlStyled>
    </StyledMenuNav>
  );
};
const StyledMenuNav = styled.nav``;
const UlStyled = styled.ul`
  display: flex;
  gap: 10px;
`;
