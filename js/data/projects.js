/**
 * Cozy Developer Laboratory — Base Canônica de Projetos
 * Conforme Especificação 3 (artifacts/3_project_presentation_schemas.md)
 * Estruturas especializadas para: Tools Lab, Art Workshop, Games & Prototypes e Software Shelf.
 */

const PROJECTS = [
  {
    id: "cozy-tilemap-automator",
    slug: "cozy-tilemap-automator",
    title: "Tilemap & Prop Auto-Placement Tool",
    projectType: "tool",
    areas: ["tools-lab", "software-shelf"],
    technologies: ["C#", "Unity", "Editor Scripting", "Tools Dev"],
    tags: ["editor-extension", "level-design", "automation", "unity-tool"],
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
    // Schema Especializado: Tools Lab
    toolClassification: "editor-extension",
    targetEnvironment: {
      host: "Unity",
      versionMin: "2022.3 LTS",
      language: "C#"
    },
    workflowContext: {
      targetAudience: {
        pt: "Level Designers e Artistas de Cenário",
        en: "Level Designers & Environment Artists"
      },
      painPoint: {
        pt: "Posicionamento repetitivo de variações de terreno e props secundários consumia mais de 60% do tempo de montagem de salas.",
        en: "Repetitive manual placement of terrain variants and props consumed over 60% of environment dressing time."
      },
      timeSavedMetric: "Redução de ~60% no tempo de montagem"
    },
    pipelineFlow: {
      inputs: [
        { pt: "Paletas de prefabs de props e regras de adjacência em ScriptableObjects", en: "Prop prefab palettes and adjacency rules in ScriptableObjects" },
        { pt: "Geometria e grid do tilemap ativo na Scene View", en: "Active tilemap geometry and grid in Scene View" }
      ],
      processingLogic: {
        pt: "Algoritmo de Spatial Hash Grid para verificação em tempo real de raio de colisão, seguido de amostragem estocástica com peso ponderado.",
        en: "Spatial Hash Grid algorithm for real-time collision radius checks, followed by weighted stochastic sampling."
      },
      outputs: [
        { pt: "Objetos instanciados e alinhados automaticamente com hierarquia limpa na cena", en: "Automatically instantiated and aligned game objects in a clean scene hierarchy" },
        { pt: "Histórico completo registrado no stack nativo de Undo/Redo da engine", en: "Full history registered in the engine's native Undo/Redo stack" }
      ]
    },
    technicalArchitecture: {
      dataStructures: ["ScriptableObjects", "Spatial Hash Grid", "Bitmask Adjacency Matrices"],
      editorIntegrations: ["Custom Inspector", "SceneView Handles Overlays", "Undo.RecordObject"],
      safetyFeatures: {
        pt: "Fluxo 100% não-destrutivo: qualquer pincelada pode ser revertida com Ctrl+Z instantaneamente, sem quebrar referências da cena.",
        en: "100% non-destructive flow: any stroke can be reverted via Ctrl+Z immediately without breaking scene references."
      }
    },
    repositoryUrl: "https://github.com/Germano123",
    buildUrl: null,
    documentationUrl: null
  },
  {
    id: "lowpoly-nature-kit",
    slug: "lowpoly-nature-kit",
    title: "Stylized Cozy Nature Asset Kit & Shaders",
    projectType: "art",
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
    // Schema Especializado: Art Workshop (Assets)
    artStyle: "low-poly",
    technicalArtBudget: {
      triangleCount: 2450,
      vertexCount: 1320,
      textureResolution: "256x256 Color Atlas",
      uvEfficiencyPercent: 94,
      materialCount: 1,
      drawCallsEstimated: 3
    },
    shadingSetup: {
      shaderType: "vertex-displacement",
      techniqueSummary: {
        pt: "Deformação senoidal oscilatória no vertex shader modulada pela intensidade dos canais RGB de cor de vértice e gradiente de altura.",
        en: "Oscillatory sine wave deformation in vertex shader modulated by RGB vertex color channels and height gradient."
      },
      features: ["Vento Procedural nos Vértices", "1 Material Compartilhado na Cena", "Cores por Vértice (Vertex Color)"]
    },
    repositoryUrl: "https://github.com/Germano123",
    buildUrl: null,
    documentationUrl: null
  },
  {
    id: "cozy-forest-guardian",
    slug: "cozy-forest-guardian",
    title: "Forest Guardian — Low-Poly Character & Rig",
    projectType: "art",
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
    // Schema Especializado: Art Workshop (Personagens)
    artStyle: "stylized",
    technicalArtBudget: {
      triangleCount: 1800,
      vertexCount: 920,
      textureResolution: "512x512 Texture Atlas",
      uvEfficiencyPercent: 88,
      materialCount: 1,
      drawCallsEstimated: 1
    },
    riggingAnimationDetails: {
      boneCount: 28,
      hasIKControls: true,
      clips: [
        { name: "Idle", frameCount: 30, fps: 24, looping: true },
        { name: "Walk", frameCount: 24, fps: 24, looping: true }
      ]
    },
    repositoryUrl: "https://github.com/Germano123",
    buildUrl: null,
    documentationUrl: null
  },
  {
    id: "stylized-locomotion-cycles",
    slug: "stylized-locomotion-cycles",
    title: "Stylized Locomotion & Idle Animation Set",
    projectType: "art",
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
    // Schema Especializado: Art Workshop (Animações)
    artStyle: "stylized",
    technicalArtBudget: {
      triangleCount: 1800,
      textureResolution: "512x512 Texture Atlas",
      materialCount: 1,
      drawCallsEstimated: 1
    },
    riggingAnimationDetails: {
      boneCount: 28,
      hasIKControls: true,
      clips: [
        { name: "Idle (Breathing)", frameCount: 48, fps: 24, looping: true },
        { name: "Cozy Walk Cycle", frameCount: 24, fps: 24, looping: true },
        { name: "Jump & Land Anticipation", frameCount: 36, fps: 24, looping: false }
      ]
    },
    repositoryUrl: "https://github.com/Germano123",
    buildUrl: null,
    documentationUrl: null
  },
  {
    id: "cozy-interaction-framework",
    slug: "cozy-interaction-framework",
    title: "Tactile Interaction & Dialogue Prototype",
    projectType: "game",
    areas: ["games-prototypes", "software-shelf"],
    technologies: ["Godot", "GDScript", "Game Architecture", "UI/UX"],
    tags: ["tactile-interaction", "game-feel", "dialogue-system", "godot-prototype"],
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
    // Schema Especializado: Games & Prototypes
    prototypeStage: "mechanic-prototype",
    gameplayProfile: {
      genre: {
        pt: "Exploração Cozy & Aventura Narrativa",
        en: "Cozy Exploration & Narrative Adventure"
      },
      cameraPerspective: "top-down",
      targetPlatform: ["WebGL (HTML5)", "PC (Windows / Linux)"],
      controlsSummary: {
        pt: "Teclado (WASD / Espaço / E) e Gamepad (D-Pad / A / X)",
        en: "Keyboard (WASD / Space / E) & Gamepad (D-Pad / A / X)"
      }
    },
    gameFeelDetails: {
      movementMechanics: [
        { pt: "Input buffering de 100ms para comandos de interação rápidos sem perda de inputs", en: "100ms input buffering for interaction triggers without lost inputs" },
        { pt: "Curvas de aceleração senoidal suave com parada amortecida", en: "Smooth sine acceleration curves with dampened stop" }
      ],
      tactileFeedback: [
        { pt: "Tween de escala (squash & stretch de 1.08x) ao inspecionar ou coletar itens", en: "Scale tween (1.08x squash & stretch) on item inspection or pickup" },
        { pt: "Micro-trepidação de câmera suave em confirmações táteis de ação", en: "Gentle subtle screen shake on tactile action confirmations" }
      ],
      soundVisualSync: {
        pt: "Bips procedurais modulados por tom sincronizados com cada glifo de texto revelado na caixa de fala.",
        en: "Pitch-modulated procedural audio blips synchronized with each revealed text glyph in dialogue boxes."
      }
    },
    systemsArchitecture: {
      engineArchitecture: {
        pt: "Máquinas de Estados Finitos desacopladas em GDScript para gerenciar transições de interação.",
        en: "Decoupled Finite State Machines in GDScript managing interaction state transitions."
      },
      dataDrivenDesign: {
        pt: "Diálogos e propriedades de itens serializados em Godot Custom Resources para edição direta por designers sem código.",
        en: "Dialogues and item properties serialized in Godot Custom Resources for direct designer tuning without code."
      },
      decouplingStrategy: {
        pt: "Event Bus central baseado em Signals para comunicação sem acoplamento entre UI, áudio e atores da cena.",
        en: "Central Signals-based Event Bus for zero-coupling communication between UI, audio, and scene actors."
      }
    },
    repositoryUrl: "https://github.com/Germano123",
    buildUrl: null,
    documentationUrl: null
  },
  {
    id: "cozy-palette-packer",
    slug: "cozy-palette-packer",
    title: "Cozy UV & Palette Atlas Packer",
    projectType: "software",
    areas: ["software-shelf", "tools-lab"],
    technologies: ["TypeScript", "Node.js", "Clean Architecture", "CLI"],
    tags: ["software-architecture", "cli-tool", "texture-atlas", "automation"],
    status: "completed",
    visibility: "public",
    featured: false,
    cover: "assets/background.jpg",
    summary: {
      pt: "Utilitário de linha de comando para empacotamento automatizado de texturas de baixa resolução em um atlas de paleta único.",
      en: "CLI utility for automated low-resolution texture packing into a single unified color palette atlas."
    },
    problem: {
      pt: "Projetos low-poly demandam consolidação frequente de paletas de cores para manter todas as malhas sob um único material sem desperdício de espaço UV.",
      en: "Low-poly projects require frequent color palette consolidation to keep all meshes under a single material without wasting UV space."
    },
    solution: {
      pt: "Desenvolvimento de uma CLI em TypeScript com algoritmo bin-packing 2D, otimizando o agrupamento de cores idênticas e gerando atlas compacto com métricas de remapeamento UV.",
      en: "Developed a TypeScript CLI with 2D bin-packing algorithms, deduping identical colors and generating a compact atlas with UV remap coordinates."
    },
    contributions: {
      pt: "Design arquitetural com Clean Architecture, implementação do algoritmo de bin-packing 2D e suite completa de testes automatizados.",
      en: "Clean Architecture design, 2D bin-packing algorithm implementation, and full suite of automated unit tests."
    },
    technicalDetails: {
      pt: "Estruturado com inversão de dependência e zero dependências de runtime. Tempo de processamento inferior a 50ms para 100 amostras de cor.",
      en: "Structured with dependency inversion and zero runtime dependencies. Sub-50ms execution time for 100 color swatches."
    },
    results: {
      pt: "Redução drástica no overhead de textura e facilidade de integração em pipelines de build automatizados.",
      en: "Drastic texture overhead reduction and seamless integration into automated build pipelines."
    },
    // Schema Especializado: Software Shelf
    softwareCategory: "cli-utility",
    architectureDetails: {
      designPatterns: ["Strategy Pattern", "Pipeline Pattern", "Repository"],
      modularityOverview: {
        pt: "Módulos estritamente desacoplados: analisador de paletas, motor de empacotamento e gerador de imagem PNG.",
        en: "Strictly decoupled modules: palette parser, packing engine, and PNG image generator."
      },
      dependencyPolicy: {
        pt: "Zero dependências externas de runtime, garantindo portabilidade absoluta e execução rápida.",
        en: "Zero external runtime dependencies ensuring absolute portability and fast execution."
      }
    },
    qualityAndReliability: {
      testCoveragePercentage: 92,
      testingFramework: "Node Test Runner",
      performanceBenchmarks: [
        {
          metricName: "Processamento de 100 cores",
          measuredValue: "42ms",
          comparisonBaseline: "3.8x mais rápido que ferramentas rasterizadas"
        }
      ]
    },
    distributionDetails: {
      packageManager: "npm",
      license: "MIT",
      semanticVersion: "v1.1.0"
    },
    repositoryUrl: "https://github.com/Germano123",
    buildUrl: null,
    documentationUrl: null
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PROJECTS };
}
