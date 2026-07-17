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
import RoletaEqt from "../images/roleta-eqt.png";
import LencoisJazzBlues from "../images/lencoisjazzeblues.png";

export const projectsData = [
  {
    id: 9,
    title: "Lençois Jazz e Blues Festival",
    category: "Web App",
    img: LencoisJazzBlues,
    description:
      "Site da edição mais recente do Festival Lençóis Jazz e Blues, desenvolvido em formato single page. Construído com Next.js e TypeScript, com estilização em Tailwind CSS, apresentando a programação e informações do evento de forma direta e responsiva.",
    linkSite: "https://lencoisjazzebluesfestival.vercel.app/",
    linkGit: "https://github.com/romuloromulo/festivaljazzeblues2025",
    tecnologias: [
      <SiNextdotjs size={22} />,
      <BiLogoTypescript size={22} />,
      <BiLogoTailwindCss size={22} />,
    ],
    ProjectHeader: {
      title: "Lençois Jazz e Blues Festival",
      publishDate: "17 de julho de 2026",
      tags: "UI / Frontend / Web-design",
    },
  },
  {
    id: 8,
    title: "Roleta Sorteio Equatorial",
    category: "Web App",
    img: RoletaEqt,
    description:
      "Roleta interativa desenvolvida especificamente para uma ação da Equatorial Energia, com animação de rotação e sistema de sorteio que define o item sorteado. Não possui responsividade pois foi desenvolvida para um totem específico. Cada opção possui música e animação próprias, disparadas de acordo com o resultado, criando uma experiência mais lúdica e personalizada. Conta ainda com um painel de edição, permitindo adicionar, editar ou remover os itens da roleta dinamicamente.",
    linkSite: "https://roleta-eqt.vercel.app/",
    linkGit: "https://github.com/romuloromulo/roleta-eqt",
    tecnologias: [
      <BiLogoReact size={22} />,
      <BiLogoTypescript size={22} />,
      <BiLogoTailwindCss size={22} />,
    ],
    ProjectHeader: {
      title: "Roleta Sorteio Equatorial",
      publishDate: "17 de julho de 2026",
      tags: "UI / Frontend",
    },
  },
  {
    id: 7,
    title: "Lençois Instrumental",
    category: "Web App",
    img: Lencois,
    underMaintenance: true,
    description:
      "Site desenvolvido sob encomenda para o Festival Lençóis Instrumental, do design à implementação. Criei toda a identidade visual da página e a construí com Next.js, aproveitando otimização de carregamento de imagens e animações suaves para entregar uma navegação fluida. Estilizado com Tailwind CSS e totalmente responsivo, o site foi pensado para representar a atmosfera do festival em qualquer dispositivo.",
    linkSite: "https://lencoisinstrumental.vercel.app/",
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
    underMaintenance: true,
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
    underMaintenance: true,
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
    linkSite: "https://culturartemaranhao-romuloromulo.vercel.app/",
    linkGit: "https://github.com/romuloromulo/culturarte",
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
