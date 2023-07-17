import "./App.css";
import Header from "./components/Sections/Header";
import React from "react";
import Sobre from "./components/Sections/Sobre";
import Habilidades from "./components/Sections/Habilidades";
import Projetos from "./components/Sections/Projetos";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-cool-black-800">
        <Header />
        <Sobre />
        <Habilidades />
        <Projetos />
      </div>
    </BrowserRouter>
  );
}

export default App;
