import { FlexWrapper } from "../../../../components/FlexWrapper";
import { StyledImage } from "../../../../components/StyledImage.styled";
import { TitleH4 } from "../../../../components/TitleH4";
import { TitleP } from "../../../../components/TitleP";
import { ListKoment } from "./ListKoment";
import profileImgs from "../../../../assets/images/profile.webp";
import { SpanSection } from "../../../../components/SpanSection";
import { colorTheme } from "../../../../styles/ThemeStyled";
import styled from "styled-components";

const starArr = ["star", "star", "star", "star", "star"];

type CardPropsType = {
  title: string;
  description: string;
  nameProfile: string;
  professionProfile: string;
};

export const Koment = (props: CardPropsType) => {
  return (
    <KomenStyled>
      <FlexWrapper direction="column" background={colorTheme.colors.grey.light}>
        <ListKoment menuItems={starArr} />
        <TitleH4>{props.title}</TitleH4>
        <TitleP>{props.description}</TitleP>
        <FlexWrapper>
          <StyledImage
            src={profileImgs}
            width="150"
            height="150"
            alt="My phototo"
          />
          <FlexWrapper direction="column" wrap="wrap" justify="center">
            <TitleH4>James Gouse</TitleH4>
            <SpanSection>Graphic Designer</SpanSection>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </KomenStyled>
  );
};
const KomenStyled = styled.div`
  min-width: 310px;
  width: 33%;
`;
