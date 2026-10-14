/**
 * Cozy Developer Laboratory — Base Canônica de Projetos
 * Conforme Seção 5 do documento de especificação de engenharia.
 * Cada projeto possui um registro canônico com suporte bilíngue (PT/EN).
 */

const PROJECTS = [
  {
    id: "cozy-tilemap-automator",
    slug: "cozy-tilemap-automator",
    title: "Tilemap & Prop Auto-Placement Tool",
    projectType: "tool",
    areas: ["tools-lab", "software-shelf"],
    technologies: ["C#", "Unity", "Editor Scripting", "Tools Dev"],
    status: "completed",
    visibility: "public",
    featured: true,
    cover: "assets/background.jpg",
    summary: {
      pt: "Ferramenta de extensão do editor da Unity para pintura automatizada de cenários e encaixe contextual de props.",
      en: "Unity editor extension tool for automated scenery painting and contextual prop placement."
    },
    description: {
      pt: "Uma ferramenta de produtividade para level designers que automatiza a colocação de variações de terreno, vegetação e elementos decorativos com base em regras de adjacência.",
      en: "A productivity tool for level designers automating terrain variations, foliage, and decorative prop placement based on adjacency rules."
    },
    problem: {
      pt: "O posicionamento manual de props e variações de tiles em níveis extensos consumia até 60% do tempo de montagem de cenários.",
      en: "Manual placement of props and tile variations in large levels consumed up to 60% of environment assembly time."
    },
    solution: {
      pt: "Desenvolvimento de uma ferramenta Custom Editor com pincéis baseados em regras (Rule Brushes avançados) e posicionamento estocástico de props com checagem de sobreposição em tempo real.",
      en: "Developed a Custom Editor tool with rule-based brushes and stochastic prop placement with real-time overlap validation."
    },
    contributions: {
      pt: "Arquitetura e desenvolvimento integral do script de editor, interface Custom Inspector na Unity e algoritmo de validação geométrica.",
      en: "Full architecture and development of editor scripts, Unity Custom Inspector UI, and geometric validation algorithm."
    },
    technicalDetails: {
      pt: "Implementado em C# para Unity, utilizando ScriptableObjects para armazenar paletas de regras. Otimizado com algoritmos de grid espacial para manter taxa de atualização de 60fps na Scene View durante a pintura.",
      en: "Built in C# for Unity using ScriptableObjects for rule palette storage. Optimized with spatial grid algorithms maintaining 60fps Scene View updates during painting."
    },
    results: {
      pt: "Redução expressiva no tempo de montagem de salas e ambientes, garantindo consistência visual e eliminação de sobreposições acidentais.",
      en: "Significant reduction in room and environment composition time, ensuring visual consistency and preventing accidental overlaps."
    },
    repositoryUrl: "https://github.com/Germano123",
    buildUrl: null,
    documentationUrl: null
  },
  {
    id: "lowpoly-nature-kit",
    slug: "lowpoly-nature-kit",
    title: "Stylized Cozy Nature Asset Kit & Shaders",
    projectType: "tech-art",
    areas: ["art-workshop", "software-shelf"],
    technologies: ["Blender", "Shader Graph", "Low-Poly", "UV Mapping"],
    status: "completed",
    visibility: "public",
    featured: true,
    cover: "assets/background.jpg",
    summary: {
      pt: "Kit modular de modelos 3D low-poly estilizados com shaders de folhagem interativa ao vento e gradientes de cores.",
      en: "Modular low-poly stylized 3D asset kit with wind-interactive foliage shaders and color gradients."
    },
    problem: {
      pt: "Ambientes acolhedores demandam paletas suaves e animações orgânicas de vento, sem sobrecarregar a contagem de polígonos ou draw calls em hardware modesto.",
      en: "Cozy environments require soft palettes and organic wind animation without bloating polygon counts or draw calls on modest hardware."
    },
    solution: {
      pt: "Modelagem de mais de 30 assets com atlas de texturas compartilhado (1 material único para a cena inteira) e vertex-color shader para simulação de vento suave nos vértices.",
      en: "Modeled 30+ assets using a shared texture atlas (1 single material for the entire scene) and a vertex-color shader for gentle vertex wind simulation."
    },
    contributions: {
      pt: "Modelagem 3D no Blender, mapeamento UV otimizado em atlas, autoria do shader de vento e iluminação estilizada na engine.",
      en: "3D modeling in Blender, UV atlas mapping, wind shader authoring, and stylized lighting setup in-engine."
    },
    technicalDetails: {
      pt: "Os assets utilizam uma paleta de textura de 256x256 pixels com técnica de UV compacta. O deslocamento de vento ocorre via vertex shader combinando senos e cossenos modulados pelas cores de vértice.",
      en: "Assets utilize a 256x256 pixel texture palette with compact UV mapping. Wind displacement runs via vertex shader blending sine/cosine waves modulated by vertex colors."
    },
    results: {
      pt: "Cena completa rodando em menos de 10 draw calls em dispositivos móveis e desktops, com estética calorosa e dinâmica.",
      en: "Complete scene running in under 10 draw calls on mobile and desktop devices with a warm and dynamic aesthetic."
    },
    repositoryUrl: "https://github.com/Germano123",
    buildUrl: null,
    documentationUrl: null
  },
  {
    id: "cozy-interaction-framework",
    slug: "cozy-interaction-framework",
    title: "Tactile Interaction & Dialogue System",
    projectType: "game-system",
    areas: ["game-systems", "software-shelf"],
    technologies: ["Godot Engine", "GDScript", "Game Architecture", "UI/UX"],
    status: "in-progress",
    visibility: "public",
    featured: true,
    cover: "assets/background.jpg",
    summary: {
      pt: "Sistema modular para interações táteis (coleta, inspeção de itens e diálogos com efeito máquina de escrever).",
      en: "Modular framework for tactile interactions (pickup, item inspection, and typewriter dialogue)."
    },
    problem: {
      pt: "Jogos com ritmo calmo dependem de feedback tátil e sonoro impecável em cada interação simples do jogador.",
      en: "Calm-paced games rely heavily on tactile and polished feedback for every simple player interaction."
    },
    solution: {
      pt: "Arquitetura orientada a nós e sinais na Godot, isolando a lógica de detecção de proximidade, animações de tween táteis e apresentação de texto com velocidade ajustável.",
      en: "Node and signal-driven architecture in Godot isolating proximity detection, tactile tween animations, and adjustable-speed text delivery."
    },
    contributions: {
      pt: "Design do fluxo de estados, programação dos controladores de interação e polimento das curvas de animação (easing).",
      en: "State machine design, interaction controller programming, and animation easing polish."
    },
    technicalDetails: {
      pt: "Construído sobre o sistema de Resources da Godot 4 para permitir que designers configurem falas e respostas sem tocar no código.",
      en: "Built upon Godot 4 Custom Resources allowing designers to author dialogues and responses without touching code."
    },
    results: {
      pt: "Framework reutilizável e desacoplado, facilmente integrado a novos protótipos de jogos de aventura ou exploração.",
      en: "Decoupled and reusable framework easily dropped into new adventure or exploration prototypes."
    },
    repositoryUrl: "https://github.com/Germano123",
    buildUrl: null,
    documentationUrl: null
  }
];

// Exportação compatível com ambientes de módulo e navegadores normais
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PROJECTS };
}
