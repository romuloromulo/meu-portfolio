import React from "react";
import {
  BiLogoReact,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";

import { RiSupabaseLine } from "react-icons/ri";
import {
  SiNextdotjs,
  SiRedux,
  SiCssmodules,
  SiJest,
  SiPrisma,
  SiJavascript,
} from "react-icons/si";
import { FaCcStripe } from "react-icons/fa";

import TotalPizzaImage from "../images/TOTALPIZZAIMG.png";
import MapTreino from "../images/MapTreino.png";
import Forkify from "../images/FORKIFY.png";
import MyRecipes from "../images/MyRecipe.png";
import Culturarte from "../images/culturarte.png";
import Workspress from "../images/Workspress.png";
import Lencois from "../images/lencois.png";

export const projectsData = [
  {
    id: 7,
    title: "Lençois Instrumental",
    category: "Web App",
    img: Lencois,
    description:
      "Site feito sob encomenda para o Festival Lençóis Instrumental. Totalmente responsivo.",
    linkSite: "https://www.lencoisinstrumental.com/",
    linkGit: "https://github.com/romuloromulo/lencoisjazzeblues",
    tecnologias: [
      <SiNextdotjs size={22} />,
      <SiJavascript size={22} />,
      <BiLogoTailwindCss size={22} />,
    ],
    ProjectHeader: {
      title: "TOTALPIZZA - Restaurante e Delivery",
      publishDate: "30 de Agosto de 2023",
      tags: "UI / Frontend",
    },
  },
  {
    id: 6,
    title: "Workspress",
    category: "Web App",
    img: Workspress,
    description:
      "SaaS que consiste numa plataforma de áreas de trabalho privadas e compartilhadas, projetada para permitir a edição colaborativa em tempo real entre usuários. Inspirada no Notion, a aplicação utiliza tecnologias de ponta, como socket.io para facilitar a comunicação em tempo real, Realtime Cursors para a visualização simultânea de edições, Stripe para transações seguras, Drizzle ORM para gerenciamento eficiente de dados. Além disso, a integração com o Supabase e Sockets potencializa ainda mais a performance e a colaboração efetiva. Essa SaaS oferece uma solução moderna e eficaz para ambientes de trabalho colaborativos.",
    linkSite: "https://workspress.vercel.app/",
    linkGit: "https://github.com/romuloromulo/workspress-app",
    tecnologias: [
      <SiNextdotjs size={22} />,
      <BiLogoTypescript size={22} />,
      <RiSupabaseLine size={22} />,
      <FaCcStripe size={22} />,
      <BiLogoTailwindCss size={22} />,
    ],
    ProjectHeader: {
      title: "TOTALPIZZA - Restaurante e Delivery",
      publishDate: "30 de Agosto de 2023",
      tags: "UI / Frontend",
    },
  },
  {
    id: 1,
    title: "TOTALPIZZA",
    category: "Web App",
    img: TotalPizzaImage,
    description:
      "Atualmente sem as principais funcionalidades por falta de tempo para manutenção, irá voltar a funcionalidade normal em breve. Site de pizzaria fictícia com e-commerce integrado. Além disso, também possui histórico de compras e de pedidos, menu, sistema de pagamentos com Stripe, sistema de login, sign-up e banco de dados com Supabase e Prisma como ORM. Reponsivo em todos os aparelhos.",
    linkSite: "https://totalpizza.vercel.app/",
    linkGit: "https://github.com/romuloromulo/TOTALPIZZA",
    tecnologias: [
      <SiNextdotjs size={22} />,
      <RiSupabaseLine size={22} />,
      <FaCcStripe size={22} />,
      <BiLogoTailwindCss size={22} />,
      <SiPrisma size={22} />,
      <BiLogoJavascript size={22} />,
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
      "Site personalizado para o projeto cultural Culturarte Maranhão. Assumi a responsabilidade pelo design web e pelo desenvolvimento integral do projeto. Utilizei o framework Next.js, incorporando técnicas modernas de carregamento e otimização de recursos. O resultado é um site responsivo, projetado para atender às necessidades do projeto.",
    linkSite: "https://www.culturartemaranhao.com/",
    linkGit: "hhttps://github.com/romuloromulo/culturarte",
    tecnologias: [
      <SiNextdotjs size={22} />,
      <RiSupabaseLine size={22} />,
      <BiLogoTailwindCss size={22} />,
      <SiJest size={22} />,
    ],
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
    tecnologias: [
      <BiLogoJavascript size={32} />,
      <BiLogoHtml5 size={32} />,
      <SiCssmodules size={32} />,
    ],
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
    tecnologias: [
      <BiLogoJavascript size={32} />,
      <BiLogoHtml5 size={32} />,
      <SiCssmodules size={32} />,
    ],
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
    tecnologias: [
      <BiLogoReact size={32} />,
      <BiLogoTailwindCss size={32} />,
      <BiLogoJavascript size={32} />,
      <SiRedux size={22} />,
    ],
    ProjectHeader: {
      title: "MyRecipes",
      publishDate: "30 de Agosto de 2023",
      tags: "UI / Frontend",
    },
  },
];
