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
      "Site de pizzaria fictícia costruido usando Next.js 13 e Supabase como o backend. Oferece um sistema completo de gerenciamento de cardápio, pedidos e login. Possui Stripe integrado para processamento de pagamentos seguros e convenientes. O design, criado com detalhes minuciosos, é estilizado usando o Tailwind CSS. O site é completamente responsivo, garantindo uma ótima experiência em dispositivos móveis e desktops.",
    linkSite: "https://totalpizza.vercel.app/",
    linkGit: "https://github.com/romuloromulo/TOTALPIZZA",
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
