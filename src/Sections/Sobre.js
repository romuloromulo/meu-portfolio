import React from "react";

function Sobre() {
  return (
    <section id="Sobre" className="container mx-auto h-1/2">
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1
            className="text-dim-gray text-2xl sm:text-3xl md:text-4xl font-medium  underline decoration-1  decoration-[#efeff555] underline-offset-8
">
            Sobre mim{" "}
          </h1>
        </div>
        <div className="w-4/5 flex flex-col justify-center items-center mt-10 group">
          <div className="border p-14  rounded-lg border-cool-black-300  ">
            <p className="text-dim-gray ">
              Olá! Meu nome é <b>Rômulo</b>, e sou um apaixonado desenvolvedor
              front-end com um pouco mais de um ano de experiência no mundo da
              programação. Durante minha jornada, mergulhei profundamente em
              tecnologias modernas, aprimorando minhas habilidades em Next.js,
              React e React Native. Minha busca incessante pelo conhecimento me
              leva a estudar constantemente e buscar maneiras de aprimorar
              minhas habilidades. Sou movido pela minha curiosidade que me
              impulsiona a criar soluções elegantes e funcionais para os
              desafios que encontro. Minha maior motivação é continuar evoluindo
              até me tornar um desenvolvedor pleno. Estou entusiasmado com as
              oportunidades que o futuro reserva e ansioso para enfrentar novos
              desafios enquanto continuo minha jornada no desenvolvimento
              front-end.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
