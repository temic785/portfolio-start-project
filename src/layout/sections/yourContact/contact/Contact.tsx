import React, { Component } from "react";
import styled from "styled-components";
import { TitleSection } from "../../../../components/TitleSection";
import { CardContact } from "./CardContackt";
import { FlexWrapper } from "../../../../components/FlexWrapper";

export const Contact = () => {
  return (
    <ContactStyled>
      <TitleSection>Contact information</TitleSection>
      <FlexWrapper direction="column" gap="18px" height="unset">
        <CardContact
          iconId="map"
          contInf1="Country:"
          contVal1="Bangladesh"
          contInf2="City:"
          contVal2="Dhaka"
          contInf3="Street:"
          contVal3="35 vhatara, Badda"
        />
        <CardContact
          iconId="mail"
          contInf1="Email:"
          contVal1="youremail@gmail.com"
          contInf2="Skype:"
          contVal2="@yourusername"
          contInf3="Telegram:"
          contVal3="@yourusername"
        />
        <CardContact
          iconId="mobile"
          contInf1="Support services:"
          contVal1="15369"
          contInf2="Office:"
          contVal2="+58 (021)356 587 235"
          contInf3="Personal:"
          contVal3="+58 (021)356 587 235"
        />
      </FlexWrapper>
    </ContactStyled>
  );
};

const ContactStyled = styled.div`
  min-width: 370px;
  ${TitleSection} {
    text-align: start;
    margin-bottom: 50px;
  }
`;
