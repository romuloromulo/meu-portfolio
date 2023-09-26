import React from "react";
import Detalhes from "../components/contato/detalhesContato";
import FormularioContato from "../components/contato/formularioContato";
import { motion } from "framer-motion";

function Formulario() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}>
      <section
        id="Contato"
        className="container mx-auto flex  lg:flex-row flex-col justify-center ">
        <FormularioContato />
        <Detalhes />
      </section>
    </motion.div>
  );
}

export default Formulario;
