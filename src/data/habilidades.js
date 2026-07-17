import React from "react";
import {
  BiLogoReact,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoGithub,
  BiLogoTypescript,
  BiLogoDocker,
} from "react-icons/bi";

import {
  SiNextdotjs,
  SiMysql,
  SiNodedotjs,
  SiJest,
  SiPrisma,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiExpress,
  SiVitest,
  SiSwagger,
  SiQuarkus,
  SiGit,
  SiVercel,
  SiSupabase,
} from "react-icons/si";

import { FaJava } from "react-icons/fa6";
import { RiSupabaseLine } from "react-icons/ri";

export const habilidades = [
  { id: 1, logo: <BiLogoTypescript />, title: "TypeScript" },
  { id: 2, logo: <BiLogoJavascript />, title: "JavaScript" },

  { id: 3, logo: <BiLogoReact />, title: "React" },
  { id: 4, logo: <SiNextdotjs />, title: "Next.js" },
  { id: 5, logo: <BiLogoReact />, title: "React Native" },

  { id: 6, logo: <SiNodedotjs />, title: "Node.js" },
  { id: 7, logo: <SiExpress />, title: "Express" },

  { id: 8, logo: <FaJava />, title: "Java" },
  { id: 9, logo: <SiQuarkus />, title: "Quarkus" },

  { id: 10, logo: <SiPostgresql />, title: "PostgreSQL" },
  { id: 11, logo: <SiMysql />, title: "MySQL" },
  { id: 12, logo: <SiMongodb />, title: "MongoDB" },
  { id: 13, logo: <SiRedis />, title: "Redis" },

  { id: 14, logo: <BiLogoDocker />, title: "Docker" },

  { id: 15, logo: <SiPrisma />, title: "Prisma" },
  { id: 16, logo: <RiSupabaseLine />, title: "Supabase" },

  { id: 17, logo: <SiJest />, title: "Jest" },
  { id: 18, logo: <SiVitest />, title: "Vitest" },

  { id: 19, logo: <SiSwagger />, title: "Swagger" },

  { id: 20, logo: <BiLogoTailwindCss />, title: "Tailwind CSS" },

  { id: 21, logo: <SiGit />, title: "Git" },
  { id: 22, logo: <BiLogoGithub />, title: "GitHub" },

  { id: 23, logo: <SiPython />, title: "Python" },
  { id: 24, logo: <SiSupabase />, title: "Supabase" },
  { id: 25, logo: <SiVercel />, title: "Vercel" },
];
