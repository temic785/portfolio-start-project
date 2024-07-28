import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { Header } from "../../header/Header";
import { Services } from "../services/Services";
import { PricePlans } from "../price/PricePlans";
import { Recommendations } from "../recommendations/Recommendations";
import { Education } from "../education/Education";
import { Work } from "../work/Work";
import { Portfolio } from "../portfolio/Portfolio";
import { Blog } from "../blog/Blog";
import { Footer } from "../../footer/Footer";
import { YourInfo } from "../yourContact/yourInfo/YourInfo";
import { MyMap } from "../myMap/MyMap";

export const Main = () => {
  return (
    <Container>
      <Header />
      <Services />
      <PricePlans />
      <Recommendations />
      <Education />
      <Work />
      <Portfolio />
      <Blog />
      <YourInfo />
      <MyMap />
      <Footer />
    </Container>
  );
};
