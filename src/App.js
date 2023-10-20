import "./App.css";
import Header from "./Sections/Header";
import Sobre from "./Sections/Sobre";
import Habilidades from "./Sections/Habilidades";
import Projetos from "./Sections/Projetos";
import { BrowserRouter } from "react-router-dom";
import Formulario from "./Sections/Formulario";
import AppFooter from "./Sections/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-cool-black-800">
        <Header />
        <Sobre />
        <Habilidades />
        <Projetos />
        <Formulario />
        <AppFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
