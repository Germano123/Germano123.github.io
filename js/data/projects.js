/**
 * Cozy Developer Laboratory — Base Canônica de Projetos
 * Conforme Especificação 3 (artifacts/3_project_presentation_schemas.md)
 * Inclui os 6 projetos de jogos com suporte a galeria de imagens (mínimo 4 imagens).
 */

const PROJECTS = [
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
