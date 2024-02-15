import Sobre from "./sections/Sobre";
import Habilidades from "./sections/Habilidades";
import Projetos from "./sections/Projetos";
import { BrowserRouter } from "react-router-dom";
import Formulario from "./sections/Formulario";
import AppFooter from "./sections/Footer";
import Header from "./Sections/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black">
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
