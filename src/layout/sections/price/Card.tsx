import styled from "styled-components";
import { myTheme } from "../../../styles/ThemeStyled";
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
      <FlexWrapper direction="column" align="center">
        <Psevdo>{props.mostPop}</Psevdo>
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

const Psevdo = styled.div`
  width: 100%;
`;

const TitleCard = styled.h3`
  font-size: 24px;
  color: #2b2b2b;
`;

const StyledCard = styled.div`
  background-color: ${myTheme.colors.grey.light};
  text-align: center;
  padding-top: 54px;
  min-width: 310px;
  flex-grow: 1;
  &:nth-child(2) {
    padding: 0;
  }

  &:nth-child(2) ${Psevdo} {
    display: inline-block;
    background-color: ${myTheme.colors.primary};
    color: ${myTheme.colors.secondary};
    min-height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:nth-child(2) ${TitleCard} {
    padding-top: 25px;
  }
  @media ${myTheme.media.slider} {
    flex-grow: 1;
    margin: 0 auto;
    max-width: 310px;
    height: 610px;
  }
`;

const PriceCard = styled.span`
  font-size: 32px;
  font-weight: 700;
  color: ${myTheme.colors.secondary};
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
  width: 170px;
  height: 38px;
  font-size: 14px;
  font-weight: 700;
  color: ${myTheme.colors.secondary};
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 20px 0 25px;
  background-color: ${(props) => props.myBtnType};
  transition: ${myTheme.animations.transition};
  &:hover {
    width: 180px;
    height: 50px;
  }
`;
