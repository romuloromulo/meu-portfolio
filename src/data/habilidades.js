import React from "react";
import {
  BiLogoReact,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoGithub,
  BiLogoTypescript,
  BiLogoFirebase,
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
  SiPython,
} from "react-icons/si";

export const habilidades = [
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
  { id: 21, logo: <SiPython />, title: "Python" },

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
