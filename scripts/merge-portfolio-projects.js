const fs = require('fs');
const path = require('path');

// 1. Read existing projects from js/data/projects.js
// We extract the existing PROJECTS array
const existingCode = fs.readFileSync('js/data/projects.js', 'utf8');

// The 6 new games data
const gamesData = [
  {
    file: 'digital-delivery.json',
    featured: true,
    collaborationType: 'parceria',
    partner: 'Aquele Professor',
    technologies: ["Godot / Unity", "Redes & Sockets", "Terminal CLI", "Shader 3D"],
    gameplayProfile: {
      genre: { pt: "Educacional / Simulação Hacker", en: "Educational / Hacker Simulation" },
      cameraPerspective: "first-person",
      targetPlatform: ["PC (Windows / Linux)", "Web"],
      controlsSummary: { pt: "Terminal de linha de comando + Controles 3D (WASD)", en: "Command line terminal + 3D controls (WASD)" }
    },
    gameFeelDetails: {
      movementMechanics: [
        { pt: "Agilidade na arena 3D para entrega física de arquivos antes do estouro de buffer", en: "3D arena agility for physical file delivery before buffer overflow" },
        { pt: "Comandos de terminal rápidos com autocompletar e histórico de comandos", en: "Fast terminal typing with command autocomplete and history stack" }
      ],
      tactileFeedback: [
        { pt: "Alerta visual pulsante e trepidação suave de tela quando a memória atinge 80%", en: "Pulsing visual warning and gentle screen rumble when memory reaches 80%" },
        { pt: "Efeito glitch e estática digital ao estabelecer túneis SSH com sucesso", en: "Digital glitch and static burst upon successful SSH tunnel connection" }
      ],
      soundVisualSync: {
        pt: "Sons mecânicos de teclado combinados a alarmes binaurais de processos ativos na memória.",
        en: "Mechanical keyboard clicks synced with binaural alarms for memory-resident processes."
      }
    },
    systemsArchitecture: {
      engineArchitecture: {
        pt: "Arquitetura cliente-servidor desacoplada com emulador de socket virtual integrado à arena 3D.",
        en: "Decoupled client-server architecture with virtual socket emulator integrated into 3D arena."
      },
      dataDrivenDesign: {
        pt: "Documentação completa: GDD, Mecânicas, Universo, Personagens, Inimigos, Inventário e Assets.",
        en: "Comprehensive documentation: GDD, Mechanics, Universe, Characters, Enemies, Inventory and Assets."
      },
      decouplingStrategy: {
        pt: "Isolamento estrito entre subsistema de console CLI e renderizador de arena em tempo real.",
        en: "Strict isolation between CLI console subsystem and real-time arena renderer."
      }
    },
    galleryCaptions: [
      { pt: "Console de terminal simulando conexões cliente-servidor e chaves SSH.", en: "Terminal console simulating client-server connections and SSH keys." },
      { pt: "Arena virtual 3D onde a personagem robótica carrega arquivos em aplicativos.", en: "3D virtual arena where the robotic character loads files into applications." },
      { pt: "Painel de telemetria de processos em tempo real e monitor de memória.", en: "Real-time process telemetry dashboard and memory monitor." },
      { pt: "Documentação do GDD e mapeamento conceitual de redes e segurança.", en: "GDD documentation and conceptual networking/security mapping." }
    ]
  },
  {
    file: 'tribunal-logico.json',
    featured: true,
    collaborationType: 'parceria',
    partner: 'Aquele Professor',
    technologies: ["Godot Engine", "Point-and-Click", "Matemática Lógica", "UI/UX"],
    gameplayProfile: {
      genre: { pt: "Educacional / Point-and-Click / Tribunal", en: "Educational / Point-and-Click / Courtroom" },
      cameraPerspective: "first-person",
      targetPlatform: ["PC", "Web (HTML5)", "Mobile"],
      controlsSummary: { pt: "Mouse point-and-click / Toque na tela", en: "Mouse point-and-click / Touchscreen" }
    },
    gameFeelDetails: {
      movementMechanics: [
        { pt: "Navegação ágil entre visão do juiz, bancada da defesa e testemunhas", en: "Snappy camera pans between judge bench, defense stand, and witnesses" },
        { pt: "Inspeção tátil de autos do processo e evidências lógicas", en: "Tactile inspection of case files and logical evidence items" }
      ],
      tactileFeedback: [
        { pt: "Impacto sonoro e tremor dramático de câmera ao apontar contradições lógicas", en: "Dramatic camera slam and sound slam when objecting to logical contradictions" },
        { pt: "Animação de carimbo e selo de 'Tautologia Comprovada' ao concluir deduções", en: "Stamp animation and 'Tautology Proven' seal upon validating deductions" }
      ],
      soundVisualSync: {
        pt: "Fanfarra de vitória estilizada inspirada em tribunais de anime com efeito máquina de escrever nos diálogos.",
        en: "Stylized anime courtroom victory stings paired with typewriter text delivery."
      }
    },
    systemsArchitecture: {
      engineArchitecture: {
        pt: "Parser de operadores lógicos booleanos conectado ao sistema de diálogos condicionais.",
        en: "Boolean logic operator parser hooked into conditional dialogue graph."
      },
      dataDrivenDesign: {
        pt: "Casos investigativos e proposições cadastrados em Resources para fácil criação de novos episódios.",
        en: "Cases and propositions registered as Resources for frictionless episode authoring."
      },
      decouplingStrategy: {
        pt: "Grafo de argumentos independente da camada de apresentação visual 2D.",
        en: "Argument graph completely decoupled from 2D visual presentation layer."
      }
    },
    galleryCaptions: [
      { pt: "Cenário do tribunal com bancada da defesa e visão do magistrado.", en: "Courtroom setting with defense bench and judge's perspective." },
      { pt: "Mecânica de confronto de depoimentos com apontamento de contradições.", en: "Testimony confrontation mechanics with contradiction objections." },
      { pt: "Painel de avaliação de tabela verdade, operadores lógicos e tautologias.", en: "Truth table, logical operators, and tautology evaluation panel." },
      { pt: "Fichas de personagens: advogado, juiz, réus, testemunhas e evidências.", en: "Character sheets: lawyer, judge, defendants, witnesses, and evidence." }
    ]
  },
  {
    file: 'typing-defenders.json',
    featured: true,
    collaborationType: 'parceria',
    partner: 'Aquele Professor',
    technologies: ["Godot / Unity", "Input Buffer", "Tower Defense", "Game Feel"],
    gameplayProfile: {
      genre: { pt: "Educacional / Defesa de Torre por Digitação", en: "Educational / Typing Tower Defense" },
      cameraPerspective: "top-down",
      targetPlatform: ["PC (Windows / Linux)", "Web"],
      controlsSummary: { pt: "Teclado completo com teclas simétricas (Mãos esquerda e direita)", en: "Full keyboard with symmetrical typing (Left and right hands)" }
    },
    gameFeelDetails: {
      movementMechanics: [
        { pt: "Detecção de teclas com tolerância milimétrica de timing para combos contínuos", en: "Key detection with sub-frame timing tolerance for seamless combos" },
        { pt: "Hordas bilaterais exigindo equilíbrio constante entre mão esquerda e direita", en: "Bilateral hordes enforcing continuous left and right hand balance" }
      ],
      tactileFeedback: [
        { pt: "Partículas luminosas e recuo tátil a cada tecla correta disparada", en: "Bursting spark particles and tactile recoil on every correctly typed key" },
        { pt: "Onda de choque na tela ao finalizar uma prosa inteira em batalhas de chefe", en: "Full-screen shockwave upon typing down an entire boss prose paragraph" }
      ],
      soundVisualSync: {
        pt: "Clicks sonoros de switch mecânico afinados em escala pentatônica harmônica.",
        en: "Mechanical switch clicks harmonized to an ascending pentatonic musical scale."
      }
    },
    systemsArchitecture: {
      engineArchitecture: {
        pt: "Fila de inputs assíncrona de alta frequência com árvore trie para casamento de palavras.",
        en: "High-frequency asynchronous input buffer paired with trie tree for word matching."
      },
      dataDrivenDesign: {
        pt: "Textos de prosa e tabelas de frequência de vocabulário serializados em JSON/Resources.",
        en: "Prose texts and vocabulary frequency matrices serialized in JSON/Resources."
      },
      decouplingStrategy: {
        pt: "Motor de combate desacoplado do processador de layout de teclado (ABNT2 e ANSI).",
        en: "Combat engine decoupled from keyboard layout parser (supporting ABNT2 and ANSI)."
      }
    },
    galleryCaptions: [
      { pt: "Campo de batalha com hordas de inimigos avançando pelos dois lados da tela.", en: "Battlefield with enemy hordes advancing from both screen flanks." },
      { pt: "Mecânica de digitação simétrica sincronizada com as duas mãos no teclado.", en: "Symmetrical typing mechanics synchronized across both keyboard hands." },
      { pt: "Batalha contra chefe onde cada barra de vida corresponde a uma prosa longa.", en: "Boss battle where each health bar corresponds to an extensive prose passage." },
      { pt: "Painel de telemetria de precisão, ritmo de digitação e palavras por minuto (WPM).", en: "Accuracy, typing cadence, and words-per-minute (WPM) telemetry dashboard." }
    ]
  },
  {
    file: 'little-knight',
    featured: true,
    collaborationType: 'portfolio',
    technologies: ["Godot / Unity", "FSM", "Pixel Art / 2D", "Game Feel"],
    gameplayProfile: {
      genre: { pt: "RPG de Plataforma Side-Scroll", en: "Side-Scroll Platformer RPG" },
      cameraPerspective: "side-scroller",
      targetPlatform: ["PC", "Consoles", "Web"],
      controlsSummary: { pt: "Gamepad e Teclado com mapeamento fluido de pulo e ataque", en: "Gamepad & Keyboard with fluid jump and attack bindings" }
    },
    gameFeelDetails: {
      movementMechanics: [
        { pt: "Coyote time (90ms) e jump buffering (110ms) para sensação de controle absoluto", en: "90ms coyote time and 110ms jump buffering for razor-sharp platforming control" },
        { pt: "Curvas de aceleração e momentum com conservação de velocidade em rampas e parkour", en: "Momentum acceleration curves conserving velocity through ramps and parkour" }
      ],
      tactileFeedback: [
        { pt: "Squash & stretch expressivo nos pulos e paradas bruscas", en: "Juicy squash & stretch on jumps, wall slides, and sudden stops" },
        { pt: "Congelamento momentâneo de impacto (hit-stop de 4 frames) em golpes de espada", en: "4-frame hit-stop impact freeze on sword strikes against enemies" }
      ],
      soundVisualSync: {
        pt: "Passadas rítmicas com partículas de poeira sincronizadas à velocidade do personagem.",
        en: "Rhythmic footsteps with dynamic dust kick particles tied to player velocity."
      }
    },
    systemsArchitecture: {
      engineArchitecture: {
        pt: "Máquina de Estados Hierárquica (HFSM) gerenciando locomoção, escalada e combate.",
        en: "Hierarchical Finite State Machine (HFSM) governing locomotion, climbing, and combat."
      },
      dataDrivenDesign: {
        pt: "Definição de biomas, tabelas de loot e padrões de chefes em ScriptableObjects/Resources.",
        en: "Biome parameters, loot tables, and boss pattern state graphs in Resources."
      },
      decouplingStrategy: {
        pt: "Controlador de câmera cinemática desacoplado com zonas mortas dinâmicas.",
        en: "Decoupled cinematic camera controller featuring dynamic lookahead and deadzones."
      }
    },
    galleryCaptions: [
      { pt: "Fase de plataforma side-scroll com múltiplos percursos de velocidade.", en: "Side-scroll platformer stage featuring branching speedrun routes." },
      { pt: "Mecânica de parkour, salto na parede e esquiva ágil contra armadilhas.", en: "Parkour mechanics, wall jumps, and nimble trap dodges." },
      { pt: "Enfrentamento tático contra mini-boss com padrões de ataque telegrafados.", en: "Tactical encounter against mini-boss with telegraphed attack phases." },
      { pt: "Ficha do escudeiro, inventário de armas e progressão de biomas do vilarejo.", en: "Squire character sheet, weapon inventory, and village biome progression." }
    ]
  },
  {
    file: 'metaghost-fantasy',
    featured: false,
    collaborationType: 'comercial',
    technologies: ["Unreal / Unity / Godot", "Co-op Multiplayer", "Shaders 3D", "Action Combat"],
    gameplayProfile: {
      genre: { pt: "Exploração 3D & Ação Cooperativa", en: "3D Exploration & Co-op Action" },
      cameraPerspective: "third-person",
      targetPlatform: ["PC", "Consoles"],
      controlsSummary: { pt: "Gamepad e Teclado/Mouse com mira em terceira pessoa", en: "Gamepad and Keyboard/Mouse with third-person targeting" }
    },
    gameFeelDetails: {
      movementMechanics: [
        { pt: "Movimentação fluida em 3D com esquiva direcional e escalada de obstáculos", en: "Fluid 3D movement with omnidirectional dashes and obstacle mantling" },
        { pt: "Seis personagens com cadências, massas e velocidades distintas", en: "Six distinct characters with unique cadences, masses, and speeds" }
      ],
      tactileFeedback: [
        { pt: "Feedback de sucção e absorção de ectoplasma com vibração háptica no controle", en: "Ectoplasm vacuum and absorption feedback with haptic controller rumble" },
        { pt: "Efeitos volumétricos de luz e dissolução espectral ao derrotar fantasmas", en: "Volumetric lighting bursts and spectral dissolve shaders when banishing ghosts" }
      ],
      soundVisualSync: {
        pt: "Atmosfera sonora imersiva com áudio espacial 3D em mansão abandonada.",
        en: "Immersive soundscape with 3D spatialized audio echoing through the mansion."
      }
    },
    systemsArchitecture: {
      engineArchitecture: {
        pt: "Arquitetura multiplayer autoritativa com replicação de estados para até 4 jogadores.",
        en: "Authoritative multiplayer architecture with state replication for up to 4 players."
      },
      dataDrivenDesign: {
        pt: "Sete famílias de inimigos e receitas de forja cadastradas em tabelas relacionais de dados.",
        en: "Seven enemy families and crafting recipes authored in relational data tables."
      },
      decouplingStrategy: {
        pt: "Subsistema de forja e inventário isolado da simulação física de combate.",
        en: "Crafting and inventory subsystem decoupled from real-time physics combat simulation."
      }
    },
    galleryCaptions: [
      { pt: "Mansão abandonada com iluminação volumétrica e atmosfera de mistério.", en: "Abandoned mansion featuring volumetric lighting and eerie mystery atmosphere." },
      { pt: "Combate cooperativo em equipe combinando arquétipos dos heróis.", en: "Cooperative team combat combining complementary hero archetypes." },
      { pt: "Família de inimigos fantasmas com mecânicas espectrais exclusivas.", en: "Ghost enemy family showcasing distinctive spectral behaviors and shaders." },
      { pt: "Sistema de coleta de ectoplasma e forja de armas e armaduras místicas.", en: "Ectoplasm harvesting system and mystical weapon/armor crafting station." }
    ]
  },
  {
    file: 'cripto-flowers',
    featured: false,
    collaborationType: 'portfolio',
    technologies: ["Godot / Unity", "Simulação Genética", "Ciclo Dia/Noite", "Pixel Art 2D"],
    gameplayProfile: {
      genre: { pt: "Simulação de Fazenda Top-Down", en: "Top-Down Farm Simulation" },
      cameraPerspective: "top-down",
      targetPlatform: ["PC", "Mobile", "Web"],
      controlsSummary: { pt: "Mouse, Teclado e Touch para jardinagem tátil", en: "Mouse, Keyboard, and Touch for tactile gardening" }
    },
    gameFeelDetails: {
      movementMechanics: [
        { pt: "Movimentação calma com transições suaves de ferramentas e regador", en: "Cozy slow-paced movement with smooth tool and watering can transitions" },
        { pt: "Interação direta com potes, profundidade de raízes e podas de caule", en: "Direct tactile manipulation of pots, root depth, and stem pruning" }
      ],
      tactileFeedback: [
        { pt: "Efeito tátil de gotas de água umedecendo a terra com mudança de cor do solo", en: "Droplet splash effects wetting soil tiles with rich procedural color darkening" },
        { pt: "Florescimento gradual com animações de desabrochar em interpolação suave", en: "Gradual blooming with soft interpolation easing curves on petal expansion" }
      ],
      soundVisualSync: {
        pt: "Trilha sonora acústica relaxante sincronizada com o ciclo dia/noite de 24 minutos.",
        en: "Relaxing acoustic background music dynamically tuned to the 24-minute day/night cycle."
      }
    },
    systemsArchitecture: {
      engineArchitecture: {
        pt: "Motor genético determinístico calculando cruzamentos de DNA (genótipo × fenótipo).",
        en: "Deterministic genetics engine computing DNA Punnett squares (genotype × phenotype)."
      },
      dataDrivenDesign: {
        pt: "Curvas de crescimento botânico, nutrientes e tipos de solo em Resources configuráveis.",
        en: "Botanical growth curves, soil nutrients, and pot geometries in custom Resources."
      },
      decouplingStrategy: {
        pt: "Simulador de passagem de tempo isolado do renderizador de sprites.",
        en: "Time-dilation tick simulator completely decoupled from sprite rendering."
      }
    },
    galleryCaptions: [
      { pt: "Visão top-down da fazenda de cultivo com canteiros e estufas aconchegantes.", en: "Top-down view of the flower farm with cozy garden beds and greenhouses." },
      { pt: "Painel de análise genética confrontando genótipo, fenótipo e linhagens de DNA.", en: "Genetics analysis panel cross-referencing genotype, phenotype, and DNA lineages." },
      { pt: "Sistema de cuidados diários: controle de luz solar, rega e profundidade de potes.", en: "Daily care loop: sunlight exposure, moisture balance, and pot root depth." },
      { pt: "Ciclo de iluminação dinâmica dia e noite transicionando ao longo de 24 minutos.", en: "Dynamic day-to-night lighting cycle transitioning smoothly over 24 minutes." }
    ]
  }
];

// Load raw json files from artifacts/portfolio-data/
const mergedProjects = [];

// First, read existing projects from js/data/projects.js by evaluating it in node
const vm = require('vm');
const context = { module: { exports: {} }, exports: {} };
vm.createContext(context);
vm.runInContext(existingCode, context);
// Existing placeholder projects excluded to map only real projects
// (mergedProjects only contains real verified projects)

// Process each of the 6 game projects
gamesData.forEach(g => {
  const jsonPath = path.join('artifacts', 'portfolio-data', g.file.endsWith('.json') ? g.file : `${g.file}.json`);
  const raw = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

  const gallery = [];
  for (let i = 1; i <= 4; i++) {
    const num = String(i).padStart(2, '0');
    gallery.push({
      url: `assets/projects/${raw.slug}/gallery-${num}.svg`,
      caption: g.galleryCaptions[i - 1],
      alt: `${raw.title} - Preview ${i}`
    });
  }

  const projectObj = {
    id: raw.id,
    slug: raw.slug,
    title: raw.title,
    projectType: "game",
    areas: ["games-prototypes", "software-shelf"],
    technologies: g.technologies,
    tags: raw.tags || ["gamedev", "indie"],
    status: raw.status || "in-progress",
    visibility: "public",
    featured: g.featured,
    cover_pic: raw.cover_pic || `assets/projects/${raw.slug}/cover.svg`,
    cover: raw.cover_pic || raw.cover || `assets/projects/${raw.slug}/cover.svg`,
    summary: raw.summary,
    problem: raw.problem,
    solution: raw.solution,
    contributions: raw.contributions,
    technicalDetails: {
      pt: raw.details && raw.details.conceitoResumido ? raw.details.conceitoResumido.pt : raw.solution.pt,
      en: raw.details && raw.details.conceitoResumido ? raw.details.conceitoResumido.en : raw.solution.en
    },
    results: {
      pt: `Projeto em estágio ativo (${raw.details ? raw.details.estadoAtual : 'Em andamento'}). Documentação e prototipagem contínua.`,
      en: `Project in active stage (${raw.details ? raw.details.estadoAtual : 'In progress'}). Ongoing documentation and prototyping.`
    },
    collaborationType: g.collaborationType || raw.collaborationType || "portfolio",
    partner: g.partner || null,
    prototypeStage: "mechanic-prototype",
    gameplayProfile: g.gameplayProfile,
    gameFeelDetails: g.gameFeelDetails,
    systemsArchitecture: g.systemsArchitecture,
    gallery: gallery,
    repositoryUrl: raw.repositoryUrl || "https://github.com/Germano123",
    buildUrl: raw.buildUrl || null,
    documentationUrl: null
  };

  mergedProjects.push(projectObj);
});

// Serialize merged projects back to js/data/projects.js
const fileHeader = `/**
 * Cozy Developer Laboratory — Base Canônica de Projetos
 * Conforme Especificação 3 (artifacts/3_project_presentation_schemas.md)
 * Inclui os 6 projetos de jogos com suporte a galeria de imagens (mínimo 4 imagens).
 */

const PROJECTS = ${JSON.stringify(mergedProjects, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PROJECTS };
}
`;

fs.writeFileSync('js/data/projects.js', fileHeader, 'utf8');
console.log(`Successfully merged projects! Total projects: ${mergedProjects.length}`);
