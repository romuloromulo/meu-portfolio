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
              Olá! Me chamo <b>Rômulo Viana</b>e sou um desenvolvedor full stack
              com mais de um ano de experiência em programação e
              desenvolvimento. Atualmente sou estágiario de engenharia de
              software no Grupo Equatorial, onde trabalho em diversas frentes do
              projeto, do back-end ao frond-end. Sou estudante de Engenheria de
              Software na UNDB e faço parte da Software House UNDB. Trabalho
              principalmente com tecnologias como{" "}
              <b>
                Node.js, TypeScript, Next.js, React, React Native, MySQL,
                Python, Azure Devops, Supabase, HTML, CSS, Tailwind CSS,
                Bootstrap, SHADCN/UI, Firebase, Google Cloud, Prisma e Drizzle.
              </b>{" "}
              Busco sempre estudar constantemente e buscar maneiras de aprimorar
              minhas habilidades. Além disso, sou produtor musical, com foco
              principalmente em música eletrônica, e DJ. Essa experiência me
              confere uma visão diversificada e criativa na resolução de
              problemas e na gestão de tarefas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
