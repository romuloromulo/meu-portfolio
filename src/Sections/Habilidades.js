import React from "react";
import {
  BiLogoReact,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoGithub,
  BiLogoTypescript,
  BiLogoFirebase,
  BiLogoMongodb,
} from "react-icons/bi";

const tecData = [
  { id: 1, logo: <BiLogoJavascript />, title: "JavaScript" },
  { id: 2, logo: <BiLogoCss3 />, title: "CSS" },
  { id: 3, logo: <BiLogoHtml5 />, title: "HTML" },
  {
    id: 4,
    logo: <BiLogoReact />,
    title: "React JS",
  },
  {
    id: 5,
    logo: <BiLogoReact />,
    title: "React Native",
  },
  { id: 6, logo: <BiLogoTailwindCss />, title: "Tailwind CSS" },
  { id: 7, logo: <BiLogoTypescript />, title: "TypeScript" },
  { id: 8, logo: <BiLogoGithub />, title: "Git" },
  {
    id: 9,
    logo: <BiLogoFirebase />,
    title: "Firebase",
  },
  { id: 10, logo: <BiLogoMongodb />, title: "MongoDB" },
];

const tecnologias = tecData.map((tecnologia) => (
  <div
    className="border border-dim-gray-100 rounded-tl-lg rounded-br-lg shadow-sm shadow-dim-gray-100 p-2 w-24 h-24  md:w-28 md:h-32 flex flex-col justify-center items-center gap-1 sm:gap-0 "
    key={tecnologia.id}>
    <div>
      <p className="text-dim-gray-100 hover:text-cool-black-300 dark:hover:text-indigo-400  dark:bg-ternary-dark shadow-sm p-1 duration-300 text-3xl sm:text-4xl md:text-5xl">
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
        <p className=" text-dim-gray-100 text-2xl md:text-3xl font-medium  underline decoration-1  decoration-[#efeff555] underline-offset-8 mb-8 mt-4">
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
