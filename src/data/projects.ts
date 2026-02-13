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
import IUTLogo from "../images/IUT.png";

import VuejsIcon from "../images/Vuejs.png";
import TailwindIcon from "../images/Tailwind.png";
import NuxtIcon from "../images/Nuxt.png";

import AmazonSellerIcon from "../images/Amazon-Seller.png";
import IllustratorIcon from "../images/Logo-Illustrator.png";

import ReactIcon from "../images/React.png";
import GsapIcon from "../images/Gsap.png";

import TerreEclat from "../images/accueil.png";
import TerreEclat2 from "../images/produit.png";
import CoverTerreEclat from "../images/cover-terre-eclat.png";

import FigmaIcon from "../images/figma.png";

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
  { 
    slug: "terre-eclat",
    title: "Terre-Éclat", 
    category: "Design Web", 
    year: "2025", 
    client: "IUT de Lens",
    clientLogo: IUTLogo,
    role: "Designer Web",
    website: "https://www.figma.com/proto/ZFNXwjiYYagIXCz0zeEUcL/Carr%C3%A9-Arthur-Terre-%C3%89clat?page-id=1%3A3&node-id=1-4&viewport=553%2C158%2C0.14&t=HbAzBd1LJklHhUHI-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A4",
    description: `Dans le cadre de ma formation en Design Web 2025/2026 à l'IUT de Lens, j'ai conçu l'interface complète d'une marque fictive de céramiques haut de gamme nommée Terre-Éclat. L'objectif était de créer les maquettes d'une homepage et d'une page produit en transformant des wireframes imposés en maquettes.

J'ai commencé par développer une identité visuelle cohérente en définissant la charte graphique, les couleurs et les typographies à partir du logo et des visuels fournis. J'ai ensuite réinterprété librement la structure des wireframes pour proposer une navigation plus rythmée et immersive, tout en veillant à valoriser la collection des produits.

L'ergonomie est restée au cœur de mes préoccupations tout au long du projet. J'ai finalisé le travail en réalisant un prototype navigable sur Figma intégrant des animations fluides. Les livrables finaux comprennent des maquettes desktop au format 1440px ainsi qu'un prototype interactif.`,
    tags: ["UX/UI", "Maquettage", "Figma"], 
    cover: CoverTerreEclat,
    gallery: [
      TerreEclat,
      TerreEclat2
    ],
    technologies: [
      { name: "Figma", icon: FigmaIcon }
    ]
  },
];
