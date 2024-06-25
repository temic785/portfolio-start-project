import React from "react";
import { TitleP } from "../../../components/TitleP";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { colorTheme } from "../../../styles/ThemeStyled";

export const StyledForms = () => {
  return (
    <StyledForm>
      <TitleP>Your Full Name ( Required)</TitleP>
      <Field />
      <TitleP>Your Email ( Required)</TitleP>
      <Field />
      <TitleP>Subject</TitleP>
      <Field />
      <TitleP>Your Message</TitleP>
      <Field as={"textarea"} />
      <StyledButton type={"submit"}>send message</StyledButton>
    </StyledForm>
  );
};
const StyledForm = styled.form`
  background-color: ${colorTheme.colors.while};
`;
const Field = styled.input`
  background-color: ${colorTheme.colors.grey.medium};
`;
export const StyledButton = styled.button`
  display: block;
`;
