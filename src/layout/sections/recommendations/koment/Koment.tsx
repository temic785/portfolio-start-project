import { FlexWrapper } from "../../../../components/FlexWrapper";
import { StyledImage } from "../../../../components/StyledImage.styled";
import { ListKoment } from "./ListKoment";
import { colorTheme } from "../../../../styles/ThemeStyled";
import styled from "styled-components";

const starArr = ["star", "star", "star", "star", "star"];

type CardPropsType = {
  title: string;
  description: string;
  nameProfile: string;
  professionProfile: string;
  profImg: string;
};

export const Koment = (props: CardPropsType) => {
  return (
    <KomenStyled>
      <FlexWrapper
        direction="column"
        background={colorTheme.colors.grey.light}
        pad="25px 20px 25px 25px "
      >
        <ListKoment menuItems={starArr} />
        <ShortReview>{props.title}</ShortReview>
        <ComentPar>{props.description}</ComentPar>
        <FlexWrapper gap="13px">
          <StyledImage
            src={props.profImg}
            width="80px"
            height="80px"
            alt="My phototo"
            bord="50%"
          />
          <FlexWrapper direction="column" justify="center" align="center">
            <CommnetatorName>{props.nameProfile}</CommnetatorName>
            <DescriptionSection>{props.professionProfile}</DescriptionSection>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </KomenStyled>
  );
};
const KomenStyled = styled.div`
  /* width: 33%; */
`;

const CommnetatorName = styled.div`
  color: ${colorTheme.colors.secondary};
  font-size: 18px;
`;

const DescriptionSection = styled.span`
  font-size: 15px;
  color: #767676;
  display: flex;
  max-width: 438px;
  text-align: center;
  /* outline: 1px solid black; */
  font-weight: 400;
`;

const ShortReview = styled.h4`
  font-size: 18px;
  color: ${colorTheme.colors.secondary};
  padding: 15px 0 18px;
`;

const ComentPar = styled.p`
  font-size: 15px;
  color: ${colorTheme.colors.grey.dark};
  padding-bottom: 30px;
  line-height: 1.5;
  max-width: 260px;
`;
