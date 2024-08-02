import "./App.css";
import { Navigation } from "./components/menu/Navigation";
import { Main } from "./layout/sections/main/Main";
import { Sidebar } from "./layout/sidebar/Sidebar";
import { SidebarMobile } from "./layout/sidebar/SidebarMobile";

// import superImg from "./"

function App() {
  return (
    <div className="App">
      <Sidebar />
      <SidebarMobile />
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
