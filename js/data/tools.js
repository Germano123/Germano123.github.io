/**
 * Cozy Developer Laboratory — Registro Canônico de Ferramentas (Tools Lab)
 * ARQUIVO GERADO — NÃO EDITE MANUALMENTE.
 * Fonte: artifacts/tools-data/*.json  →  Gerador: scripts/generate-tool-pages.js
 *
 * Para adicionar ou alterar uma ferramenta, edite o JSON correspondente em
 * artifacts/tools-data/ e execute: node scripts/generate-tool-pages.js
 */

const TOOLS = [
    {
      "id": "cardinal",
      "slug": "cardinal",
      "title": "Cardinal",
      "projectType": "tool",
      "areas": [
        "tools-lab",
        "software-shelf"
      ],
      "technologies": [
        "JSON",
        "SDK",
        "Geração Procedural de Malha",
        "Tile Nodes"
      ],
      "tags": [
        "procedural",
        "simulacao",
        "world-generator",
        "sdk",
        "json",
        "tile-nodes"
      ],
      "status": "in-progress",
      "visibility": "public",
      "featured": true,
      "collaborationType": "portfolio",
      "partner": null,
      "cover_pic": "assets/tools/cardinal/cover.svg",
      "cover": "assets/tools/cardinal/cover.svg",
      "summary": {
        "pt": "Cardinal é um simulador de mundos para desenvolvedores e game designers que querem um mundo inteiramente vivo e completamente simulado. O mundo inteiro é controlado de dentro da simulação — suas regras, relações e estados nascem ali — e depois exportado como arquivos JSON. SDKs integradas às game engines leem essa saída e remontam o mundo de acordo com os assets específicos de cada mundo, usando lógicas de geração procedural de malha: estratégias de malha complexa ou montagem por tile nodes.",
        "en": "Cardinal is a world simulator for developers and game designers who want a fully alive, completely simulated world. The entire world is controlled from within the simulation — its rules, relations and states are born there — and then exported as JSON files. SDKs integrated with game engines read that output and rebuild the world according to each world's specific assets, using procedural mesh generation logic: complex mesh strategies or tile node assembly."
      },
      "problem": {
        "pt": "Quem precisa de um mundo realmente simulado acaba reimplementando a lógica dentro da engine. Cada sistema passa a carregar a sua própria versão das regras, a mesma simulação diverge entre protótipo e resultado final, e a lógica de mundo deixa de ser um artefato versionável. Gerar o mundo em um único lugar, de forma legível e transferível, ainda exige uma ferramenta dedicada.",
        "en": "Anyone who needs a genuinely simulated world ends up reimplementing the logic inside the engine. Each system ends up carrying its own version of the rules, the same simulation diverges between prototype and final result, and the world logic stops being a versionable artifact. Generating the world in a single place, in a readable and transferable way, still requires a dedicated tool."
      },
      "solution": {
        "pt": "Um simulador onde o mundo inteiro é controlado de dentro da simulação e despejado como JSON. Esse arquivo é a fonte única do mundo: as SDKs o leem e remontam o resultado na engine, combinando o estado simulado com os assets específicos de cada mundo e aplicando a estratégia de montagem que aquele projeto exige — malha procedural complexa ou montagem por tile nodes. O mesmo mundo simulado, a mesma saída, engines diferentes.",
        "en": "A simulator where the entire world is controlled from within the simulation and dumped as JSON. That file is the single source of the world: the SDKs read it and rebuild the result in the engine, combining the simulated state with each world's specific assets and applying the assembly strategy that project requires — complex procedural mesh or tile node assembly. The same simulated world, the same output, different engines."
      },
      "contributions": {
        "pt": "Concepção e desenvolvimento do simulador de mundo, do modelo de exportação JSON, do contrato de leitura entre simulação e engine, e das estratégias de remontagem procedural — malha complexa e montagem por tile nodes.",
        "en": "Concept and development of the world simulator, of the JSON export model, of the reading contract between simulation and engine, and of the procedural rebuild strategies — complex mesh and tile node assembly."
      },
      "workflowContext": {
        "targetAudience": {
          "pt": "Desenvolvedores e game designers que querem um mundo inteiramente simulado, com regras centrais, saída reprodutível e leitura nativa pela engine.",
          "en": "Developers and game designers who want a fully simulated world, with central rules, reproducible output and native engine reading."
        },
        "painPoint": {
          "pt": "Reimplementar a mesma lógica de mundo dentro de cada projeto de engine consome tempo e faz o protótipo divergir do resultado final, sem que exista um artefato único e legível do mundo.",
          "en": "Reimplementing the same world logic inside every engine project consumes time and makes the prototype diverge from the final result, with no single readable artifact of the world."
        },
        "timeSavedMetric": null,
        "metrics": []
      },
      "pipelineFlow": {
        "inputs": [
          {
            "pt": "Definição do mundo e das suas regras de simulação",
            "en": "Definition of the world and its simulation rules"
          },
          {
            "pt": "Estratégia de montagem procedural: malha complexa ou tile nodes",
            "en": "Procedural assembly strategy: complex mesh or tile nodes"
          },
          {
            "pt": "Assets específicos do mundo-alvo",
            "en": "Specific assets of the target world"
          }
        ],
        "processingLogic": {
          "pt": "O simulador executa o mundo inteiro sob as suas próprias regras e serializa o resultado em JSON. O arquivo gerado é lido pela SDK da engine, que reconstrói a geometria e a lógica do cenário combinando o estado simulado com os assets do mundo, conforme a estratégia procedural escolhida. A engine não conhece as regras: ela conhece o arquivo.",
          "en": "The simulator runs the entire world under its own rules and serializes the result as JSON. The generated file is read by the engine's SDK, which rebuilds the geometry and logic of the scene by combining the simulated state with the world's assets, according to the chosen procedural strategy. The engine does not know the rules: it knows the file."
        },
        "outputs": [
          {
            "pt": "Arquivos JSON com o estado completo do mundo",
            "en": "JSON files with the complete world state"
          },
          {
            "pt": "Cenário remontado na engine pela SDK, via malha procedural ou tile nodes",
            "en": "Scene rebuilt in the engine by the SDK, via procedural mesh or tile nodes"
          },
          {
            "pt": "Mundo reprodutível a partir do mesmo arquivo, em qualquer engine compatível",
            "en": "Reproducible world from the same file, on any compatible engine"
          }
        ]
      },
      "technicalArchitecture": {
        "designDecisions": [
          {
            "title": {
              "pt": "JSON como contrato entre simulação e engine",
              "en": "JSON as the contract between simulation and engine"
            },
            "body": {
              "pt": "A exportação em JSON desacopla o simulador de qualquer engine específica. O arquivo é a interface estável: as SDKs podem evoluir e ganhar suporte a novas engines sem que o simulador precise mudar.",
              "en": "The JSON export decouples the simulator from any specific engine. The file is the stable interface: SDKs can evolve and gain support for new engines without the simulator having to change."
            }
          },
          {
            "title": {
              "pt": "Estratégias de montagem separadas da simulação",
              "en": "Assembly strategies separated from the simulation"
            },
            "body": {
              "pt": "Separar malha complexa de tile nodes permite que o mesmo mundo simulado seja remontado com linguagens visuais diferentes — um mundo low-poly e um mundo de tiles carregam o mesmo JSON — sem duplicar a simulação.",
              "en": "Separating complex mesh from tile nodes allows the same simulated world to be rebuilt with different visual languages — a low-poly world and a tile-based world load the same JSON — without duplicating the simulation."
            }
          }
        ],
        "dataStructures": [
          "World State (JSON)",
          "Regra de Simulação",
          "Tile Node Graph",
          "Mesh Strategy"
        ],
        "editorIntegrations": [
          "SDK de integração com Game Engines",
          "Exportador JSON"
        ]
      },
      "validation": {
        "safetyFeatures": {
          "pt": "A simulação é determinística: a mesma definição de mundo gera o mesmo JSON, o que permite versionar o resultado no repositório e comparar saídas entre execuções. A montagem na engine é feita pela SDK a partir do arquivo, sem escrita direta nos assets do projeto — o conteúdo original permanece intacto e o resultado pode ser inspecionado antes de ser aplicado.",
          "en": "The simulation is deterministic: the same world definition produces the same JSON, which allows the result to be versioned in the repository and compared between runs. Assembly in the engine is performed by the SDK from the file, with no direct writes to the project's assets — the original content stays intact and the result can be inspected before being applied."
        },
        "testCoverage": null,
        "checks": [
          {
            "title": {
              "pt": "Reprodutibilidade",
              "en": "Reproducibility"
            },
            "body": {
              "pt": "A mesma entrada de simulação precisa produzir um JSON idêntico, para que o mundo possa ser versionado e comparado entre execuções.",
              "en": "The same simulation input must produce identical JSON, so the world can be versioned and compared between runs."
            }
          },
          {
            "title": {
              "pt": "Compatibilidade do contrato",
              "en": "Contract compatibility"
            },
            "body": {
              "pt": "A saída é validada contra o contrato esperado pela SDK antes de ser entregue à engine, evitando que um mundo incompleto seja remontado.",
              "en": "The output is validated against the contract expected by the SDK before being handed to the engine, preventing an incomplete world from being rebuilt."
            }
          }
        ]
      },
      "results": {
        "pt": "Simulador em desenvolvimento. O desenho atual — mundo controlado inteiramente dentro da simulação, saída em JSON e leitura por SDKs integradas — faz com que o mesmo mundo simulado possa ser remontado em engines diferentes, variando apenas a estratégia de montagem procedural conforme os assets e a linguagem visual de cada projeto.",
        "en": "Simulator in development. The current design — a world controlled entirely within the simulation, JSON output and reading through integrated SDKs — lets the same simulated world be rebuilt on different engines, varying only the procedural assembly strategy according to each project's assets and visual language."
      },
      "links": {
        "repositoryUrl": null,
        "buildUrl": null,
        "documentationUrl": null,
        "demoUrl": null
      },
      "gallery": [
        {
          "src": "assets/tools/cardinal/gallery-01.svg",
          "caption": {
            "pt": "Simulação do mundo em execução, com regras e relações sob controle do simulador.",
            "en": "World simulation running, with rules and relations under the simulator's control."
          },
          "alt": "Simulação de mundo em execução"
        },
        {
          "src": "assets/tools/cardinal/gallery-02.svg",
          "caption": {
            "pt": "Arquivo JSON exportado com o estado completo do mundo.",
            "en": "Exported JSON file with the complete world state."
          },
          "alt": "Arquivo JSON de exportação do mundo"
        },
        {
          "src": "assets/tools/cardinal/gallery-03.svg",
          "caption": {
            "pt": "Remontagem na engine pela SDK, combinando a simulação com os assets do mundo.",
            "en": "Rebuild in the engine by the SDK, combining the simulation with the world's assets."
          },
          "alt": "Cenário remontado na engine pela SDK"
        },
        {
          "src": "assets/tools/cardinal/gallery-04.svg",
          "caption": {
            "pt": "Comparação entre as estratégias de montagem: malha procedural e tile nodes.",
            "en": "Comparison between assembly strategies: procedural mesh and tile nodes."
          },
          "alt": "Comparação entre malha procedural e tile nodes"
        }
      ],
      "pageUrl": "tools/cardinal.html"
    },
    {
      "id": "gameflow-connect",
      "slug": "gameflow-connect",
      "title": "GameFlow Connect",
      "projectType": "tool",
      "areas": [
        "tools-lab",
        "software-shelf"
      ],
      "technologies": [
        "Google Drive API",
        "Git",
        "JSON"
      ],
      "tags": [
        "open-source",
        "integracao",
        "pipeline",
        "git",
        "google-drive",
        "assets"
      ],
      "status": "in-progress",
      "visibility": "public",
      "featured": true,
      "collaborationType": "portfolio",
      "partner": null,
      "cover_pic": "assets/tools/gameflow-connect/cover.svg",
      "cover": "assets/tools/gameflow-connect/cover.svg",
      "summary": {
        "pt": "GameFlow Connect é uma base de integração open source pensada para desenvolvedores independentes e pequenos estúdios que estão montando seus primeiros fluxos e pipelines de integração. A ferramenta conecta o material de arte hospedado no Google Drive ao versionamento Git do projeto, para que os assets sejam juntados ao código-fonte do trabalho e evoluam na mesma linha do tempo. É um fluxo leve, feito para artista, game designer e programador trabalharem juntos sem trocar a ferramenta que já usam.",
        "en": "GameFlow Connect is an open source integration base designed for indie developers and small studios setting up their first integration flows and pipelines. The tool connects art assets hosted on Google Drive to the project's Git versioning, so assets are brought into the source code and evolve on the same timeline. It is a lightweight flow, built for artists, game designers and programmers to work together without changing the tools they already use."
      },
      "problem": {
        "pt": "Em estúdios pequenos, o material de arte quase sempre vive no Google Drive enquanto o código vive no repositório Git. Sem uma ponte entre os dois, cada pessoa do time acaba trabalhando sobre uma cópia diferente do asset, e a versão que chega à build raramente é a que o artista considera final. Reconstruir essa ligação à mão em cada projeto consome tempo de quem deveria estar produzindo.",
        "en": "In small studios, art assets almost always live on Google Drive while code lives in the Git repository. Without a bridge between the two, everyone on the team ends up working on a different copy of the asset, and the version that reaches the build is rarely the one the artist considers final. Rebuilding that link by hand on every project eats into time that should go into production."
      },
      "solution": {
        "pt": "Uma base de integração que resolve a ligação na origem: o fluxo acompanha as pastas de assets no Google Drive, reconhece o que mudou e leva esse material para dentro do repositório Git, versionado junto com o código. Como a ferramenta é open source, cada estúdio pode adaptar o fluxo às próprias convenções de pastas, nomenclatura e branches, em vez de depender de um formato fechado.",
        "en": "An integration base that solves the link at its source: the flow tracks the asset folders on Google Drive, detects what changed and brings that material into the Git repository, versioned alongside the code. Because the tool is open source, each studio can adapt the flow to its own folder, naming and branch conventions instead of depending on a closed format."
      },
      "contributions": {
        "pt": "Concepção e desenvolvimento da base de integração open source, do fluxo que leva os assets do Google Drive para dentro do repositório Git, e da experiência de uso pensada para ser compartilhada por artista, game designer e programador sem exigir mudança de processo.",
        "en": "Concept and development of the open source integration base, of the flow that brings Google Drive assets into the Git repository, and of the usage experience designed to be shared by artists, game designers and programmers without requiring a process change."
      },
      "workflowContext": {
        "targetAudience": {
          "pt": "Desenvolvedores independentes e pequenos estúdios que estão construindo seus primeiros fluxos de integração entre assets e código-fonte.",
          "en": "Indie developers and small studios building their first integration flows between assets and source code."
        },
        "painPoint": {
          "pt": "Assets no Drive e código no Git evoluem separados: o material de arte entra na build sem versionamento confiável e cada participante trabalha sobre uma versão diferente.",
          "en": "Assets on Drive and code on Git evolve separately: art material reaches the build without reliable versioning, and each participant works on a different version."
        },
        "timeSavedMetric": null,
        "metrics": []
      },
      "pipelineFlow": {
        "inputs": [
          {
            "pt": "Assets de arte hospedados no Google Drive",
            "en": "Art assets hosted on Google Drive"
          },
          {
            "pt": "Repositório Git do projeto",
            "en": "The project's Git repository"
          },
          {
            "pt": "Configuração do fluxo: quais pastas de assets entram no versionamento",
            "en": "Flow configuration: which asset folders enter versioning"
          }
        ],
        "processingLogic": {
          "pt": "A ferramenta lê as pastas de assets definidas no Google Drive, compara o estado atual com o que já está versionado no repositório e identifica o que mudou desde a última integração. O que é processado entra no Git como parte do histórico do projeto, de modo que assets e código-fonte passam a evoluir na mesma linha do tempo e sob o mesmo controle de versão.",
          "en": "The tool reads the asset folders defined on Google Drive, compares the current state with what is already versioned in the repository and identifies what changed since the last integration. What is processed enters Git as part of the project's history, so assets and source code evolve on the same timeline and under the same version control."
        },
        "outputs": [
          {
            "pt": "Repositório Git com os assets integrados ao código-fonte",
            "en": "Git repository with assets integrated into the source code"
          },
          {
            "pt": "Histórico de integrações, com o que entrou e quando",
            "en": "Integration history, with what was brought in and when"
          },
          {
            "pt": "Assets acessíveis a todos os perfis do time a partir da mesma fonte",
            "en": "Assets accessible to every role on the team from a single source"
          }
        ]
      },
      "technicalArchitecture": {
        "designDecisions": [
          {
            "title": {
              "pt": "Integração sem infraestrutura central",
              "en": "Integration without central infrastructure"
            },
            "body": {
              "pt": "A base roda a partir do próprio repositório do projeto, sem exigir um servidor dedicado. Isso mantém o custo e a complexidade compatíveis com a realidade de estúdios pequenos e de desenvolvedores independentes, que é exatamente o público que a ferramenta atende.",
              "en": "The base runs from the project's own repository, with no dedicated server required. That keeps cost and complexity aligned with the reality of small studios and indie developers, which is exactly the audience the tool serves."
            }
          },
          {
            "title": {
              "pt": "Open source como base de extensão",
              "en": "Open source as the extension baseline"
            },
            "body": {
              "pt": "Publicar a ferramenta em código aberto não é um detalhe de distribuição: é o que permite que cada equipe adapte o fluxo às suas próprias convenções de pastas, nomenclatura e branches, em vez de adaptar o seu processo à ferramenta.",
              "en": "Publishing the tool as open source is not a distribution detail: it is what allows each team to adapt the flow to its own folder, naming and branch conventions, instead of adapting its process to the tool."
            }
          }
        ],
        "dataStructures": [
          "Fluxo de Integração",
          "Mapa de Pastas de Assets",
          "Registro de Integração"
        ],
        "editorIntegrations": [
          "Google Drive",
          "Git"
        ]
      },
      "validation": {
        "safetyFeatures": {
          "pt": "A integração é aditiva: o fluxo acrescenta e versiona assets no repositório em vez de substituir o trabalho que já está versionado. Cada integração fica registrada no histórico do Git, o que serve tanto como trilha de auditoria quanto como ponto de retorno caso algo precise ser desfeito.",
          "en": "The integration is additive: the flow appends and versions assets into the repository instead of replacing work that is already versioned. Every integration is recorded in Git history, which serves both as an audit trail and as a return point should anything need to be undone."
        },
        "testCoverage": null,
        "checks": [
          {
            "title": {
              "pt": "Conflito entre as duas pontas",
              "en": "Conflict between both ends"
            },
            "body": {
              "pt": "Quando o mesmo asset muda nos dois lados — no Drive e no repositório — o fluxo reporta o conflito em vez de escolher silenciosamente um dos lados.",
              "en": "When the same asset changes on both sides — on Drive and in the repository — the flow reports the conflict instead of silently picking one side."
            }
          },
          {
            "title": {
              "pt": "Integridade do repositório",
              "en": "Repository integrity"
            },
            "body": {
              "pt": "A verificação garante que o estado resultante do repositório continue sendo um commit válido, com os assets referenciados presentes e apontando para caminhos existentes.",
              "en": "Verification ensures the resulting repository state remains a valid commit, with referenced assets present and pointing at existing paths."
            }
          }
        ]
      },
      "results": {
        "pt": "Ferramenta open source em desenvolvimento ativo. A base de integração entre Google Drive e Git está sendo consolidada para oferecer a desenvolvedores independentes e pequenos estúdios um ponto de partida leve para seus primeiros pipelines de assets, em vez de dependerem de soluções enterprise ou de scripts improvisados.",
        "en": "Open source tool in active development. The Google Drive to Git integration base is being consolidated to give indie developers and small studios a lightweight starting point for their first asset pipelines, instead of relying on enterprise solutions or improvised scripts."
      },
      "links": {
        "repositoryUrl": null,
        "buildUrl": null,
        "documentationUrl": null,
        "demoUrl": null
      },
      "gallery": [
        {
          "src": "assets/tools/gameflow-connect/gallery-01.svg",
          "caption": {
            "pt": "Configuração do fluxo ligando as pastas do Google Drive ao repositório Git.",
            "en": "Flow configuration linking Google Drive folders to the Git repository."
          },
          "alt": "Tela de configuração do fluxo de integração"
        },
        {
          "src": "assets/tools/gameflow-connect/gallery-02.svg",
          "caption": {
            "pt": "Integração refletida no histórico de commits do repositório.",
            "en": "Integration reflected in the repository's commit history."
          },
          "alt": "Histórico de commits com assets integrados"
        },
        {
          "src": "assets/tools/gameflow-connect/gallery-03.svg",
          "caption": {
            "pt": "Estrutura final do projeto, com assets e código no mesmo repositório.",
            "en": "Final project structure, with assets and code in the same repository."
          },
          "alt": "Estrutura do repositório com assets integrados"
        },
        {
          "src": "assets/tools/gameflow-connect/gallery-04.svg",
          "caption": {
            "pt": "Fluxo de trabalho compartilhado entre artista, game designer e programador.",
            "en": "Shared workflow between artist, game designer and programmer."
          },
          "alt": "Fluxo de trabalho colaborativo entre perfis"
        }
      ],
      "pageUrl": "tools/gameflow-connect.html"
    }
  ];
