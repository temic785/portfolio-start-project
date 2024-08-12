import styled from "styled-components";
import { Icon } from "../../../../components/icon/icon";
import { TitleP } from "../../../../components/TitleP";
import { myTheme } from "../../../../styles/ThemeStyled";

type ServicePropsType = {
  iconId: string;
  title: string;
  description: string;
};

export const Service = (props: ServicePropsType) => {
  return (
    <StyledService>
      <Icon
        iconId={props.iconId}
        height={"75px"}
        width={"75px"}
        viewBox={"0 0 70px 70px"}
        // color={myTheme.colors.primary}
      />
      <ServiceTitle>{props.title}</ServiceTitle>
      <TitleP>{props.description}</TitleP>
    </StyledService>
  );
};

const StyledService = styled.div`
  background-color: ${myTheme.colors.grey.light};
  width: 310px;
  min-height: 225px;
  text-align: center;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex-grow: 1;

  color: ${myTheme.colors.primary};

  @media ${myTheme.media.mobile} {
    max-width: 310px;
    margin: 0 auto;
  }
  &:nth-last-child(-n + 3) {
    margin-bottom: 0;
  }
`;

const ServiceTitle = styled.p`
  font-size: 18px;
  color: #2b2b2b;
  padding: 25px 0 15px;
`;
