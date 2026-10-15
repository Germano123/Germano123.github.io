/**
 * Cozy Developer Laboratory — Definição das Áreas do Laboratório
 * Conforme Especificação 2 (artifacts/2_portfolio_pages.md - v1.1)
 */

const LAB_AREAS = [
  {
    id: "tools-lab",
    slug: "tools-lab.html",
    icon: "🔧",
    name: {
      pt: "Tools Lab",
      en: "Tools Lab"
    },
    tagline: {
      pt: "Ferramentas e automações para tornar os fluxos de desenvolvimento mais claros, consistentes e eficientes.",
      en: "Tools and automations to make development workflows clearer, consistent, and efficient."
    },
    description: {
      pt: "Espaço dedicado a extensões de editor, scripts de automação, geradores procedurais e ferramentas de produtividade para pipelines de desenvolvimento de jogos.",
      en: "A space dedicated to editor extensions, automation scripts, procedural generators, and productivity tools for game development pipelines."
    }
  },
  {
    id: "art-workshop",
    slug: "art-workshop.html",
    icon: "🎨",
    name: {
      pt: "Art Workshop",
      en: "Art Workshop"
    },
    tagline: {
      pt: "Personagens, assets e animações construídos com atenção à linguagem visual, à estrutura e ao uso em tempo real.",
      en: "Characters, assets, and animations crafted with attention to visual language, structure, and real-time performance."
    },
    description: {
      pt: "Produção de arte técnica e 3D para jogos: modelagem low-poly, texturas e shaders estilizados, além de rigging, skinning e testes de animação.",
      en: "Technical art and 3D production for games: stylized low-poly modeling, textures, custom shaders, rigging, skinning, and animation tests."
    }
  },
  {
    id: "games-prototypes",
    slug: "games-prototypes.html",
    icon: "🎮",
    name: {
      pt: "Games & Prototypes",
      en: "Games & Prototypes"
    },
    tagline: {
      pt: "Jogos, protótipos e experiências interativas em diferentes estágios de desenvolvimento.",
      en: "Games, prototypes, and interactive experiences across various stages of development."
    },
    description: {
      pt: "Jogos concluídos, projetos autorais em andamento, mecânicas táteis e protótipos jogáveis com foco em game feel e atmosfera acolhedora.",
      en: "Completed games, ongoing indie projects, tactile mechanics, and playable prototypes focused on juicy game feel and cozy atmosphere."
    }
  },
  {
    id: "software-shelf",
    slug: "software-shelf.html",
    icon: "📚",
    name: {
      pt: "Software Shelf",
      en: "Software Shelf"
    },
    tagline: {
      pt: "Uma coleção de softwares, aplicações e ferramentas construídas para resolver problemas concretos.",
      en: "A collection of software, applications, and tools built to solve concrete problems."
    },
    description: {
      pt: "Catálogo unificado e pesquisável de softwares, utilitários, bibliotecas e projetos de maior escopo.",
      en: "Unified, searchable catalog of software, utilities, libraries, and broader-scoped applications."
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LAB_AREAS };
}
