import "./App.css";
import styled from "styled-components";
import { Header } from "./layout/header/Header";
import { Sidebar } from "./layout/sidebar/Sidebar";
import { MainMenu } from "./layout/sections/main/Main";
import { FlexWrapper } from "./components/FlexWrapper";
import { Services } from "./layout/sections/services/Services";
import { PricePlans } from "./layout/sections/price/PricePlans";
import { Recommendations } from "./layout/sections/recommendations/Recommendations";
import { Education } from "./layout/sections/education/Education";
import { Work } from "./layout/sections/work/Work";
import { Portfolio } from "./layout/sections/portfolio/Portfolio";
import { Blog } from "./layout/sections/blog/Blog";
import { YourInfo } from "./layout/sections/yourInfo/YourInfo";
import { Contact } from "./layout/sections/contact/Contact";
import { Footer } from "./layout/footer/Footer";

function App() {
  return (
    <div className="App">
      <FlexWrapper direction="column">
        <FlexWrapper justify="space-between">
          <Sidebar />
          <FlexWrapper direction="column" align="center">
            <MainMenu />
            <Services />
            <PricePlans />
            <Recommendations />
            <Education />
            <Work />
            <Portfolio />
            <Blog />
            <FlexWrapper direction="row">
              <YourInfo />
              <Contact />
            </FlexWrapper>
          </FlexWrapper>
          <Header />
        </FlexWrapper>
        <Footer />
      </FlexWrapper>
    </div>
  );
}

export default App;
