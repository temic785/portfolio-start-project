import "./App.css";
import { Navigation } from "./components/menu/Navigation";
import { Footer } from "./layout/footer/Footer";
import { Main } from "./layout/sections/main/Main";
import { Sidebar } from "./layout/sidebar/Sidebar";

// import superImg from "./"

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
