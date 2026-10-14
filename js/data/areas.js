/**
 * Cozy Developer Laboratory — Definição das Áreas do Laboratório
 * Conforme Seção 3.2 do documento de especificação de engenharia.
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
      pt: "Engenharia de ferramentas, extensões de editor e pipelines de produção.",
      en: "Tools engineering, editor extensions, and production pipelines."
    },
    description: {
      pt: "Espaço dedicado à automação e desenvolvimento de ferramentas para otimizar fluxos de trabalho em game development, reduzindo tarefas repetitivas e acelerando o design.",
      en: "A space dedicated to automation and custom tool development, optimizing game dev workflows, cutting repetitive tasks, and speeding up design."
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
      pt: "Technical art, shaders, modelagem 3D low-poly e otimização de assets.",
      en: "Technical art, shaders, low-poly 3D modeling, and asset optimization."
    },
    description: {
      pt: "Oficina onde a estética encontra a performance. Criação de modelos tridimensionais, mapeamento UV eficiente e autoria de shaders para visuais estilizados.",
      en: "Where aesthetics meet performance. Crafting 3D models, efficient UV mapping, and shader authoring for charming stylized worlds."
    }
  },
  {
    id: "animation-lab",
    slug: "animation-lab.html",
    icon: "🎬",
    name: {
      pt: "Animation Lab",
      en: "Animation Lab"
    },
    tagline: {
      pt: "Pipelines de personagens, rigging, skinning e integração em engines.",
      en: "Character pipelines, rigging, skinning, and game engine integration."
    },
    description: {
      pt: "Estudos dedicados a dar vida a personagens através de esqueletos otimizados, deformação limpa de malhas e blend trees fluidas.",
      en: "Studies dedicated to bringing characters to life through optimized rigs, clean mesh deformation, and fluid blend trees."
    }
  },
  {
    id: "game-systems",
    slug: "game-systems.html",
    icon: "🎮",
    name: {
      pt: "Game Systems",
      en: "Game Systems"
    },
    tagline: {
      pt: "Arquitetura de jogabilidade, mecânicas táteis e geração procedural.",
      en: "Gameplay architecture, tactile mechanics, and procedural generation."
    },
    description: {
      pt: "Engenharia de software aplicada a jogos: padrões arquiteturais sustentáveis, 'game feel' satisfatório e sistemas de regras dinâmicos.",
      en: "Software engineering applied to games: sustainable architectural patterns, juicy game feel, and dynamic gameplay systems."
    }
  },
  {
    id: "experiments",
    slug: "experiments.html",
    icon: "🧪",
    name: {
      pt: "Experiments",
      en: "Experiments"
    },
    tagline: {
      pt: "Provas de conceito, benchmarks e protótipos exploratórios.",
      en: "Proofs of concept, benchmarks, and exploratory prototypes."
    },
    description: {
      pt: "Espaço para prototipagem rápida, testes de limites de desempenho e exploração de novas tecnologias sem compromisso com produtos acabados.",
      en: "A playground for rapid prototyping, performance limit tests, and exploring new technologies without the constraints of finished products."
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
      pt: "Catálogo unificado e pesquisável de todos os projetos e softwares.",
      en: "Unified, searchable catalog of all projects, tools, and software."
    },
    description: {
      pt: "A prateleira central de projetos: filtre por tecnologias, áreas de atuação e status de desenvolvimento.",
      en: "The central project shelf: filter by technologies, laboratory areas, and development status."
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LAB_AREAS };
}
