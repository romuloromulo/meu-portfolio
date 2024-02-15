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
        <div className="w-[90%] flex flex-col justify-center items-center mt-10 group">
          <div className="border p-2 sm:p-8 md:p-10  lg:p-14  rounded-lg border-cool-black-300  ">
            <p className="text-dim-gray md:text-base text-sm ">
              Olá! Meu nome é <b>Rômulo Viana</b>, sou um desenvolvedor full
              stack com um pouco mais de um ano de experiência no mundo da
              programação. Durante minha jornada, mergulhei profundamente em
              tecnologias modernas, aprimorando minhas habilidades em{" "}
              <b>
                Next.js, React, React Native,TypeScript, MySQL, Supabase,
                Firebase, Google Cloud e Tailwind CSS
              </b>
              . Busco sempre estudar constantemente e buscar maneiras de
              aprimorar minhas habilidades. No momento estou me aprofundando em{" "}
              <b>Node.js</b>. Minha maior motivação é continuar evoluindo até me
              tornar um desenvolvedor pleno. Além de programador, também sou
              produtor musical e DJ, o que me torna ainda mais versátil ao achar
              soluções e dar pontos de vista.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
