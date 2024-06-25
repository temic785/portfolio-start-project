import React, { Component } from "react";
import styled from "styled-components";
import { TitleSection } from "../../../components/TitleSection";
import { Card } from "../price/Card";
import { CardContact } from "./CardContackt";

export class Contact extends Component {
  render() {
    return (
      <ContactStyled>
        <TitleSection>Contact information</TitleSection>
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
      </ContactStyled>
    );
  }
}

const ContactStyled = styled.section`
  min-height: 50vh;
`;
