import React from "react";
import {
  BiLogoReact,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoGithub,
  BiLogoTypescript,
  BiLogoFirebase,
  BiLogoMongodb,
} from "react-icons/bi";
import { TbBrandOauth } from "react-icons/tb";
import { FaCcStripe } from "react-icons/fa";

import { RiSupabaseLine } from "react-icons/ri";
import {
  SiNextdotjs,
  SiMysql,
  SiNodedotjs,
  SiRedux,
  SiCssmodules,
  SiJest,
  SiVercel,
  SiPrisma,
  SiMongodb,
} from "react-icons/si";

const tecData = [
  { id: 1, logo: <BiLogoJavascript />, title: "JavaScript" },
  { id: 7, logo: <BiLogoTypescript />, title: "TypeScript" },

  { id: 2, logo: <SiNextdotjs />, title: "Next.js" },
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
  { id: 3, logo: <BiLogoHtml5 />, title: "HTML5" },
  { id: 17, logo: <SiCssmodules />, title: "Css Modules" },
  { id: 6, logo: <BiLogoTailwindCss />, title: "Tailwind CSS" },
  { id: 21, logo: <SiMongodb />, title: "MongoDB" },

  { id: 8, logo: <BiLogoGithub />, title: "Github" },
  { id: 10, logo: <RiSupabaseLine />, title: "Supabase" },
  { id: 15, logo: <SiPrisma />, title: "Prisma" },
  {
    id: 9,
    logo: <BiLogoFirebase />,
    title: "Firebase",
  },
  { id: 11, logo: <SiMysql />, title: "MySQL" },
  { id: 12, logo: <SiNodedotjs />, title: "Node.js" },
  { id: 13, logo: <SiRedux />, title: "Redux" },
  { id: 16, logo: <SiJest />, title: "Jest" },
  { id: 18, logo: <SiVercel />, title: "Vercel" },
  { id: 19, logo: <FaCcStripe />, title: "Stripe" },
  { id: 20, logo: <TbBrandOauth />, title: "OAuth" },
];

const tecnologias = tecData.map((tecnologia) => (
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
