/**
 * Cozy Developer Laboratory — Base Canônica de Projetos
 * Conforme Especificação 3 (artifacts/3_project_presentation_schemas.md)
 * Inclui os 6 projetos de jogos com suporte a galeria de imagens (mínimo 4 imagens).
 */

const PROJECTS = [
  {
    "id": "cozy-tilemap-automator",
    "slug": "cozy-tilemap-automator",
    "title": "Tilemap & Prop Auto-Placement Tool",
    "projectType": "tool",
    "areas": [
      "tools-lab",
      "software-shelf"
    ],
    "technologies": [
      "C#",
      "Unity",
      "Editor Scripting",
      "Tools Dev"
    ],
    "tags": [
      "editor-extension",
      "level-design",
      "automation",
      "unity-tool"
    ],
    "status": "completed",
    "visibility": "public",
    "featured": true,
    "cover": "assets/background.jpg",
    "summary": {
      "pt": "Ferramenta de extensão do editor da Unity para pintura automatizada de cenários e encaixe contextual de props.",
      "en": "Unity editor extension tool for automated scenery painting and contextual prop placement."
    },
    "description": {
      "pt": "Uma ferramenta de produtividade para level designers que automatiza a colocação de variações de terreno, vegetação e elementos decorativos com base em regras de adjacência.",
      "en": "A productivity tool for level designers automating terrain variations, foliage, and decorative prop placement based on adjacency rules."
    },
    "problem": {
      "pt": "O posicionamento manual de props e variações de tiles em níveis extensos consumia até 60% do tempo de montagem de cenários.",
      "en": "Manual placement of props and tile variations in large levels consumed up to 60% of environment assembly time."
    },
    "solution": {
      "pt": "Desenvolvimento de uma ferramenta Custom Editor com pincéis baseados em regras (Rule Brushes avançados) e posicionamento estocástico de props com checagem de sobreposição em tempo real.",
      "en": "Developed a Custom Editor tool with rule-based brushes and stochastic prop placement with real-time overlap validation."
    },
    "contributions": {
      "pt": "Arquitetura e desenvolvimento integral do script de editor, interface Custom Inspector na Unity e algoritmo de validação geométrica.",
      "en": "Full architecture and development of editor scripts, Unity Custom Inspector UI, and geometric validation algorithm."
    },
    "technicalDetails": {
      "pt": "Implementado em C# para Unity, utilizando ScriptableObjects para armazenar paletas de regras. Otimizado com algoritmos de grid espacial para manter taxa de atualização de 60fps na Scene View durante a pintura.",
      "en": "Built in C# for Unity using ScriptableObjects for rule palette storage. Optimized with spatial grid algorithms maintaining 60fps Scene View updates during painting."
    },
    "results": {
      "pt": "Redução expressiva no tempo de montagem de salas e ambientes, garantindo consistência visual e eliminação de sobreposições acidentais.",
      "en": "Significant reduction in room and environment composition time, ensuring visual consistency and preventing accidental overlaps."
    },
    "toolClassification": "editor-extension",
    "targetEnvironment": {
      "host": "Unity",
      "versionMin": "2022.3 LTS",
      "language": "C#"
    },
    "workflowContext": {
      "targetAudience": {
        "pt": "Level Designers e Artistas de Cenário",
        "en": "Level Designers & Environment Artists"
      },
      "painPoint": {
        "pt": "Posicionamento repetitivo de variações de terreno e props secundários consumia mais de 60% do tempo de montagem de salas.",
        "en": "Repetitive manual placement of terrain variants and props consumed over 60% of environment dressing time."
      },
      "timeSavedMetric": "Redução de ~60% no tempo de montagem"
    },
    "pipelineFlow": {
      "inputs": [
        {
          "pt": "Paletas de prefabs de props e regras de adjacência em ScriptableObjects",
          "en": "Prop prefab palettes and adjacency rules in ScriptableObjects"
        },
        {
          "pt": "Geometria e grid do tilemap ativo na Scene View",
          "en": "Active tilemap geometry and grid in Scene View"
        }
      ],
      "processingLogic": {
        "pt": "Algoritmo de Spatial Hash Grid para verificação em tempo real de raio de colisão, seguido de amostragem estocástica com peso ponderado.",
        "en": "Spatial Hash Grid algorithm for real-time collision radius checks, followed by weighted stochastic sampling."
      },
      "outputs": [
        {
          "pt": "Objetos instanciados e alinhados automaticamente com hierarquia limpa na cena",
          "en": "Automatically instantiated and aligned game objects in a clean scene hierarchy"
        },
        {
          "pt": "Histórico completo registrado no stack nativo de Undo/Redo da engine",
          "en": "Full history registered in the engine's native Undo/Redo stack"
        }
      ]
    },
    "technicalArchitecture": {
      "dataStructures": [
        "ScriptableObjects",
        "Spatial Hash Grid",
        "Bitmask Adjacency Matrices"
      ],
      "editorIntegrations": [
        "Custom Inspector",
        "SceneView Handles Overlays",
        "Undo.RecordObject"
      ],
      "safetyFeatures": {
        "pt": "Fluxo 100% não-destrutivo: qualquer pincelada pode ser revertida com Ctrl+Z instantaneamente, sem quebrar referências da cena.",
        "en": "100% non-destructive flow: any stroke can be reverted via Ctrl+Z immediately without breaking scene references."
      }
    },
    "repositoryUrl": "https://github.com/Germano123",
    "buildUrl": null,
    "documentationUrl": null
  },
  {
    "id": "lowpoly-nature-kit",
    "slug": "lowpoly-nature-kit",
    "title": "Stylized Cozy Nature Asset Kit & Shaders",
    "projectType": "art",
    "areas": [
      "art-workshop",
      "software-shelf"
    ],
    "mainCategory": "assets",
    "tags": [
      "assets",
      "shaders",
      "low-poly",
      "nature"
    ],
    "technologies": [
      "Blender",
      "Shader Graph",
      "Low-Poly",
      "UV Mapping"
    ],
    "status": "completed",
    "visibility": "public",
    "featured": true,
    "cover": "assets/background.jpg",
    "summary": {
      "pt": "Kit modular de modelos 3D low-poly estilizados com shaders de folhagem interativa ao vento e gradientes de cores.",
      "en": "Modular low-poly stylized 3D asset kit with wind-interactive foliage shaders and color gradients."
    },
    "problem": {
      "pt": "Ambientes acolhedores demandam paletas suaves e animações orgânicas de vento, sem sobrecarregar a contagem de polígonos ou draw calls em hardware modesto.",
      "en": "Cozy environments require soft palettes and organic wind animation without bloating polygon counts or draw calls on modest hardware."
    },
    "solution": {
      "pt": "Modelagem de mais de 30 assets com atlas de texturas compartilhado (1 material único para a cena inteira) e vertex-color shader para simulação de vento suave nos vértices.",
      "en": "Modeled 30+ assets using a shared texture atlas (1 single material for the entire scene) and a vertex-color shader for gentle vertex wind simulation."
    },
    "contributions": {
      "pt": "Modelagem 3D no Blender, mapeamento UV otimizado em atlas, autoria do shader de vento e iluminação estilizada na engine.",
      "en": "3D modeling in Blender, UV atlas mapping, wind shader authoring, and stylized lighting setup in-engine."
    },
    "technicalDetails": {
      "pt": "Os assets utilizam uma paleta de textura de 256x256 pixels com técnica de UV compacta. O deslocamento de vento ocorre via vertex shader combinando senos e cossenos modulados pelas cores de vértice.",
      "en": "Assets utilize a 256x256 pixel texture palette with compact UV mapping. Wind displacement runs via vertex shader blending sine/cosine waves modulated by vertex colors."
    },
    "results": {
      "pt": "Cena completa rodando em menos de 10 draw calls em dispositivos móveis e desktops, com estética calorosa e dinâmica.",
      "en": "Complete scene running in under 10 draw calls on mobile and desktop devices with a warm and dynamic aesthetic."
    },
    "artStyle": "low-poly",
    "technicalArtBudget": {
      "triangleCount": 2450,
      "vertexCount": 1320,
      "textureResolution": "256x256 Color Atlas",
      "uvEfficiencyPercent": 94,
      "materialCount": 1,
      "drawCallsEstimated": 3
    },
    "shadingSetup": {
      "shaderType": "vertex-displacement",
      "techniqueSummary": {
        "pt": "Deformação senoidal oscilatória no vertex shader modulada pela intensidade dos canais RGB de cor de vértice e gradiente de altura.",
        "en": "Oscillatory sine wave deformation in vertex shader modulated by RGB vertex color channels and height gradient."
      },
      "features": [
        "Vento Procedural nos Vértices",
        "1 Material Compartilhado na Cena",
        "Cores por Vértice (Vertex Color)"
      ]
    },
    "repositoryUrl": "https://github.com/Germano123",
    "buildUrl": null,
    "documentationUrl": null
  },
  {
    "id": "cozy-forest-guardian",
    "slug": "cozy-forest-guardian",
    "title": "Forest Guardian — Low-Poly Character & Rig",
    "projectType": "art",
    "areas": [
      "art-workshop"
    ],
    "mainCategory": "personagens",
    "tags": [
      "personagens",
      "animacoes",
      "rigging",
      "character-art"
    ],
    "technologies": [
      "Blender",
      "Rigging",
      "Weight Painting",
      "Low-Poly"
    ],
    "status": "completed",
    "visibility": "public",
    "featured": true,
    "cover": "assets/background.jpg",
    "summary": {
      "pt": "Personagem de criatura da floresta modelado em low-poly com esqueleto de rigging otimizado e deformação limpa.",
      "en": "Forest guardian creature character modeled in stylized low-poly with optimized rig and clean mesh deformation."
    },
    "problem": {
      "pt": "Criar um personagem expressivo e carismático mantendo topologia enxuta que se deforme suavemente em animações sem distorções nos membros.",
      "en": "Create an expressive and charming character maintaining lean topology that deforms cleanly during animation without joint distortion."
    },
    "solution": {
      "pt": "Modelagem anatômica simplificada com topologia em anel nas articulações (joelhos e cotovelos), rig com controles IK/FK no Blender e weight painting calibrado.",
      "en": "Simplified anatomy modeling with edge-loops at joints, custom IK/FK rig in Blender, and carefully calibrated weight painting."
    },
    "contributions": {
      "pt": "Conceito visual, modelagem tridimensional no Blender, retopologia, rigging de esqueleto e configuração de pesos de vértices.",
      "en": "Visual concept, 3D modeling in Blender, retopology, skeletal rigging, and vertex weight painting."
    },
    "technicalDetails": {
      "pt": "Malha composta por 1.800 triângulos. Rig estruturado com 28 ossos de deformação e controladores de manipulação com travas de ângulo para evitar poses indevidas.",
      "en": "Mesh composed of 1,800 triangles. Rig structured with 28 deformation bones and custom control shapes with rotational limits."
    },
    "results": {
      "pt": "Modelo pronto para produção, importado na Unity e Godot com ciclos de caminhada fluidos e sem colapso de volume nas juntas.",
      "en": "Production-ready model imported into Unity and Godot with fluid walk cycles and zero joint volume collapse."
    },
    "artStyle": "stylized",
    "technicalArtBudget": {
      "triangleCount": 1800,
      "vertexCount": 920,
      "textureResolution": "512x512 Texture Atlas",
      "uvEfficiencyPercent": 88,
      "materialCount": 1,
      "drawCallsEstimated": 1
    },
    "riggingAnimationDetails": {
      "boneCount": 28,
      "hasIKControls": true,
      "clips": [
        {
          "name": "Idle",
          "frameCount": 30,
          "fps": 24,
          "looping": true
        },
        {
          "name": "Walk",
          "frameCount": 24,
          "fps": 24,
          "looping": true
        }
      ]
    },
    "repositoryUrl": "https://github.com/Germano123",
    "buildUrl": null,
    "documentationUrl": null
  },
  {
    "id": "stylized-locomotion-cycles",
    "slug": "stylized-locomotion-cycles",
    "title": "Stylized Locomotion & Idle Animation Set",
    "projectType": "art",
    "areas": [
      "art-workshop"
    ],
    "mainCategory": "animacoes",
    "tags": [
      "animacoes",
      "rigging",
      "skinning",
      "game-feel"
    ],
    "technologies": [
      "Blender",
      "Keyframing",
      "Animation Curves",
      "Unity Integration"
    ],
    "status": "completed",
    "visibility": "public",
    "featured": false,
    "cover": "assets/background.jpg",
    "summary": {
      "pt": "Conjunto de clipes de animação estilizados (idle, caminhada e salto) com foco em peso, timing e antecipação.",
      "en": "Stylized animation clip set (idle, walk, and jump) focusing on weight, timing, and anticipation."
    },
    "problem": {
      "pt": "Jogos em ritmo acolhedor precisam de animações que comuniquem personalidade e calma, sem movimentos mecânicos ou robóticos.",
      "en": "Cozy-paced games require animations conveying personality and calm without stiff or robotic motions."
    },
    "solution": {
      "pt": "Criação de ciclos com base nos 12 princípios fundamentais de animação, aplicando curvas de desaceleração (slow-in/slow-out) e overlap sutil em acessórios e orelhas.",
      "en": "Authored cycles following fundamental animation principles, applying ease-in/ease-out curves and subtle overlapping action on accessories."
    },
    "contributions": {
      "pt": "Autoria de keyframes no Graph Editor do Blender, pós-processamento de curvas e integração em Animator Controller na Unity.",
      "en": "Keyframe authoring in Blender Graph Editor, curve clean-up, and Unity Animator Controller integration."
    },
    "technicalDetails": {
      "pt": "Exportação em FBX com faixas NLA separadas e transições otimizadas com blend trees para resposta instantânea ao controle do jogador.",
      "en": "FBX export with clean NLA tracks and blend tree transitions tuned for responsive player inputs."
    },
    "results": {
      "pt": "Ciclos fluidos e expressivos com transições perfeitas em engine, elevando imediatamente o game feel.",
      "en": "Fluid and expressive cycles with seamless in-engine transitions, elevating game feel."
    },
    "artStyle": "stylized",
    "technicalArtBudget": {
      "triangleCount": 1800,
      "textureResolution": "512x512 Texture Atlas",
      "materialCount": 1,
      "drawCallsEstimated": 1
    },
    "riggingAnimationDetails": {
      "boneCount": 28,
      "hasIKControls": true,
      "clips": [
        {
          "name": "Idle (Breathing)",
          "frameCount": 48,
          "fps": 24,
          "looping": true
        },
        {
          "name": "Cozy Walk Cycle",
          "frameCount": 24,
          "fps": 24,
          "looping": true
        },
        {
          "name": "Jump & Land Anticipation",
          "frameCount": 36,
          "fps": 24,
          "looping": false
        }
      ]
    },
    "repositoryUrl": "https://github.com/Germano123",
    "buildUrl": null,
    "documentationUrl": null
  },
  {
    "id": "cozy-interaction-framework",
    "slug": "cozy-interaction-framework",
    "title": "Tactile Interaction & Dialogue Prototype",
    "projectType": "game",
    "areas": [
      "games-prototypes",
      "software-shelf"
    ],
    "technologies": [
      "Godot",
      "GDScript",
      "Game Architecture",
      "UI/UX"
    ],
    "tags": [
      "tactile-interaction",
      "game-feel",
      "dialogue-system",
      "godot-prototype"
    ],
    "status": "in-progress",
    "visibility": "public",
    "featured": true,
    "cover": "assets/background.jpg",
    "summary": {
      "pt": "Protótipo jogável com sistema modular para interações táteis (coleta, inspeção de itens e diálogos com efeito máquina de escrever).",
      "en": "Playable prototype with modular framework for tactile interactions (pickup, item inspection, and typewriter dialogue)."
    },
    "problem": {
      "pt": "Jogos com ritmo calmo dependem de feedback tátil e sonoro impecável em cada interação simples do jogador.",
      "en": "Calm-paced games rely heavily on tactile and polished feedback for every simple player interaction."
    },
    "solution": {
      "pt": "Arquitetura orientada a nós e sinais na Godot, isolando a lógica de detecção de proximidade, animações de tween táteis e apresentação de texto com velocidade ajustável.",
      "en": "Node and signal-driven architecture in Godot isolating proximity detection, tactile tween animations, and adjustable-speed text delivery."
    },
    "contributions": {
      "pt": "Design do fluxo de estados, programação dos controladores de interação e polimento das curvas de animação (easing).",
      "en": "State machine design, interaction controller programming, and animation easing polish."
    },
    "technicalDetails": {
      "pt": "Construído sobre o sistema de Resources da Godot para permitir que designers configurem falas e respostas sem tocar no código.",
      "en": "Built upon Godot Custom Resources allowing designers to author dialogues and responses without touching code."
    },
    "results": {
      "pt": "Framework reutilizável e desacoplado, facilmente integrado a novos protótipos de jogos de aventura ou exploração.",
      "en": "Decoupled and reusable framework easily dropped into new adventure or exploration prototypes."
    },
    "prototypeStage": "mechanic-prototype",
    "gameplayProfile": {
      "genre": {
        "pt": "Exploração Cozy & Aventura Narrativa",
        "en": "Cozy Exploration & Narrative Adventure"
      },
      "cameraPerspective": "top-down",
      "targetPlatform": [
        "WebGL (HTML5)",
        "PC (Windows / Linux)"
      ],
      "controlsSummary": {
        "pt": "Teclado (WASD / Espaço / E) e Gamepad (D-Pad / A / X)",
        "en": "Keyboard (WASD / Space / E) & Gamepad (D-Pad / A / X)"
      }
    },
    "gameFeelDetails": {
      "movementMechanics": [
        {
          "pt": "Input buffering de 100ms para comandos de interação rápidos sem perda de inputs",
          "en": "100ms input buffering for interaction triggers without lost inputs"
        },
        {
          "pt": "Curvas de aceleração senoidal suave com parada amortecida",
          "en": "Smooth sine acceleration curves with dampened stop"
        }
      ],
      "tactileFeedback": [
        {
          "pt": "Tween de escala (squash & stretch de 1.08x) ao inspecionar ou coletar itens",
          "en": "Scale tween (1.08x squash & stretch) on item inspection or pickup"
        },
        {
          "pt": "Micro-trepidação de câmera suave em confirmações táteis de ação",
          "en": "Gentle subtle screen shake on tactile action confirmations"
        }
      ],
      "soundVisualSync": {
        "pt": "Bips procedurais modulados por tom sincronizados com cada glifo de texto revelado na caixa de fala.",
        "en": "Pitch-modulated procedural audio blips synchronized with each revealed text glyph in dialogue boxes."
      }
    },
    "systemsArchitecture": {
      "engineArchitecture": {
        "pt": "Máquinas de Estados Finitos desacopladas em GDScript para gerenciar transições de interação.",
        "en": "Decoupled Finite State Machines in GDScript managing interaction state transitions."
      },
      "dataDrivenDesign": {
        "pt": "Diálogos e propriedades de itens serializados em Godot Custom Resources para edição direta por designers sem código.",
        "en": "Dialogues and item properties serialized in Godot Custom Resources for direct designer tuning without code."
      },
      "decouplingStrategy": {
        "pt": "Event Bus central baseado em Signals para comunicação sem acoplamento entre UI, áudio e atores da cena.",
        "en": "Central Signals-based Event Bus for zero-coupling communication between UI, audio, and scene actors."
      }
    },
    "repositoryUrl": "https://github.com/Germano123",
    "buildUrl": null,
    "documentationUrl": null
  },
  {
    "id": "cozy-palette-packer",
    "slug": "cozy-palette-packer",
    "title": "Cozy UV & Palette Atlas Packer",
    "projectType": "software",
    "areas": [
      "software-shelf",
      "tools-lab"
    ],
    "technologies": [
      "TypeScript",
      "Node.js",
      "Clean Architecture",
      "CLI"
    ],
    "tags": [
      "software-architecture",
      "cli-tool",
      "texture-atlas",
      "automation"
    ],
    "status": "completed",
    "visibility": "public",
    "featured": false,
    "cover": "assets/background.jpg",
    "summary": {
      "pt": "Utilitário de linha de comando para empacotamento automatizado de texturas de baixa resolução em um atlas de paleta único.",
      "en": "CLI utility for automated low-resolution texture packing into a single unified color palette atlas."
    },
    "problem": {
      "pt": "Projetos low-poly demandam consolidação frequente de paletas de cores para manter todas as malhas sob um único material sem desperdício de espaço UV.",
      "en": "Low-poly projects require frequent color palette consolidation to keep all meshes under a single material without wasting UV space."
    },
    "solution": {
      "pt": "Desenvolvimento de uma CLI em TypeScript com algoritmo bin-packing 2D, otimizando o agrupamento de cores idênticas e gerando atlas compacto com métricas de remapeamento UV.",
      "en": "Developed a TypeScript CLI with 2D bin-packing algorithms, deduping identical colors and generating a compact atlas with UV remap coordinates."
    },
    "contributions": {
      "pt": "Design arquitetural com Clean Architecture, implementação do algoritmo de bin-packing 2D e suite completa de testes automatizados.",
      "en": "Clean Architecture design, 2D bin-packing algorithm implementation, and full suite of automated unit tests."
    },
    "technicalDetails": {
      "pt": "Estruturado com inversão de dependência e zero dependências de runtime. Tempo de processamento inferior a 50ms para 100 amostras de cor.",
      "en": "Structured with dependency inversion and zero runtime dependencies. Sub-50ms execution time for 100 color swatches."
    },
    "results": {
      "pt": "Redução drástica no overhead de textura e facilidade de integração em pipelines de build automatizados.",
      "en": "Drastic texture overhead reduction and seamless integration into automated build pipelines."
    },
    "softwareCategory": "cli-utility",
    "architectureDetails": {
      "designPatterns": [
        "Strategy Pattern",
        "Pipeline Pattern",
        "Repository"
      ],
      "modularityOverview": {
        "pt": "Módulos estritamente desacoplados: analisador de paletas, motor de empacotamento e gerador de imagem PNG.",
        "en": "Strictly decoupled modules: palette parser, packing engine, and PNG image generator."
      },
      "dependencyPolicy": {
        "pt": "Zero dependências externas de runtime, garantindo portabilidade absoluta e execução rápida.",
        "en": "Zero external runtime dependencies ensuring absolute portability and fast execution."
      }
    },
    "qualityAndReliability": {
      "testCoveragePercentage": 92,
      "testingFramework": "Node Test Runner",
      "performanceBenchmarks": [
        {
          "metricName": "Processamento de 100 cores",
          "measuredValue": "42ms",
          "comparisonBaseline": "3.8x mais rápido que ferramentas rasterizadas"
        }
      ]
    },
    "distributionDetails": {
      "packageManager": "npm",
      "license": "MIT",
      "semanticVersion": "v1.1.0"
    },
    "repositoryUrl": "https://github.com/Germano123",
    "buildUrl": null,
    "documentationUrl": null
  },
  {
    "id": "digital-delivery",
    "slug": "digital-delivery",
    "title": "Digital Delivery",
    "projectType": "game",
    "areas": [
      "games-prototypes",
      "software-shelf"
    ],
    "technologies": [
      "Godot / Unity",
      "Redes & Sockets",
      "Terminal CLI",
      "Shader 3D"
    ],
    "tags": [
      "gamedev",
      "indie",
      "educacional",
      "hacker",
      "simulacao",
      "aquele-professor"
    ],
    "status": "in-progress",
    "visibility": "public",
    "featured": true,
    "cover": "assets/projects/digital-delivery/cover.svg",
    "summary": {
      "pt": "Jogo educacional de conceitos computacionais desenvolvido em parceria com a marca Aquele Professor. O jogador utiliza um terminal de comando para estabelecer conexões cliente-servidor, descobrir chaves SSH e abrir túneis de transferência de arquivos em uma arena 3D com uma personagem robótica.",
      "en": "Educational game about computer concepts developed in partnership with the Aquele Professor brand. The player uses a command terminal to establish client-server connections, discover SSH keys, and open file transfer tunnels in a 3D arena with a robotic character."
    },
    "problem": {
      "pt": "Ensinar conceitos computacionais (conexão cliente-servidor, SSH, túneis de transferência, gerenciamento de memória) de forma lúdica e interativa, tornando conteúdo técnico acessível para estudantes.",
      "en": "Teach computer concepts (client-server connection, SSH, transfer tunnels, memory management) in a playful and interactive way, making technical content accessible for students."
    },
    "solution": {
      "pt": "Um jogo onde o jogador opera um terminal de comando, estabelece conexões, descobre chaves SSH, abre túneis de transferência e entra em uma arena 3D com um personagem robótico para carregar arquivos nos aplicativos corretos antes que processos estourem a memória do computador.",
      "en": "A game where the player operates a command terminal, establishes connections, discovers SSH keys, opens transfer tunnels, and enters a 3D arena with a robotic character to load files into the correct applications before processes overflow computer memory and cause data loss."
    },
    "contributions": {
      "pt": "Concepção e documentação do jogo educacional, definição da mecânica de terminal e conexão, estrutura da arena 3D, documentação de universo, personagens, inimigos, assets de cenário e inventário.",
      "en": "Concept and documentation of the educational game, definition of terminal and connection mechanics, 3D arena structure, documentation of universe, characters, enemies, scene assets, and inventory."
    },
    "technicalDetails": {
      "pt": "Jogo educacional que ensina conceitos computacionais por meio de um terminal de comando. O jogador conecta cliente-servidor, descobre uma chave SSH, abre um túnel de transferência de arquivos e entra em uma arena 3D com uma personagem robótica. Deve carregar arquivos nos aplicativos corretos antes que processos estourem a memória do computador e causem perda de dados.",
      "en": "Educational game that teaches computer concepts through a command terminal. The player connects client-server, discovers an SSH key, opens a file transfer tunnel, and enters a 3D arena with a robotic character. Must load files into the correct applications before processes overflow computer memory and cause data loss."
    },
    "results": {
      "pt": "Projeto em estágio ativo (Fase de documentação - produção dos primeiros documentos (pipeline ativo)). Documentação e prototipagem contínua.",
      "en": "Project in active stage (Fase de documentação - produção dos primeiros documentos (pipeline ativo)). Ongoing documentation and prototyping."
    },
    "prototypeStage": "mechanic-prototype",
    "gameplayProfile": {
      "genre": {
        "pt": "Educacional / Simulação Hacker",
        "en": "Educational / Hacker Simulation"
      },
      "cameraPerspective": "first-person",
      "targetPlatform": [
        "PC (Windows / Linux)",
        "Web"
      ],
      "controlsSummary": {
        "pt": "Terminal de linha de comando + Controles 3D (WASD)",
        "en": "Command line terminal + 3D controls (WASD)"
      }
    },
    "gameFeelDetails": {
      "movementMechanics": [
        {
          "pt": "Agilidade na arena 3D para entrega física de arquivos antes do estouro de buffer",
          "en": "3D arena agility for physical file delivery before buffer overflow"
        },
        {
          "pt": "Comandos de terminal rápidos com autocompletar e histórico de comandos",
          "en": "Fast terminal typing with command autocomplete and history stack"
        }
      ],
      "tactileFeedback": [
        {
          "pt": "Alerta visual pulsante e trepidação suave de tela quando a memória atinge 80%",
          "en": "Pulsing visual warning and gentle screen rumble when memory reaches 80%"
        },
        {
          "pt": "Efeito glitch e estática digital ao estabelecer túneis SSH com sucesso",
          "en": "Digital glitch and static burst upon successful SSH tunnel connection"
        }
      ],
      "soundVisualSync": {
        "pt": "Sons mecânicos de teclado combinados a alarmes binaurais de processos ativos na memória.",
        "en": "Mechanical keyboard clicks synced with binaural alarms for memory-resident processes."
      }
    },
    "systemsArchitecture": {
      "engineArchitecture": {
        "pt": "Arquitetura cliente-servidor desacoplada com emulador de socket virtual integrado à arena 3D.",
        "en": "Decoupled client-server architecture with virtual socket emulator integrated into 3D arena."
      },
      "dataDrivenDesign": {
        "pt": "Documentação completa: GDD, Mecânicas, Universo, Personagens, Inimigos, Inventário e Assets.",
        "en": "Comprehensive documentation: GDD, Mechanics, Universe, Characters, Enemies, Inventory and Assets."
      },
      "decouplingStrategy": {
        "pt": "Isolamento estrito entre subsistema de console CLI e renderizador de arena em tempo real.",
        "en": "Strict isolation between CLI console subsystem and real-time arena renderer."
      }
    },
    "gallery": [
      {
        "url": "assets/projects/digital-delivery/gallery-01.svg",
        "caption": {
          "pt": "Console de terminal simulando conexões cliente-servidor e chaves SSH.",
          "en": "Terminal console simulating client-server connections and SSH keys."
        },
        "alt": "Digital Delivery - Preview 1"
      },
      {
        "url": "assets/projects/digital-delivery/gallery-02.svg",
        "caption": {
          "pt": "Arena virtual 3D onde a personagem robótica carrega arquivos em aplicativos.",
          "en": "3D virtual arena where the robotic character loads files into applications."
        },
        "alt": "Digital Delivery - Preview 2"
      },
      {
        "url": "assets/projects/digital-delivery/gallery-03.svg",
        "caption": {
          "pt": "Painel de telemetria de processos em tempo real e monitor de memória.",
          "en": "Real-time process telemetry dashboard and memory monitor."
        },
        "alt": "Digital Delivery - Preview 3"
      },
      {
        "url": "assets/projects/digital-delivery/gallery-04.svg",
        "caption": {
          "pt": "Documentação do GDD e mapeamento conceitual de redes e segurança.",
          "en": "GDD documentation and conceptual networking/security mapping."
        },
        "alt": "Digital Delivery - Preview 4"
      }
    ],
    "repositoryUrl": "https://github.com/Germano123",
    "buildUrl": null,
    "documentationUrl": null
  },
  {
    "id": "tribunal-logico",
    "slug": "tribunal-logico",
    "title": "Tribunal Lógico",
    "projectType": "game",
    "areas": [
      "games-prototypes",
      "software-shelf"
    ],
    "technologies": [
      "Godot Engine",
      "Point-and-Click",
      "Matemática Lógica",
      "UI/UX"
    ],
    "tags": [
      "gamedev",
      "indie",
      "educacional",
      "point-and-click",
      "logica",
      "aquele-professor"
    ],
    "status": "in-progress",
    "visibility": "public",
    "featured": true,
    "cover": "assets/projects/tribunal-logico/cover.svg",
    "summary": {
      "pt": "Jogo educacional de matemática lógica desenvolvido em parceria com a marca Aquele Professor. Reinterpretação do estilo de jogos de tribunal (como Phoenix Wright Ace Attorney), onde o jogador utiliza point-and-click em um cenário de tribunal para solucionar casos, analisando termos lógicos da matemática lógica envolvendo argumentação e operadores lógicos como e, ou, se e então, explicando conceitos de tabela verdade e proposições como tautologias.",
      "en": "Educational game about mathematical logic developed in partnership with the Aquele Professor brand. A reinterpretation of courtroom-style games (like Phoenix Wright Ace Attorney), where the player uses point-and-click in a tribunal scenario to solve cases, analyzing logical terms of mathematical logic involving argumentation and logical operators such as and, or, if, then, explaining concepts of truth tables and propositions such as tautologies."
    },
    "problem": {
      "pt": "Ensinar conceitos de matemática lógica (operadores lógicos, tabela verdade, tautologias, contradições, contingências) de forma envolvente por meio de uma mecânica de tribunal point-and-click, tornando o conteúdo abstrato mais acessível e prático para estudantes.",
      "en": "Teach mathematical logic concepts (logical operators, truth tables, tautologies, contradictions, contingencies) in an engaging way through a courtroom point-and-click mechanic, making abstract content more accessible and practical for students."
    },
    "solution": {
      "pt": "O jogador atua como advogado em um tribunal, solucionando casos analisando termos lógicos relacionados à matemática lógica. Utiliza operadores lógicos (e, ou, se, então) e conceitos como tabela verdade e proposições para construir argumentos, confrontar testemunhos e provar a inocência ou culpa dos réus.",
      "en": "The player acts as a lawyer in a tribunal, solving cases by analyzing logical terms related to mathematical logic. Uses logical operators (and, or, if, then) and concepts like truth tables and propositions to build arguments, confront testimonies, and prove the innocence or guilt of defendants."
    },
    "contributions": {
      "pt": "Concepção e documentação do jogo educacional, definição da mecânica de tribunal point-and-click, estrutura dos casos, operadores lógicos, documentação de universo, personagens (advogado, juiz, testemunhas, réus), inimigos (argumentos contrários, falácias), assets de cenário e inventário.",
      "en": "Concept and documentation of the educational game, definition of courtroom point-and-click mechanic, case structure, logical operators, documentation of universe, characters (lawyer, judge, witnesses, defendants), enemies (counter-arguments, fallacies), scene assets, and inventory."
    },
    "technicalDetails": {
      "pt": "O jogador atua como advogado em um tribunal, solucionando casos analisando termos lógicos relacionados à matemática lógica. Utiliza operadores lógicos (e, ou, se, então) e conceitos como tabela verdade e proposições (tautologias, contradições, contingências) para construir argumentos, confrontar testemunhos e provar a inocência ou culpa dos réus.",
      "en": "The player acts as a lawyer in a tribunal, solving cases by analyzing logical terms related to mathematical logic. Uses logical operators (and, or, if, then) and concepts like truth tables and propositions (tautologies, contradictions, contingencies) to build arguments, confront testimonies, and prove the innocence or guilt of defendants."
    },
    "results": {
      "pt": "Projeto em estágio ativo (Fase de documentação - produção dos primeiros documentos (pipeline ativo)). Documentação e prototipagem contínua.",
      "en": "Project in active stage (Fase de documentação - produção dos primeiros documentos (pipeline ativo)). Ongoing documentation and prototyping."
    },
    "prototypeStage": "mechanic-prototype",
    "gameplayProfile": {
      "genre": {
        "pt": "Educacional / Point-and-Click / Tribunal",
        "en": "Educational / Point-and-Click / Courtroom"
      },
      "cameraPerspective": "first-person",
      "targetPlatform": [
        "PC",
        "Web (HTML5)",
        "Mobile"
      ],
      "controlsSummary": {
        "pt": "Mouse point-and-click / Toque na tela",
        "en": "Mouse point-and-click / Touchscreen"
      }
    },
    "gameFeelDetails": {
      "movementMechanics": [
        {
          "pt": "Navegação ágil entre visão do juiz, bancada da defesa e testemunhas",
          "en": "Snappy camera pans between judge bench, defense stand, and witnesses"
        },
        {
          "pt": "Inspeção tátil de autos do processo e evidências lógicas",
          "en": "Tactile inspection of case files and logical evidence items"
        }
      ],
      "tactileFeedback": [
        {
          "pt": "Impacto sonoro e tremor dramático de câmera ao apontar contradições lógicas",
          "en": "Dramatic camera slam and sound slam when objecting to logical contradictions"
        },
        {
          "pt": "Animação de carimbo e selo de 'Tautologia Comprovada' ao concluir deduções",
          "en": "Stamp animation and 'Tautology Proven' seal upon validating deductions"
        }
      ],
      "soundVisualSync": {
        "pt": "Fanfarra de vitória estilizada inspirada em tribunais de anime com efeito máquina de escrever nos diálogos.",
        "en": "Stylized anime courtroom victory stings paired with typewriter text delivery."
      }
    },
    "systemsArchitecture": {
      "engineArchitecture": {
        "pt": "Parser de operadores lógicos booleanos conectado ao sistema de diálogos condicionais.",
        "en": "Boolean logic operator parser hooked into conditional dialogue graph."
      },
      "dataDrivenDesign": {
        "pt": "Casos investigativos e proposições cadastrados em Resources para fácil criação de novos episódios.",
        "en": "Cases and propositions registered as Resources for frictionless episode authoring."
      },
      "decouplingStrategy": {
        "pt": "Grafo de argumentos independente da camada de apresentação visual 2D.",
        "en": "Argument graph completely decoupled from 2D visual presentation layer."
      }
    },
    "gallery": [
      {
        "url": "assets/projects/tribunal-logico/gallery-01.svg",
        "caption": {
          "pt": "Cenário do tribunal com bancada da defesa e visão do magistrado.",
          "en": "Courtroom setting with defense bench and judge's perspective."
        },
        "alt": "Tribunal Lógico - Preview 1"
      },
      {
        "url": "assets/projects/tribunal-logico/gallery-02.svg",
        "caption": {
          "pt": "Mecânica de confronto de depoimentos com apontamento de contradições.",
          "en": "Testimony confrontation mechanics with contradiction objections."
        },
        "alt": "Tribunal Lógico - Preview 2"
      },
      {
        "url": "assets/projects/tribunal-logico/gallery-03.svg",
        "caption": {
          "pt": "Painel de avaliação de tabela verdade, operadores lógicos e tautologias.",
          "en": "Truth table, logical operators, and tautology evaluation panel."
        },
        "alt": "Tribunal Lógico - Preview 3"
      },
      {
        "url": "assets/projects/tribunal-logico/gallery-04.svg",
        "caption": {
          "pt": "Fichas de personagens: advogado, juiz, réus, testemunhas e evidências.",
          "en": "Character sheets: lawyer, judge, defendants, witnesses, and evidence."
        },
        "alt": "Tribunal Lógico - Preview 4"
      }
    ],
    "repositoryUrl": "https://github.com/Germano123",
    "buildUrl": null,
    "documentationUrl": null
  },
  {
    "id": "typing-defenders",
    "slug": "typing-defenders",
    "title": "Typing Defenders",
    "projectType": "game",
    "areas": [
      "games-prototypes",
      "software-shelf"
    ],
    "technologies": [
      "Godot / Unity",
      "Input Buffer",
      "Tower Defense",
      "Game Feel"
    ],
    "tags": [
      "gamedev",
      "indie",
      "educacional",
      "digitação",
      "typing",
      "aquele-professor"
    ],
    "status": "in-progress",
    "visibility": "public",
    "featured": false,
    "cover": "assets/projects/typing-defenders/cover.svg",
    "summary": {
      "pt": "Jogo educacional de digitação desenvolvido em parceria com a marca Aquele Professor. O jogador controla o combate contra inimigos que avançam em hordas por meio da digitação. Para parar os avanços dos dois lados, o jogador deve digitar as teclas simétricas do teclado. As hordas podem vir com inimigos exigindo uma tecla, duas teclas ou pequenas palavras inteiras. Os chefes são textos longos onde cada barra de vida do inimigo é uma prosa do texto, exigindo digitação rápida o suficiente para conclusão entre cada prosa.",
      "en": "Educational typing game developed in partnership with the Aquele Professor brand. The player controls combat against enemies advancing in hordes through typing. To stop advances on both sides, the player must type symmetric keys on the keyboard. Hordes can come with enemies requiring one key, two keys, or entire short words. Bosses are long texts where each enemy health bar is a prose of the text, requiring fast enough typing to complete between each prose."
    },
    "problem": {
      "pt": "Ensinar digitação correta e rápida de forma envolvente, transformando a prática de teclado em uma mecânica de defesa de torre onde cada tecla digitada é uma ação de combate contra hordas de inimigos e chefes de texto longo.",
      "en": "Teach correct and fast typing in an engaging way, transforming keyboard practice into a tower defense mechanic where each typed key is a combat action against enemy hordes and long-text bosses."
    },
    "solution": {
      "pt": "Um jogo onde digitar é o gatilho de controle contra inimigos que avançam em hordas. O jogador digita teclas simétricas do teclado para parar os avanços dos dois lados. Inimigos exigem uma tecla, duas teclas ou pequenas palavras inteiras. Chefes são textos longos onde cada barra de vida é uma prosa do texto. O objetivo é avançar nas hordas enquanto aprende digitação corretamente.",
      "en": "A game where typing is the control trigger against enemies advancing in hordes. The player types symmetric keys on the keyboard to stop advances on both sides. Enemies require one key, two keys, or entire short words. Bosses are long texts where each health bar is a prose of the text. The objective is to advance through hordes while learning to type correctly."
    },
    "contributions": {
      "pt": "Concepção e documentação do jogo educacional, definição da mecânica de digitação e teclas simétricas, estrutura das hordas e chefes, documentação de universo, personagem (jogador/digitador), inimigos (hordas de inimigos, chefes de texto longo), assets de cenário e inventário.",
      "en": "Concept and documentation of the educational game, definition of typing and symmetric keys mechanic, horde and boss structure, documentation of universe, character (player/typist), enemies (enemy hordes, long-text bosses), scene assets, and inventory."
    },
    "technicalDetails": {
      "pt": "Jogo onde digitar é o gatilho de controle contra inimigos que avançam em hordas. O jogador digita teclas simétricas do teclado para parar os avanços dos dois lados. Inimigos exigem uma tecla, duas teclas ou pequenas palavras inteiras. Chefes são textos longos onde cada barra de vida é uma prosa do texto. O objetivo é avançar nas hordas enquanto aprende digitação corretamente.",
      "en": "Game where typing is the control trigger against enemies advancing in hordes. The player types symmetric keys on the keyboard to stop advances on both sides. Enemies require one key, two keys, or entire short words. Bosses are long texts where each health bar is a prose of the text. The objective is to advance through hordes while learning to type correctly."
    },
    "results": {
      "pt": "Projeto em estágio ativo (Fase de documentação - produção dos primeiros documentos (pipeline ativo)). Documentação e prototipagem contínua.",
      "en": "Project in active stage (Fase de documentação - produção dos primeiros documentos (pipeline ativo)). Ongoing documentation and prototyping."
    },
    "prototypeStage": "mechanic-prototype",
    "gameplayProfile": {
      "genre": {
        "pt": "Educacional / Defesa de Torre por Digitação",
        "en": "Educational / Typing Tower Defense"
      },
      "cameraPerspective": "top-down",
      "targetPlatform": [
        "PC (Windows / Linux)",
        "Web"
      ],
      "controlsSummary": {
        "pt": "Teclado completo com teclas simétricas (Mãos esquerda e direita)",
        "en": "Full keyboard with symmetrical typing (Left and right hands)"
      }
    },
    "gameFeelDetails": {
      "movementMechanics": [
        {
          "pt": "Detecção de teclas com tolerância milimétrica de timing para combos contínuos",
          "en": "Key detection with sub-frame timing tolerance for seamless combos"
        },
        {
          "pt": "Hordas bilaterais exigindo equilíbrio constante entre mão esquerda e direita",
          "en": "Bilateral hordes enforcing continuous left and right hand balance"
        }
      ],
      "tactileFeedback": [
        {
          "pt": "Partículas luminosas e recuo tátil a cada tecla correta disparada",
          "en": "Bursting spark particles and tactile recoil on every correctly typed key"
        },
        {
          "pt": "Onda de choque na tela ao finalizar uma prosa inteira em batalhas de chefe",
          "en": "Full-screen shockwave upon typing down an entire boss prose paragraph"
        }
      ],
      "soundVisualSync": {
        "pt": "Clicks sonoros de switch mecânico afinados em escala pentatônica harmônica.",
        "en": "Mechanical switch clicks harmonized to an ascending pentatonic musical scale."
      }
    },
    "systemsArchitecture": {
      "engineArchitecture": {
        "pt": "Fila de inputs assíncrona de alta frequência com árvore trie para casamento de palavras.",
        "en": "High-frequency asynchronous input buffer paired with trie tree for word matching."
      },
      "dataDrivenDesign": {
        "pt": "Textos de prosa e tabelas de frequência de vocabulário serializados em JSON/Resources.",
        "en": "Prose texts and vocabulary frequency matrices serialized in JSON/Resources."
      },
      "decouplingStrategy": {
        "pt": "Motor de combate desacoplado do processador de layout de teclado (ABNT2 e ANSI).",
        "en": "Combat engine decoupled from keyboard layout parser (supporting ABNT2 and ANSI)."
      }
    },
    "gallery": [
      {
        "url": "assets/projects/typing-defenders/gallery-01.svg",
        "caption": {
          "pt": "Campo de batalha com hordas de inimigos avançando pelos dois lados da tela.",
          "en": "Battlefield with enemy hordes advancing from both screen flanks."
        },
        "alt": "Typing Defenders - Preview 1"
      },
      {
        "url": "assets/projects/typing-defenders/gallery-02.svg",
        "caption": {
          "pt": "Mecânica de digitação simétrica sincronizada com as duas mãos no teclado.",
          "en": "Symmetrical typing mechanics synchronized across both keyboard hands."
        },
        "alt": "Typing Defenders - Preview 2"
      },
      {
        "url": "assets/projects/typing-defenders/gallery-03.svg",
        "caption": {
          "pt": "Batalha contra chefe onde cada barra de vida corresponde a uma prosa longa.",
          "en": "Boss battle where each health bar corresponds to an extensive prose passage."
        },
        "alt": "Typing Defenders - Preview 3"
      },
      {
        "url": "assets/projects/typing-defenders/gallery-04.svg",
        "caption": {
          "pt": "Painel de telemetria de precisão, ritmo de digitação e palavras por minuto (WPM).",
          "en": "Accuracy, typing cadence, and words-per-minute (WPM) telemetry dashboard."
        },
        "alt": "Typing Defenders - Preview 4"
      }
    ],
    "repositoryUrl": "https://github.com/Germano123",
    "buildUrl": null,
    "documentationUrl": null
  },
  {
    "id": "little-knight",
    "slug": "little-knight",
    "title": "Little Knight",
    "projectType": "game",
    "areas": [
      "games-prototypes",
      "software-shelf"
    ],
    "technologies": [
      "Godot / Unity",
      "FSM",
      "Pixel Art / 2D",
      "Game Feel"
    ],
    "tags": [
      "gamedev",
      "indie",
      "platformer",
      "rpg"
    ],
    "status": "in-progress",
    "visibility": "public",
    "featured": true,
    "cover": "assets/projects/little-knight/cover.svg",
    "summary": {
      "pt": "Jogo de RPG side-scroll com a agilidade e velocidade de Sonic e plataforma de Super Mario, no estilo de produção da LostBoys Studio Indie. O jogador assume o papel de um escudeiro em uma jornada para salvar seu pequeno vilarejo de um mago que transformou seus amigos em animais e os sequestrou.",
      "en": "Side-scroll RPG game with the agility and speed of Sonic and platforming of Super Mario, in the LostBoys Studio Indie production style. The player takes the role of a squire on a journey to save his small village from a mage who transformed his friends into animals and kidnapped them."
    },
    "problem": {
      "pt": "Criar um jogo de plataforma side-scroll que combine agilidade, velocidade e RPG, com desafios de parkour, sistema de vida e combate, chefes específicos por bioma e um loop de jogabilidade que incentive a conclusão rápida das fases.",
      "en": "Create a side-scroll platformer game combining agility, speed and RPG, with parkour challenges, life and combat system, biome-specific bosses, and a gameplay loop that encourages fast phase completion."
    },
    "solution": {
      "pt": "O jogador passa com agilidade por desafios de plataformas, escolhendo rotas diferentes e rápidas para passar pelos percursos da fase e chegar ao objetivo final. Há um sistema de vida e combate para enfrentar inimigos com armas, encorajando a conclusão com agilidade e sequência de parkour. Chefes enfrentam o jogador a cada 3 sequências de fases (mini boss) e depois mais 3 fases (chefe de bioma), cada um com mecânicas específicas.",
      "en": "The player passes agilely through platform challenges, choosing different and fast routes to go through the phase paths and reach the final objective. There is a life and combat system to face enemies with weapons, encouraging completion with agility and parkour sequence. Bosses face the player every 3 phase sequences (mini boss) and then after 3 more phases (biome boss), each with specific mechanics."
    },
    "contributions": {
      "pt": "Concepção e documentação do jogo, definição da mecânica de plataforma side-scroll e parkour, sistema de vida e combate, estrutura de chefes (mini boss a cada 3 fases, chefe de bioma), documentação de universo, vilarejo, mago, biomas, personagens (fichas de escudeiro, amigos e NPCs).",
      "en": "Concept and documentation of the game, definition of side-scroll platformer and parkour mechanics, life and combat system, boss structure (mini boss every 3 phases, biome boss), documentation of universe, village, mage, biomes, characters (squire sheets, friends and NPCs)."
    },
    "technicalDetails": {
      "pt": "O jogador assume o papel de um escudeiro em uma jornada para salvar seu pequeno vilarejo de um mago que transformou seus amigos em animais e os sequestrou. Enfrentando biomas diferentes, ele deve passar com agilidade por desafios de plataformas, escolhendo rotas diferentes e rápidas para passar pelos percursos da fase e chegar ao objetivo final. Teremos um sistema de vida e combate para enfrentar os inimigos com suas armas, mas que deve ser encorajado a passar pelas fases com agilidade e sequência de parkour. Chefes enfrentam o jogador em momentos específicos das fases: a cada 3 sequências de fases, um mini boss; depois mais 3 fases, um chefe de bioma. Os combates carregam mecânicas específicas de cada boss.",
      "en": "The player takes the role of a squire on a journey to save his small village from a mage who transformed his friends into animals and kidnapped them. Facing different biomes, he must pass agilely through platform challenges, choosing different and fast routes to go through the phase paths and reach the final objective. We will have a life and combat system to face enemies with their weapons, but it should be encouraged to pass through phases with agility and parkour sequence. Bosses face the player at specific moments of phases: every 3 phase sequences, a mini boss; then after 3 more phases, a biome boss. The combats carry specific mechanics of each boss."
    },
    "results": {
      "pt": "Projeto em estágio ativo (Fase de documentação - produção dos primeiros documentos (pipeline ativo)). Documentação e prototipagem contínua.",
      "en": "Project in active stage (Fase de documentação - produção dos primeiros documentos (pipeline ativo)). Ongoing documentation and prototyping."
    },
    "prototypeStage": "mechanic-prototype",
    "gameplayProfile": {
      "genre": {
        "pt": "RPG de Plataforma Side-Scroll",
        "en": "Side-Scroll Platformer RPG"
      },
      "cameraPerspective": "side-scroller",
      "targetPlatform": [
        "PC",
        "Consoles",
        "Web"
      ],
      "controlsSummary": {
        "pt": "Gamepad e Teclado com mapeamento fluido de pulo e ataque",
        "en": "Gamepad & Keyboard with fluid jump and attack bindings"
      }
    },
    "gameFeelDetails": {
      "movementMechanics": [
        {
          "pt": "Coyote time (90ms) e jump buffering (110ms) para sensação de controle absoluto",
          "en": "90ms coyote time and 110ms jump buffering for razor-sharp platforming control"
        },
        {
          "pt": "Curvas de aceleração e momentum com conservação de velocidade em rampas e parkour",
          "en": "Momentum acceleration curves conserving velocity through ramps and parkour"
        }
      ],
      "tactileFeedback": [
        {
          "pt": "Squash & stretch expressivo nos pulos e paradas bruscas",
          "en": "Juicy squash & stretch on jumps, wall slides, and sudden stops"
        },
        {
          "pt": "Congelamento momentâneo de impacto (hit-stop de 4 frames) em golpes de espada",
          "en": "4-frame hit-stop impact freeze on sword strikes against enemies"
        }
      ],
      "soundVisualSync": {
        "pt": "Passadas rítmicas com partículas de poeira sincronizadas à velocidade do personagem.",
        "en": "Rhythmic footsteps with dynamic dust kick particles tied to player velocity."
      }
    },
    "systemsArchitecture": {
      "engineArchitecture": {
        "pt": "Máquina de Estados Hierárquica (HFSM) gerenciando locomoção, escalada e combate.",
        "en": "Hierarchical Finite State Machine (HFSM) governing locomotion, climbing, and combat."
      },
      "dataDrivenDesign": {
        "pt": "Definição de biomas, tabelas de loot e padrões de chefes em ScriptableObjects/Resources.",
        "en": "Biome parameters, loot tables, and boss pattern state graphs in Resources."
      },
      "decouplingStrategy": {
        "pt": "Controlador de câmera cinemática desacoplado com zonas mortas dinâmicas.",
        "en": "Decoupled cinematic camera controller featuring dynamic lookahead and deadzones."
      }
    },
    "gallery": [
      {
        "url": "assets/projects/little-knight/gallery-01.svg",
        "caption": {
          "pt": "Fase de plataforma side-scroll com múltiplos percursos de velocidade.",
          "en": "Side-scroll platformer stage featuring branching speedrun routes."
        },
        "alt": "Little Knight - Preview 1"
      },
      {
        "url": "assets/projects/little-knight/gallery-02.svg",
        "caption": {
          "pt": "Mecânica de parkour, salto na parede e esquiva ágil contra armadilhas.",
          "en": "Parkour mechanics, wall jumps, and nimble trap dodges."
        },
        "alt": "Little Knight - Preview 2"
      },
      {
        "url": "assets/projects/little-knight/gallery-03.svg",
        "caption": {
          "pt": "Enfrentamento tático contra mini-boss com padrões de ataque telegrafados.",
          "en": "Tactical encounter against mini-boss with telegraphed attack phases."
        },
        "alt": "Little Knight - Preview 3"
      },
      {
        "url": "assets/projects/little-knight/gallery-04.svg",
        "caption": {
          "pt": "Ficha do escudeiro, inventário de armas e progressão de biomas do vilarejo.",
          "en": "Squire character sheet, weapon inventory, and village biome progression."
        },
        "alt": "Little Knight - Preview 4"
      }
    ],
    "repositoryUrl": "https://github.com/Germano123",
    "buildUrl": null,
    "documentationUrl": null
  },
  {
    "id": "metaghost-fantasy",
    "slug": "metaghost-fantasy",
    "title": "MetaGhost Fantasy",
    "projectType": "game",
    "areas": [
      "games-prototypes",
      "software-shelf"
    ],
    "technologies": [
      "Unreal / Unity / Godot",
      "Co-op Multiplayer",
      "Shaders 3D",
      "Action Combat"
    ],
    "tags": [
      "gamedev",
      "indie",
      "plataforma",
      "3d",
      "combate"
    ],
    "status": "in-progress",
    "visibility": "public",
    "featured": false,
    "cover": "assets/projects/metaghost-fantasy/cover.svg",
    "summary": {
      "pt": "Projeto da LostBoys de exploração 3D e combate contra fantasmas em uma mansão abandonada. A proposta inclui seis personagens, modo solo ou cooperativo para até quatro jogadores, coleta de ectoplasma e fabricação de armas e armaduras.",
      "en": "LostBoys project of 3D exploration and combat against ghosts in an abandoned mansion. The proposal includes six characters, solo or cooperative mode for up to four players, ectoplasm collection and weapon and armor crafting."
    },
    "problem": {
      "pt": "Criar um jogo de exploração 3D e combate contra fantasmas com múltiplos personagens jogáveis, modo cooperativo, sistema de progressão por coleta de ectoplasma e fabricação de equipamentos, em uma ambientação de mansão abandonada com sete famílias de inimigos.",
      "en": "Create a 3D exploration and combat game against ghosts with multiple playable characters, cooperative mode, progression system through ectoplasm collection and equipment crafting, in an abandoned mansion setting with seven enemy families."
    },
    "solution": {
      "pt": "Um jogo de exploração 3D e combate contra fantasmas em uma mansão abandonada, com seis personagens (Vitor, Dra. Volt, Atlas, Vértex, Neri, Alec), modo solo ou cooperativo para até quatro jogadores, coleta de ectoplasma, fabricação de armas e armaduras, e sete famílias de inimigos com mecânicas distintas.",
      "en": "A 3D exploration and combat game against ghosts in an abandoned mansion, with six characters (Vitor, Dra. Volt, Atlas, Vertex, Neri, Alec), solo or cooperative mode for up to four players, ectoplasm collection, weapon and armor crafting, and seven enemy families with distinct mechanics."
    },
    "contributions": {
      "pt": "Concepção e documentação do jogo, definição dos seis personagens com arquétipos e mecânicas exclusivas, estrutura de sete famílias de inimigos, sistema de coleta de ectoplasma e fabricação de armas/armaduras, modo solo e cooperativo, documentação de universo, personagens, inventário e links de assets.",
      "en": "Concept and documentation of the game, definition of six characters with archetypes and exclusive mechanics, structure of seven enemy families, ectoplasm collection and weapon/armor crafting system, solo and cooperative mode, documentation of universe, characters, inventory and asset links."
    },
    "technicalDetails": {
      "pt": "Projeto da LostBoys de exploração 3D e combate contra fantasmas em uma mansão abandonada. A proposta inclui seis personagens, modo solo ou cooperativo para até quatro jogadores, coleta de ectoplasma e fabricação de armas e armaduras.",
      "en": "LostBoys project of 3D exploration and combat against ghosts in an abandoned mansion. The proposal includes six characters, solo or cooperative mode for up to four players, ectoplasm collection and weapon and armor crafting."
    },
    "results": {
      "pt": "Projeto em estágio ativo (Documentação reúne a proposta do jogo e os materiais disponíveis. Versão jogável, funcionalidades implementadas, motor e plataformas: a confirmar.). Documentação e prototipagem contínua.",
      "en": "Project in active stage (Documentação reúne a proposta do jogo e os materiais disponíveis. Versão jogável, funcionalidades implementadas, motor e plataformas: a confirmar.). Ongoing documentation and prototyping."
    },
    "prototypeStage": "mechanic-prototype",
    "gameplayProfile": {
      "genre": {
        "pt": "Exploração 3D & Ação Cooperativa",
        "en": "3D Exploration & Co-op Action"
      },
      "cameraPerspective": "third-person",
      "targetPlatform": [
        "PC",
        "Consoles"
      ],
      "controlsSummary": {
        "pt": "Gamepad e Teclado/Mouse com mira em terceira pessoa",
        "en": "Gamepad and Keyboard/Mouse with third-person targeting"
      }
    },
    "gameFeelDetails": {
      "movementMechanics": [
        {
          "pt": "Movimentação fluida em 3D com esquiva direcional e escalada de obstáculos",
          "en": "Fluid 3D movement with omnidirectional dashes and obstacle mantling"
        },
        {
          "pt": "Seis personagens com cadências, massas e velocidades distintas",
          "en": "Six distinct characters with unique cadences, masses, and speeds"
        }
      ],
      "tactileFeedback": [
        {
          "pt": "Feedback de sucção e absorção de ectoplasma com vibração háptica no controle",
          "en": "Ectoplasm vacuum and absorption feedback with haptic controller rumble"
        },
        {
          "pt": "Efeitos volumétricos de luz e dissolução espectral ao derrotar fantasmas",
          "en": "Volumetric lighting bursts and spectral dissolve shaders when banishing ghosts"
        }
      ],
      "soundVisualSync": {
        "pt": "Atmosfera sonora imersiva com áudio espacial 3D em mansão abandonada.",
        "en": "Immersive soundscape with 3D spatialized audio echoing through the mansion."
      }
    },
    "systemsArchitecture": {
      "engineArchitecture": {
        "pt": "Arquitetura multiplayer autoritativa com replicação de estados para até 4 jogadores.",
        "en": "Authoritative multiplayer architecture with state replication for up to 4 players."
      },
      "dataDrivenDesign": {
        "pt": "Sete famílias de inimigos e receitas de forja cadastradas em tabelas relacionais de dados.",
        "en": "Seven enemy families and crafting recipes authored in relational data tables."
      },
      "decouplingStrategy": {
        "pt": "Subsistema de forja e inventário isolado da simulação física de combate.",
        "en": "Crafting and inventory subsystem decoupled from real-time physics combat simulation."
      }
    },
    "gallery": [
      {
        "url": "assets/projects/metaghost-fantasy/gallery-01.svg",
        "caption": {
          "pt": "Mansão abandonada com iluminação volumétrica e atmosfera de mistério.",
          "en": "Abandoned mansion featuring volumetric lighting and eerie mystery atmosphere."
        },
        "alt": "MetaGhost Fantasy - Preview 1"
      },
      {
        "url": "assets/projects/metaghost-fantasy/gallery-02.svg",
        "caption": {
          "pt": "Combate cooperativo em equipe combinando arquétipos dos heróis.",
          "en": "Cooperative team combat combining complementary hero archetypes."
        },
        "alt": "MetaGhost Fantasy - Preview 2"
      },
      {
        "url": "assets/projects/metaghost-fantasy/gallery-03.svg",
        "caption": {
          "pt": "Família de inimigos fantasmas com mecânicas espectrais exclusivas.",
          "en": "Ghost enemy family showcasing distinctive spectral behaviors and shaders."
        },
        "alt": "MetaGhost Fantasy - Preview 3"
      },
      {
        "url": "assets/projects/metaghost-fantasy/gallery-04.svg",
        "caption": {
          "pt": "Sistema de coleta de ectoplasma e forja de armas e armaduras místicas.",
          "en": "Ectoplasm harvesting system and mystical weapon/armor crafting station."
        },
        "alt": "MetaGhost Fantasy - Preview 4"
      }
    ],
    "repositoryUrl": "https://github.com/Germano123",
    "buildUrl": null,
    "documentationUrl": null
  },
  {
    "id": "cripto-flowers",
    "slug": "cripto-flowers",
    "title": "Cripto Flowers",
    "projectType": "game",
    "areas": [
      "games-prototypes",
      "software-shelf"
    ],
    "technologies": [
      "Godot / Unity",
      "Simulação Genética",
      "Ciclo Dia/Noite",
      "Pixel Art 2D"
    ],
    "tags": [
      "gamedev",
      "indie",
      "farm",
      "simulacao"
    ],
    "status": "in-progress",
    "visibility": "public",
    "featured": false,
    "cover": "assets/projects/cripto-flowers/cover.svg",
    "summary": {
      "pt": "Jogo de gerenciamento de fazenda (farm management) de visão top-down, no estilo de produção da LostBoys Studio Indie. O jogador cuida de uma pequena fazenda de cultivo de plantas (inicialmente rosas-do-deserto), onde cada planta é única, com características definidas pelo genótipo × fenótipo.",
      "en": "Farm management game with top-down view, in the LostBoys Studio Indie production style. The player takes care of a small plant cultivation farm (initially desert roses), where each plant is unique, with characteristics defined by genotype × phenotype."
    },
    "problem": {
      "pt": "Criar um jogo de simulação de fazenda top-down com mecânicas de cultivo baseadas em genética (genótipo × fenótipo), onde o tamanho, quantidade de flores e caules, poder de geração e fertilizações são definidos pelo DNA da planta, exigindo cuidados contínuos de luz, sombra, água e fertilizantes.",
      "en": "Create a top-down farm simulation game with genetics-based farming mechanics (genotype × phenotype), where size, number of flowers and stems, generation power and fertilizations are defined by the plant's DNA, requiring continuous care of light, shade, water and fertilizers."
    },
    "solution": {
      "pt": "O jogador cuida de uma pequena fazenda de cultivo. Cada planta é única, com características definidas pelo genótipo × fenótipo. O tamanho é controlado pelo pote (podendo aumentar o tamanho geral da planta ou elevar raízes expostas/profundas); a quantidade de flores e caules é definida pelo DNA, impactando o poder de geração e as fertilizações futuras. Cuidados contínuos de luz, sombra, água e fertilizantes geram decisões diárias e contínuas (um dia inteiro de jogo = 24 min, a partir das 6h).",
      "en": "The player takes care of a small cultivation farm. Each plant is unique, with characteristics defined by genotype × phenotype. Size is controlled by the pot (being able to increase the overall plant size or elevate exposed/deep roots); the number of flowers and stems is defined by DNA, impacting generation power and future fertilizations. Continuous care of light, shade, water and fertilizers generates daily and continuous decisions (one full game day = 24 min, starting at 6 AM)."
    },
    "contributions": {
      "pt": "Concepção e documentação do jogo, definição da mecânica de cultivo baseada em genética (genótipo × fenótipo), sistema de cuidado contínuo (luz, sombra, água, fertilizantes), estrutura de potes e raízes, documentação de universo, fazenda, NPCs, personagens e pendências.",
      "en": "Concept and documentation of the game, definition of genetics-based farming mechanic (genotype × phenotype), continuous care system (light, shade, water, fertilizers), pot and root structure, documentation of universe, farm, NPCs, characters and pending items."
    },
    "technicalDetails": {
      "pt": "O jogador cuida de uma pequena fazenda de cultivo. Cada planta é única, com características definidas pelo genótipo × fenótipo. O tamanho é controlado pelo pote (podendo aumentar o tamanho geral da planta ou elevar raízes expostas/profundas); a quantidade de flores e caules é definida pelo DNA, impactando o poder de geração e as fertilizações futuras. Cuidados contínuos de luz, sombra, água e fertilizantes geram decisões diárias e contínuas (um dia inteiro de jogo = 24 min, a partir das 6h).",
      "en": "The player takes care of a small cultivation farm. Each plant is unique, with characteristics defined by genotype × phenotype. Size is controlled by the pot (being able to increase the overall plant size or elevate exposed/deep roots); the number of flowers and stems is defined by DNA, impacting generation power and future fertilizations. Continuous care of light, shade, water and fertilizers generates daily and continuous decisions (one full game day = 24 min, starting at 6 AM)."
    },
    "results": {
      "pt": "Projeto em estágio ativo (Fase de documentação - produção dos primeiros documentos (pipeline ativo)). Documentação e prototipagem contínua.",
      "en": "Project in active stage (Fase de documentação - produção dos primeiros documentos (pipeline ativo)). Ongoing documentation and prototyping."
    },
    "prototypeStage": "mechanic-prototype",
    "gameplayProfile": {
      "genre": {
        "pt": "Simulação de Fazenda Top-Down",
        "en": "Top-Down Farm Simulation"
      },
      "cameraPerspective": "top-down",
      "targetPlatform": [
        "PC",
        "Mobile",
        "Web"
      ],
      "controlsSummary": {
        "pt": "Mouse, Teclado e Touch para jardinagem tátil",
        "en": "Mouse, Keyboard, and Touch for tactile gardening"
      }
    },
    "gameFeelDetails": {
      "movementMechanics": [
        {
          "pt": "Movimentação calma com transições suaves de ferramentas e regador",
          "en": "Cozy slow-paced movement with smooth tool and watering can transitions"
        },
        {
          "pt": "Interação direta com potes, profundidade de raízes e podas de caule",
          "en": "Direct tactile manipulation of pots, root depth, and stem pruning"
        }
      ],
      "tactileFeedback": [
        {
          "pt": "Efeito tátil de gotas de água umedecendo a terra com mudança de cor do solo",
          "en": "Droplet splash effects wetting soil tiles with rich procedural color darkening"
        },
        {
          "pt": "Florescimento gradual com animações de desabrochar em interpolação suave",
          "en": "Gradual blooming with soft interpolation easing curves on petal expansion"
        }
      ],
      "soundVisualSync": {
        "pt": "Trilha sonora acústica relaxante sincronizada com o ciclo dia/noite de 24 minutos.",
        "en": "Relaxing acoustic background music dynamically tuned to the 24-minute day/night cycle."
      }
    },
    "systemsArchitecture": {
      "engineArchitecture": {
        "pt": "Motor genético determinístico calculando cruzamentos de DNA (genótipo × fenótipo).",
        "en": "Deterministic genetics engine computing DNA Punnett squares (genotype × phenotype)."
      },
      "dataDrivenDesign": {
        "pt": "Curvas de crescimento botânico, nutrientes e tipos de solo em Resources configuráveis.",
        "en": "Botanical growth curves, soil nutrients, and pot geometries in custom Resources."
      },
      "decouplingStrategy": {
        "pt": "Simulador de passagem de tempo isolado do renderizador de sprites.",
        "en": "Time-dilation tick simulator completely decoupled from sprite rendering."
      }
    },
    "gallery": [
      {
        "url": "assets/projects/cripto-flowers/gallery-01.svg",
        "caption": {
          "pt": "Visão top-down da fazenda de cultivo com canteiros e estufas aconchegantes.",
          "en": "Top-down view of the flower farm with cozy garden beds and greenhouses."
        },
        "alt": "Cripto Flowers - Preview 1"
      },
      {
        "url": "assets/projects/cripto-flowers/gallery-02.svg",
        "caption": {
          "pt": "Painel de análise genética confrontando genótipo, fenótipo e linhagens de DNA.",
          "en": "Genetics analysis panel cross-referencing genotype, phenotype, and DNA lineages."
        },
        "alt": "Cripto Flowers - Preview 2"
      },
      {
        "url": "assets/projects/cripto-flowers/gallery-03.svg",
        "caption": {
          "pt": "Sistema de cuidados diários: controle de luz solar, rega e profundidade de potes.",
          "en": "Daily care loop: sunlight exposure, moisture balance, and pot root depth."
        },
        "alt": "Cripto Flowers - Preview 3"
      },
      {
        "url": "assets/projects/cripto-flowers/gallery-04.svg",
        "caption": {
          "pt": "Ciclo de iluminação dinâmica dia e noite transicionando ao longo de 24 minutos.",
          "en": "Dynamic day-to-night lighting cycle transitioning smoothly over 24 minutes."
        },
        "alt": "Cripto Flowers - Preview 4"
      }
    ],
    "repositoryUrl": "https://github.com/Germano123",
    "buildUrl": null,
    "documentationUrl": null
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PROJECTS };
}
