import React from "react";
import Detalhes from "../components/contato/detalhesContato";
import FormularioContato from "../components/contato/formularioContato";
import { motion } from "framer-motion";

function Formulario() {
  return (
    <section
      id="Contato"
      className="container mx-auto flex gap-28 md:flex-row flex-col justify-center">
      <FormularioContato />
      <Detalhes />
    </section>
  );
}

export default Formulario;
