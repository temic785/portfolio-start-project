import styled from "styled-components";
import "./App.css";
import { Navigation } from "./components/menu/Navigation";
import { Main } from "./layout/sections/main/Main";
import { Sidebar } from "./layout/sidebar/Sidebar";
import { SidebarMobile } from "./layout/sidebar/SidebarMobile";
import { myTheme } from "./styles/ThemeStyled";

function App() {
  return (
    <AppStyled className="App">
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
