/**
 * Cozy Developer Laboratory — Base Canônica de Projetos
 * Conforme Especificação 2 (artifacts/2_portfolio_pages.md - v1.1)
 * Suporte a categorias de Art Workshop (personagens, assets, animacoes).
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
    mainCategory: "assets",
    tags: ["assets", "shaders", "low-poly", "nature"],
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
    id: "cozy-forest-guardian",
    slug: "cozy-forest-guardian",
    title: "Forest Guardian — Low-Poly Character & Rig",
    projectType: "character",
    areas: ["art-workshop"],
    mainCategory: "personagens",
    tags: ["personagens", "animacoes", "rigging", "character-art"],
    technologies: ["Blender", "Rigging", "Weight Painting", "Low-Poly"],
    status: "completed",
    visibility: "public",
    featured: true,
    cover: "assets/background.jpg",
    summary: {
      pt: "Personagem de criatura da floresta modelado em low-poly com esqueleto de rigging otimizado e deformação limpa.",
      en: "Forest guardian creature character modeled in stylized low-poly with optimized rig and clean mesh deformation."
    },
    problem: {
      pt: "Criar um personagem expressivo e carismático mantendo topologia enxuta que se deforme suavemente em animações sem distorções nos membros.",
      en: "Create an expressive and charming character maintaining lean topology that deforms cleanly during animation without joint distortion."
    },
    solution: {
      pt: "Modelagem anatômica simplificada com topologia em anel nas articulações (joelhos e cotovelos), rig com controles IK/FK no Blender e weight painting calibrado.",
      en: "Simplified anatomy modeling with edge-loops at joints, custom IK/FK rig in Blender, and carefully calibrated weight painting."
    },
    contributions: {
      pt: "Conceito visual, modelagem tridimensional no Blender, retopologia, rigging de esqueleto e configuração de pesos de vértices.",
      en: "Visual concept, 3D modeling in Blender, retopology, skeletal rigging, and vertex weight painting."
    },
    technicalDetails: {
      pt: "Malha composta por 1.800 triângulos. Rig estruturado com 28 ossos de deformação e controladores de manipulação com travas de ângulo para evitar poses indevidas.",
      en: "Mesh composed of 1,800 triangles. Rig structured with 28 deformation bones and custom control shapes with rotational limits."
    },
    results: {
      pt: "Modelo pronto para produção, importado na Unity e Godot com ciclos de caminhada fluidos e sem colapso de volume nas juntas.",
      en: "Production-ready model imported into Unity and Godot with fluid walk cycles and zero joint volume collapse."
    },
    repositoryUrl: "https://github.com/Germano123",
    buildUrl: null,
    documentationUrl: null
  },
  {
    id: "stylized-locomotion-cycles",
    slug: "stylized-locomotion-cycles",
    title: "Stylized Locomotion & Idle Animation Set",
    projectType: "animation",
    areas: ["art-workshop"],
    mainCategory: "animacoes",
    tags: ["animacoes", "rigging", "skinning", "game-feel"],
    technologies: ["Blender", "Keyframing", "Animation Curves", "Unity Integration"],
    status: "completed",
    visibility: "public",
    featured: false,
    cover: "assets/background.jpg",
    summary: {
      pt: "Conjunto de clipes de animação estilizados (idle, caminhada e salto) com foco em peso, timing e antecipação.",
      en: "Stylized animation clip set (idle, walk, and jump) focusing on weight, timing, and anticipation."
    },
    problem: {
      pt: "Jogos em ritmo acolhedor precisam de animações que comuniquem personalidade e calma, sem movimentos mecânicos ou robóticos.",
      en: "Cozy-paced games require animations conveying personality and calm without stiff or robotic motions."
    },
    solution: {
      pt: "Criação de ciclos com base nos 12 princípios fundamentais de animação, aplicando curvas de desaceleração (slow-in/slow-out) e overlap sutil em acessórios e orelhas.",
      en: "Authored cycles following fundamental animation principles, applying ease-in/ease-out curves and subtle overlapping action on accessories."
    },
    contributions: {
      pt: "Autoria de keyframes no Graph Editor do Blender, pós-processamento de curvas e integração em Animator Controller na Unity.",
      en: "Keyframe authoring in Blender Graph Editor, curve clean-up, and Unity Animator Controller integration."
    },
    technicalDetails: {
      pt: "Exportação em FBX com faixas NLA separadas e transições otimizadas com blend trees para resposta instantânea ao controle do jogador.",
      en: "FBX export with clean NLA tracks and blend tree transitions tuned for responsive player inputs."
    },
    results: {
      pt: "Ciclos fluidos e expressivos com transições perfeitas em engine, elevando imediatamente o game feel.",
      en: "Fluid and expressive cycles with seamless in-engine transitions, elevating game feel."
    },
    repositoryUrl: "https://github.com/Germano123",
    buildUrl: null,
    documentationUrl: null
  },
  {
    id: "cozy-interaction-framework",
    slug: "cozy-interaction-framework",
    title: "Tactile Interaction & Dialogue Prototype",
    projectType: "game-system",
    areas: ["games-prototypes", "software-shelf"],
    technologies: ["Godot", "GDScript", "Game Architecture", "UI/UX"],
    status: "in-progress",
    visibility: "public",
    featured: true,
    cover: "assets/background.jpg",
    summary: {
      pt: "Protótipo jogável com sistema modular para interações táteis (coleta, inspeção de itens e diálogos com efeito máquina de escrever).",
      en: "Playable prototype with modular framework for tactile interactions (pickup, item inspection, and typewriter dialogue)."
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
      pt: "Construído sobre o sistema de Resources da Godot para permitir que designers configurem falas e respostas sem tocar no código.",
      en: "Built upon Godot Custom Resources allowing designers to author dialogues and responses without touching code."
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

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PROJECTS };
}
