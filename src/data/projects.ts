// src/data/projects.ts
import BBT from "../images/BBT.png";
import Bollaert1 from "../images/Bollaert-1.png";
import Bollaert2 from "../images/Bollaert-2.png";

import BoutteAmazon from "../images/Boutte-Amazon.png";
import BoutteAmazon2 from "../images/Boutte-Amazon2.png";
import BoutteAmazon3 from "../images/Boutte-Amazon3.png";

import Escape from "../images/Escape.png";
import Escape2 from "../images/Escape2.png";
import Escape3 from "../images/Escape3.png";

import RCLensLogo from "../images/Rc-Lens.png";
import IUTLogo from "../images/IUT.jpg";

import VuejsIcon from "../images/Vuejs.png";
import TailwindIcon from "../images/Tailwind.png";
import NuxtIcon from "../images/Nuxt.png";

import AmazonSellerIcon from "../images/Amazon-Seller.png";
import IllustratorIcon from "../images/Logo-Illustrator.png";

import ReactIcon from "../images/React.png";
import GsapIcon from "../images/Gsap.png";

export const projects = [
  { 
    slug: "BollaertBusinessTeam",
    title: "Bollaert Business Team", 
    category: "Développement web", 
    year: "2025", 
    client: "RC Lens",
    clientLogo: RCLensLogo,
    role: "Développeur web",
    tags: ["Front-end", "Back-end", "Maquettage"],
    website: "https://www.bollaertbusinessteam.fr",
    description: `Lors de mon stage chez Waigéo, j’ai participé à la refonte du site VIP du RC Lens. J’ai notamment réintégré l’ensemble du front-end en utilisant Vue.js et Tailwind CSS afin d’améliorer la performance, la fluidité et la cohérence visuelle du site.

J’ai également contribué au design de plusieurs pages, notamment celles dédiées aux offres (événements, hospitalités et sponsoring), en travaillant sur leur ergonomie et leur valorisation.

En parallèle, j’ai développé une interface d’administration simplifiée permettant de mettre à jour certains contenus du site plus facilement, afin d’améliorer la gestion quotidienne du projet.`,
    cover: BBT,
    gallery: [
      Bollaert1,
      Bollaert2,
    ],
    technologies: [
      { name: "Vue.js", icon: VuejsIcon },
      { name: "Tailwind CSS", icon: TailwindIcon },
      { name: "Nuxt.js", icon: NuxtIcon }
    ]
  },
  { 
    slug: "Marketplace-Boutte",
    title: "Marketplace Amazon Boutté", 
    category: "Marketing", 
    year: "2025", 
    client: "Boutté SAS",
    clientLogo: null,
    role: "Webmarketer",
    website: "https://www.amazon.fr/stores/Boutt%C3%A9/page/F719E40A-1C44-4B9C-B32C-AE69BDA77EA8?lp_asin=B0FGK3J5YT&ref_=ast_bln",
    description: `Durant mon alternance chez Boutté SAS, j’ai pris en charge la gestion de leur marketplace Amazon via Seller Central. Mes missions incluaient l’importation et l’optimisation des fiches produits (bullet points, descriptions, images, infographies, etc.) ainsi que l’amélioration de la qualité des contenus. J’ai également réalisé la refonte visuelle de leur boutique Amazon afin de l’adapter à la nouvelle charte graphique de l’entreprise.`,
    tags: ["Marketplace", "Amazon", "E-commerce"], 
    cover: BoutteAmazon,
    gallery: [
      BoutteAmazon2,
      BoutteAmazon3
    ],
    technologies: [
      { name: "Amazon Seller Central", icon: AmazonSellerIcon },
      { name: "Illustrator", icon: IllustratorIcon }
    ]
  },  
  { 
    slug: "escape-game",
    title: "Escape Game en Ligne", 
    category: "Développement web", 
    year: "2025", 
    client: "IUT de Lens",
    clientLogo: IUTLogo,
    role: "Développeur",
    website: "https://escape-game-olive.vercel.app/",
    description: "Création d’un escape game en ligne réalisée dans le cadre d’une SAE, en collaboration avec les étudiants de la spécialité audiovisuelle. Développé avec React pour une gestion fluide des états et des animations. L’immersion est renforcée grâce à des effets de parallaxe mis en place via GSAP.",
    tags: ["React", "GSAP", "Parallaxe"], 
    cover: Escape,
    gallery: [
      Escape2,
      Escape3
    ],
    technologies: [
      { name: "React", icon: ReactIcon },
      { name: "GSAP", icon: GsapIcon }
    ]
  },
];
