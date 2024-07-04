import styled from "styled-components";
import { Icon } from "./icon/icon";
import { FlexWrapper } from "./FlexWrapper";

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
          <StyledLi key={index}>
            <FlexWrapper align="center" gap="15px">
              <Icon
                iconId={iconItems.icon}
                width={"25px"}
                height={"25px"}
                viewBox={"0 0 25px 13px"}
              />
              <ServiceName>{iconItems.span}</ServiceName>
            </FlexWrapper>
          </StyledLi>
        );
      })}
    </ListStyled>
  );
};
const ListStyled = styled.ol`
  display: flex;
  flex-direction: column;
  text-align: start;
  margin-left: -50px;
`;
const StyledLi = styled.li`
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;
const ServiceName = styled.span``;
