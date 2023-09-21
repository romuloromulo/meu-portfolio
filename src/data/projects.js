import TotalPizzaImage from "../images/TOTALPIZZAIMG.png";
import MapTreino from "../images/MapTreino.png";
import Forkify from "../images/FORKIFY.png";
import MyRecipes from "../images/MyRecipe.png";

export const projectsData = [
  {
    id: 1,
    title: "TOTALPIZZA",
    category: "Web Application",
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
    id: 2,
    title: "MapTreino",
    category: "Web Application",
    img: MapTreino,
    description:
      "Site para catalogar os lugares em que você treinou num mapa interativo, com parametros de duração, distância, cadência e ganho de elevação. Apenas clique no mapa no lugar que praticou o treino e adicione as informações. Feito com JavaScript puro e CSS.",
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
    category: "Web Application",
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
    category: "Mobile Application",
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
