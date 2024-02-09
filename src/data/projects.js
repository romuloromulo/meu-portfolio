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

import { RiSupabaseLine } from "react-icons/ri";
import {
  SiNextdotjs,
  SiMysql,
  SiNodedotjs,
  SiRedux,
  SiBootstrap,
  SiCss3,
  SiCssmodules,
  SiJest,
  SiVercel,
  SiPrisma,
} from "react-icons/si";
import { FaCcStripe } from "react-icons/fa";

import TotalPizzaImage from "../images/TOTALPIZZAIMG.png";
import MapTreino from "../images/MapTreino.png";
import Forkify from "../images/FORKIFY.png";
import MyRecipes from "../images/MyRecipe.png";
import Culturarte from "../images/culturarte.png";

export const projectsData = [
  {
    id: 1,
    title: "TOTALPIZZA",
    category: "Web App",
    img: TotalPizzaImage,
    description:
      "Site de pizzaria fictícia com e-commerce integrado. Além disso, também possui histórico de compras e de pedidos, menu, sistema de pagamentos com Stripe, sistema de login, sign-up e banco de dados com Supabase e Prisma como ORM. Reponsivo em todos os aparelhos.",
    linkSite: "https://totalpizza.vercel.app/",
    linkGit: "https://github.com/romuloromulo/TOTALPIZZA",
    tecnologias: [
      <SiNextdotjs size={22} />,
      <RiSupabaseLine size={22} />,
      <FaCcStripe size={22} />,
      <BiLogoTailwindCss size={22} />,
      <SiPrisma size={22} />,
    ],
    ProjectHeader: {
      title: "TOTALPIZZA - Restaurante e Delivery",
      publishDate: "30 de Agosto de 2023",
      tags: "UI / Frontend",
    },
  },
  {
    id: 5,
    title: "CULTURARTE MARANHÃO",
    category: "Web App",
    img: Culturarte,
    description:
      "Site personalizado para o projeto cultural Culturarte Maranhão. Assumi a responsabilidade pelo design web e pelo desenvolvimento integral do projeto. Utilizei o framework Next.js, incorporando técnicas modernas de carregamento e otimização de recursos, integrei estilização visuais por meio do Tailwind CSS e animações com o Framer Motion. O resultado é um site responsivo, projetado para atender às necessidades do projeto, proporcionando uma experiência de usuário aprimorada.",
    linkSite: "https://www.culturartemaranhao.com/",
    linkGit: "hhttps://github.com/romuloromulo/culturarte",
    ProjectHeader: {
      title: "CULTURARTE MARANHÃO - Festival de Cultura",
      publishDate: "20 de outubro de 2023",
      tags: "UI / Frontend / Web-design",
    },
  },
  {
    id: 2,
    title: "MapTreino",
    category: "Web App",
    img: MapTreino,
    description:
      "Site para catalogar os lugares em que você treinou num mapa interativo, com parâmetros de duração, distância, cadência e ganho de elevação. Apenas clique no mapa no lugar que praticou o treino e adicione as informações. Feito com JavaScript puro e CSS.",
    linkSite: "https://maptreino.vercel.app/",
    linkGit: "https://github.com/romuloromulo/MapTreino",
    ProjectHeader: {
      title: "MAPTREINO - mapeie seus treinos",
      publishDate: "30 de Agosto de 2023",
      tags: "UI / Frontend",
    },
  },
  {
    id: 3,
    title: "Forkify",
    category: "Web App",
    img: Forkify,
    description:
      "Aplicativo de busca de receitas com os mais varíados tipos de comida. É alimentado por uma API que contém todos os dados. Projeto feito durante o curso de JavaScript e webdesign do Jonas Schmedtmann",
    linkSite: "https://forkify-tau.vercel.app/",
    linkGit: "https://github.com/romuloromulo/forkify-course-project",
    ProjectHeader: {
      title: "Forkify - Ache sua receita favorita",
      publishDate: "30 de Agosto de 2023",
      tags: "UI / Frontend",
    },
  },
  {
    id: 4,
    title: "MyRecipes",
    category: "Mobile App",
    img: MyRecipes,
    description:
      "Aplicativo de celular de busca de diferentes receitas dividas por categorias, utilizando as ferramentas de redux e react navigation. Feito no React Native usando a plataforma Expo Go.",
    linkSite: null,
    linkGit: "https://github.com/romuloromulo/myrecipes-app",
    ProjectHeader: {
      title: "MyRecipes",
      publishDate: "30 de Agosto de 2023",
      tags: "UI / Frontend",
    },
  },
];
