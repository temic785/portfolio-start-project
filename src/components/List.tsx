import styled from "styled-components";
import { Icon } from "./icon/icon";

type Test = {
  icon: string;
  span: string;
};

type ListPropsType = {
  menuCardItemsArr: Test[];
};

export const List = (props: ListPropsType) => {
  return (
    <ListStyled>
      {props.menuCardItemsArr.map((iconItems, index) => {
        return (
          <li key={index}>
            <Icon
              iconId={iconItems.icon}
              width={"25px"}
              height={"24px"}
              viewBox={"0 0 25px 24px"}
            />
            <span>{iconItems.span}</span>
          </li>
        );
      })}
    </ListStyled>
  );
};
const ListStyled = styled.ol`
  display: flex;
  flex-direction: column;

  text-align: start;
`;
