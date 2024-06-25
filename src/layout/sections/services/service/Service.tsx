import styled from "styled-components";
import { Icon } from "../../../../components/icon/icon";
import { StyledService } from "./StyledService";
import { ServiceTitle } from "./ServiceTitle";
import { TitleP } from "../../../../components/TitleP";

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
      />
      <ServiceTitle>{props.title}</ServiceTitle>
      <TitleP>{props.description}</TitleP>
    </StyledService>
  );
};
