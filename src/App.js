import Header from "./sections/Header";
import Sobre from "./sections/Sobre";
import Habilidades from "./sections/Habilidades";
import Projetos from "./sections/Projetos";
import { BrowserRouter } from "react-router-dom";
import Formulario from "./sections/Formulario";
import AppFooter from "./sections/Footer";

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
