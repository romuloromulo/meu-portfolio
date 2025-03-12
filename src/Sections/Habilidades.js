import React from "react";
import { habilidades } from "../data/habilidades";

const tecnologias = habilidades.map((tecnologia) => (
  <div
    className="border border-dim-gray-100 rounded-tl-lg rounded-br-lg shadow-sm shadow-dim-gray-100 p-2 w-28 h-28 md:w-28 md:h-32 flex flex-col justify-center items-center gap-1 sm:gap-0 group"
    key={tecnologia.id}
  >
    <div>
      <p className="text-dim-gray-100 group-hover:text-cool-black-300 dark:hover:text-indigo-400  dark:bg-ternary-dark shadow-sm p-1 duration-300 text-4xl  md:text-5xl">
        {tecnologia.logo}
      </p>
    </div>
    <div className="text-center	">
      <p className="text-dim-gray-100 text-sm sm:text-md">{tecnologia.title}</p>
    </div>
  </div>
));

const Habilidades = () => {
  return (
    <section className="container h-1/2 mx-auto">
      {" "}
      <div className=" w-full p-5 mt-6 flex flex-col justify-center items-center">
        <p className=" text-dim-gray text-2xl md:text-3xl font-medium  underline decoration-1  decoration-[#efeff555] underline-offset-8 mb-8 mt-4">
          Habilidades
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-10 gap-y-6 mb-10">
          {tecnologias}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
