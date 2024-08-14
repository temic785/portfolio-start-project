import styled from "styled-components";
import "./App.css";
import { Navigation } from "./components/menu/Navigation";
import { Main } from "./layout/sections/main/Main";
import { Sidebar } from "./layout/sidebar/Sidebar";
import { SidebarMobile } from "./layout/sidebar/SidebarMobile";
import { myTheme } from "./styles/ThemeStyled";
import { Particle } from "./components/particle/Particle";

function App() {
  return (
    <AppStyled className="App">
      <ParticalWrapper>
        <Particle />
      </ParticalWrapper>
      <Sidebar />
      <SidebarMobile />
      <Navigation />
      <Main />
    </AppStyled>
  );
}

export default App;
const AppStyled = styled.div`
  padding: 0 100px 0 300px;
  @media ${myTheme.media.desktop.aside} {
    padding: 0;
  }
`;
const ParticalWrapper = styled.div`
  @media ${myTheme.media.tablet} {
    display: none;
  }
`;
