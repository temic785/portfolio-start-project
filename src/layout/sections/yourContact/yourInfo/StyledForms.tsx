import { FlexWrapper } from "../../../../components/FlexWrapper";
import { TitleP } from "../../../../components/TitleP";
import { TitleSection } from "../../../../components/TitleSection";
import { myTheme } from "../../../../styles/ThemeStyled";
import styled from "styled-components";

export const StyledForms = () => {
  return (
    <StyledForm>
      <TitleSection>Leave us your info</TitleSection>
      <FlexWrapper direction="column" maxHeight="665px">
        <TitleNameForm>Your Full Name ( Required)</TitleNameForm>
        <Field />
        <TitleNameForm>Your Email ( Required)</TitleNameForm>
        <Field />
        <TitleNameForm>Subject</TitleNameForm>
        <Field />
        <TitleNameForm>Your Message</TitleNameForm>
        <Field as={"textarea"} className="last-field" />
        <StyledButton type={"submit"}>send message</StyledButton>
      </FlexWrapper>
    </StyledForm>
  );
};
const StyledForm = styled.form`
  width: 570px;
  max-width: 100%;
  ${TitleSection} {
    text-align: start;
    margin-bottom: 50px;
    font-size: 30px;
  }

  ${FlexWrapper} {
    background-color: ${myTheme.colors.white};
    padding: 25px;
    max-width: 570px;
    @media ${myTheme.media.desktop.desktop} {
      max-width: 100%;
      padding: 25px 28px 32px 27px;
    }
  }
  textarea {
    resize: none;
  }
  @media ${myTheme.media.tablet} {
    width: 100%;
  }
`;
export const TitleNameForm = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: ${myTheme.colors.grey.dark};
`;

const Field = styled.input`
  background-color: ${myTheme.colors.grey.medium};
  min-height: 50px;
  margin: 8px 0 25px;

  &.last-field {
    min-height: 210px;
  }
`;
export const StyledButton = styled.button`
  background-color: ${myTheme.colors.primary};
  max-width: 160px;
  min-height: 35px;
  font-weight: 600;
`;
