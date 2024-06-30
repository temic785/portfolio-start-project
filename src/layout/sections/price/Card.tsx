import styled from "styled-components";
import { colorTheme } from "../../../styles/ThemeStyled";
import { TitleP } from "../../../components/TitleP";
import { SpanSection } from "../../../components/SpanSection";
import { TitleSection } from "../../../components/TitleSection";
import { List } from "../../../components/List";
import { PriceButton } from "../services/service/ServiceButton";
import { TitleH3 } from "../../../components/TitleH3";

type CardItems = {
  icon: string;
  span: string;
};
type CardPropsType = {
  title: string;
  price: string;
  description: string;

  menuCardItems: CardItems[];
};

export const Card = (props: CardPropsType) => {
  return (
    <StyledCard>
      <TitleH3>{props.title}</TitleH3>
      <TitleSection>{props.price}/hour</TitleSection>
      <TitleP>{props.description}</TitleP>
      <List menuCardItemsArr={props.menuCardItems} />
      <PriceButton />
    </StyledCard>
  );
};

const StyledCard = styled.div`
  background-color: ${colorTheme.colors.grey.light};
  text-align: center;
`;
