import styled from "styled-components";
import { colorTheme } from "../../../styles/ThemeStyled";
import { List } from "../../../components/List";
import { FlexWrapper } from "../../../components/FlexWrapper";

type CardItems = {
  icon: string;
  span: string;
};

type CardPropsType = {
  title: string;
  price: string;
  description: string;
  myBtnType?: string;
  mostPop?: string;
  menuCardItems: CardItems[];
};
type PriceButtonProps = {
  myBtnType?: string;
};

export const Card = (props: CardPropsType) => {
  return (
    <StyledCard>
      <Psevdo>{props.mostPop}</Psevdo>
      <FlexWrapper direction="column" align="center">
        <TitleCard>{props.title}</TitleCard>
        <PriceCard>
          {props.price}
          <span> /Hour</span>
        </PriceCard>
        <TextCard>{props.description}</TextCard>
        <List menuCardItemsArr={props.menuCardItems} />
        <PriceButton myBtnType={props.myBtnType}>ORDER NOW</PriceButton>
      </FlexWrapper>
    </StyledCard>
  );
};

const Psevdo = styled.div``;

const TitleCard = styled.h3`
  font-size: 24px;
  color: #2b2b2b;
`;

const StyledCard = styled.div`
  background-color: ${colorTheme.colors.grey.light};
  text-align: center;
  padding-top: 54px;
  min-width: 310px;
  &:nth-child(2) {
    padding: 0;
  }

  &:nth-child(2) ${Psevdo} {
    background-color: ${colorTheme.colors.primary};
    color: ${colorTheme.colors.secondary};
    min-height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:nth-child(2) ${TitleCard} {
    padding-top: 25px;
  }
`;

const PriceCard = styled.span`
  font-size: 32px;
  font-weight: 700;
  /* padding: 19px 82px 8px 82px; */
  color: ${colorTheme.colors.secondary};
  span {
    font-size: 15px;
    font-weight: 400;
  }
`;

const TextCard = styled.p`
  font-size: 15px;
  color: #767676;
  max-width: 248px;
  line-height: 1.5;
  padding-bottom: 21px;
`;

const PriceButton = styled.button<PriceButtonProps>`
  min-width: 169px;
  min-height: 38px;

  font-size: 14px;
  font-weight: 700;
  color: ${colorTheme.colors.secondary};

  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  margin: 20px 0 25px;
  background-color: ${(props) => props.myBtnType};
`;
