/**
 * Cozy Developer Laboratory — Sistema Central de Internacionalização (i18n)
 */

const I18N = {
  pt: {
    // Brand & Navegação
    brandName: "Germano",
    brandSubtitle: "Cozy Dev Lab",
    navHome: "Início",
    navTools: "Tools Lab",
    navArt: "Art Workshop",
    navGameSystems: "Game Systems",
    navGamesPrototypes: "Games & Prototypes",
    navShelf: "Software Shelf",
    navAbout: "Sobre Mim",
    navDevlog: "Devlog",

    // Hero Geral
    heroBadge: "🌿 Cozy Developer • Tools & Technical Art",
    heroTitle: "Onde código, arte e ferramentas se encontram.",
    heroTagline: "Laboratório de engenharia para desenvolvimento de jogos, automação e arte técnica.",
    heroBio: "Construo ferramentas que aceleram o trabalho de equipes criativas, shaders e assets otimizados para jogos acolhedores, e sistemas de software desenvolvidos com calma e robustez técnica.",
    btnExploreLab: "Explorar o Laboratório",
    btnViewProjects: "Ver Todos os Projetos",
    btnContact: "Entrar em Contato",

    // Manifesto
    manifestoTitle: "Manifesto do Laboratório",
    manifestoText: "Acreditamos que a melhor tecnologia é aquela que serve à criatividade sem atritos. Não construímos código para inflar métricas vazias; criamos ferramentas táteis, interfaces compreensíveis e artefatos digitais que proporcionam alegria tanto a quem desenvolve quanto a quem joga.",

    // Seções
    exploreLabTitle: "Explore o Laboratório",
    exploreLabDesc: "Navegue pelas áreas especializadas de experimentação e produção.",
    featuredProjectsTitle: "Projetos em Destaque",
    featuredProjectsDesc: "Estudos de caso reais com breakdown técnico e evidências de desenvolvimento.",
    
    // Cards de Projeto
    viewCaseStudy: "Ver Estudo de Caso →",
    statusCompleted: "Concluído",
    statusInProgress: "Em Andamento",
    statusPrototype: "Protótipo",
    statusArchived: "Arquivado",

    // Catálogo / Software Shelf
    searchPlaceholder: "Pesquisar por nome, tecnologia ou palavra-chave...",
    allAreas: "Todas as Áreas",
    allTechnologies: "Todas as Tecnologias",
    noProjectsFoundTitle: "Nenhum projeto encontrado",
    noProjectsFoundDesc: "Tente ajustar os filtros ou termo de busca para encontrar outros trabalhos.",

    // Filtros de Categoria (Art Workshop & Catálogo)
    filterAll: "Todos",
    filterCharacters: "Personagens",
    filterAssets: "Assets",
    filterAnimations: "Animações",
    filterPartnerships: "Parcerias",
    filterPersonal: "Portfólio",
    filterPortfolio: "Portfólio",
    filterCommercial: "Comercial",
    filterStudies: "Estudos",
    filterAllAreas: "Todas as Áreas",

    // Aberturas Sugeridas das Páginas do Portfólio (v1.1)
    toolsLabTitle: "Tools Lab",
    toolsLabTagline: "Ferramentas de editor, pipelines e scripts utilitários desenvolvidos para remover fricção criativa e acelerar o desenvolvimento.",
    artWorkshopTitle: "Art Workshop",
    artWorkshopTagline: "Modelagem 3D, texturização, shaders e pipelines de animação otimizados para jogos acolhedores.",
    gamesPrototypesTitle: "Games & Prototypes",
    gamesPrototypesTagline: "Jogos autorais, protótipos de mecânicas e experimentos interativos focados em game feel e atmosfera acolhedora.",
    softwareShelfTitle: "Software Shelf",
    softwareShelfTagline: "Catálogo completo de softwares, ferramentas e utilitários desenvolvidos com rigor técnico e foco em usabilidade.",

    // Empty States para Áreas em Desenvolvimento
    emptyAreaTitle: "Área em Fase de Produção e Montagem",
    btnBackToMenu: "Voltar ao Menu",
    emptyAreaDesc: "Este espaço do laboratório está ativamente em desenvolvimento. Novos estudos de caso e protótipos reais serão publicados conforme avançarem os testes.",
    btnBackToShelf: "Ver Softwares no Catálogo",

    // Estudo de Caso (Detalhe)
    caseStudyProblem: "O Desafio & Contexto",
    caseStudySolution: "Abordagem Técnica & Solução",
    caseStudyContributions: "Responsabilidades & Contribuição Individual",
    caseStudyTechnical: "Breakdown Técnico & Arquitetura",
    caseStudyResults: "Resultados & Limitações Observadas",
    btnRepository: "Repositório no GitHub",
    btnBuild: "Testar Demonstração / Build",
    btnBackToArea: "← Voltar",

    // Seções Especializadas por Tipo de Projeto
    // 1. Tools Lab
    toolsWorkflowTitle: "Contexto de Workflow & Produtividade",
    toolsTargetAudience: "Público-Alvo",
    toolsPainPoint: "Gargalo Operacional",
    toolsTimeSaved: "Impacto & Tempo Economizado",
    toolsPipelineTitle: "Fluxo do Pipeline (I/O)",
    toolsInputs: "Entradas (Inputs)",
    toolsProcessing: "Lógica de Processamento",
    toolsOutputs: "Saídas (Outputs)",
    toolsArchitectureTitle: "Arquitetura Técnica & Ergonomia",
    toolsDataStructures: "Estruturas de Dados",
    toolsIntegrations: "Integrações com Engine / Editor",
    toolsSafety: "Validação & Não-Destrutividade",

    // 2. Art Workshop
    artBudgetTitle: "Especificações Técnicas & 3D Budget",
    artTriangles: "Triângulos",
    artVertices: "Vértices",
    artTexture: "Textura / Atlas",
    artMaterials: "Materiais",
    artDrawCalls: "Draw Calls Estimadas",
    artUvEfficiency: "Aproveitamento UV",
    artShadingTitle: "Shader & Real-Time Setup",
    artRiggingTitle: "Estrutura de Rigging & Deformação",
    artBones: "Ossos (Bones)",
    artIK: "Controles IK",
    artClipsTitle: "Clipes de Animação",
    artLoop: "Ciclo Contínuo",
    artOnce: "Disparo Único",

    // 3. Games & Prototypes
    gameProfileTitle: "Perfil de Jogabilidade & Premissa",
    gameGenre: "Gênero & Estilo",
    gamePerspective: "Perspectiva de Câmera",
    gamePlatform: "Plataformas Alvo",
    gameControls: "Esquema de Controles",
    gameFeelTitle: "Engenharia de Sensação Tátil (Game Feel)",
    gameMovement: "Mecânicas de Movimento",
    gameTactile: "Respostas Táteis & 'Juice'",
    gameAudioVisual: "Sincronização Audiovisual",
    gameSystemsTitle: "Arquitetura de Sistemas de Jogo",
    gameplayDemoTitle: "Demonstração Jogável / Gameplay",

    // 4. Software Shelf
    softwareArchTitle: "Arquitetura de Software & Design Patterns",
    softwarePatterns: "Padrões Aplicados",
    softwareModularity: "Modularidade & Desacoplamento",
    softwareQualityTitle: "Qualidade de Código, Testes & Benchmarks",
    softwareCoverage: "Cobertura de Testes",
    softwareDistributionTitle: "Distribuição & Licença",

    // 5. Galeria do Projeto & Lightbox
    projectGalleryTitle: "Galeria do Projeto",
    projectGalleryDesc: "Registros visuais, interfaces e capturas de desenvolvimento.",
    lightboxClose: "Fechar",
    lightboxPrev: "Anterior",
    lightboxNext: "Próxima",
    viewImageFull: "Clique para ampliar a imagem",
    imageOf: "de",

    // 6. Natureza do Projeto & Parcerias
    collabPersonal: "Portfólio",
    collabPortfolio: "Portfólio",
    collabCommercial: "Comercial",
    collabPartnership: "Parceria",
    collabStudy: "Estudo",
    collabPartnerPrefix: "Em parceria com",

    // Banner de Construção
    bannerConstructionTitle: "Laboratório em construção",
    bannerConstructionText: "Estamos organizando as bancadas de trabalho, finalizando os primeiros pipelines e preparando estudos de caso para publicação.",

    // Componente CTA de Contato
    contactCtaTitle: "Entre em contato comigo",
    contactCtaText: "Tem interesse em trocar ideias sobre desenvolvimento de jogos, ferramentas técnicas, arte procedural ou oportunidades de projetos? Sinta-se à vontade para me chamar:",
    btnWhatsApp: "Conversar no WhatsApp",
    btnLinkedIn: "Conectar no LinkedIn",
    btnEmail: "Enviar um E-mail",

    // Página Sobre (4 Áreas de Atuação)
    aboutTitle: "Sobre Mim",
    aboutSubtitle: "Desenvolvimento de Software • Jogos • Modelagem 3D • Tools Dev",
    aboutPillarSoftwareTitle: "💻 Desenvolvimento de Software",
    aboutParagraphSoftware: "Na área de Software, foco na construção de aplicações robustas, código sustentável e arquiteturas bem estruturadas. Priorizo boas práticas de engenharia, legibilidade, desacoplamento e simplicidade operacional, desenvolvendo soluções que resolvem problemas reais com previsibilidade, facilidade de manutenção e alta performance tanto no frontend quanto no backend.",
    aboutPillarGamesTitle: "🎮 Desenvolvimento de Jogos",
    aboutParagraphGames: "Em Jogos, minha paixão está na criação de experiências autorais e independentes com ritmo acolhedor (cozy) e atmosfera imersiva. Trabalho com motores como Unity e Godot, arquitetando mecânicas intuitivas, máquinas de estados desacopladas e polimento de game feel — garantindo que cada salto, diálogo ou interação tátil transmita feedback prazeroso e sensibilidade artística.",
    aboutPillar3dTitle: "🎨 Modelagem 3D & Technical Art",
    aboutParagraph3d: "Na Modelagem 3D e Arte Técnica, dedico-me a unir estética lúdica e eficiência técnica. Utilizo o Blender para criação de cenários, props e personagens com estilo low-poly estilizado, aplicando mapeamento UV compacto com paletas compartilhadas (atlas) e desenvolvendo shaders customizados — como simulação de vento em vértices e iluminação suave — garantindo mundos calorosos com baixíssimo custo de processamento e poucas draw calls.",
    aboutPillarToolsTitle: "🔧 Tools Development",
    aboutParagraphTools: "Em Tools Development, construo ferramentas, scripts de automação e extensões de editor sob medida que removem atritos e tarefas repetitivas do fluxo de produção criativa. Seja criando Custom Editors na Unity, ferramentas de geração procedural de cenários ou pipelines automatizados de importação e validação de assets, meu objetivo é capacitar artistas e level designers a materializarem suas ideias com velocidade, confiança e autonomia.",
    aboutContactTitle: "Contato & Redes",
    aboutContactText: "Estou sempre aberto a conversas sobre oportunidades em desenvolvimento de jogos, criação de ferramentas técnicas e projetos autorais.",

    // Rodapé
    footerEmail: "E-mail",
    footerQuote: "Where code meets craft • Feito com café, código e aconchego.",
    footerCopyright: "© 2026 Germano Gomes. Todos os direitos reservados."
  },
  en: {
    // Brand & Navigation
    brandName: "Germano",
    brandSubtitle: "Cozy Dev Lab",
    navHome: "Home",
    navTools: "Tools Lab",
    navArt: "Art Workshop",
    navGameSystems: "Game Systems",
    navGamesPrototypes: "Games & Prototypes",
    navShelf: "Software Shelf",
    navAbout: "About Me",
    navDevlog: "Devlog",

    // Hero General
    heroBadge: "🌿 Cozy Developer • Tools & Technical Art",
    heroTitle: "Where code meets craft.",
    heroTagline: "Engineering laboratory for game development, automation, and technical art.",
    heroBio: "I craft tools that empower creative teams, optimized shaders and assets for cozy worlds, and software systems built with calm focus and technical rigor.",
    btnExploreLab: "Explore the Lab",
    btnViewProjects: "View All Projects",
    btnContact: "Get in Touch",

    // Manifesto
    manifestoTitle: "Laboratory Manifesto",
    manifestoText: "We believe the best technology empowers creativity without friction. We don't write code for vanity metrics; we build tactile tools, intuitive interfaces, and digital artifacts that bring joy to developers and players alike.",

    // Sections
    exploreLabTitle: "Explore the Lab",
    exploreLabDesc: "Browse through specialized areas of experimentation and production.",
    featuredProjectsTitle: "Featured Projects",
    featuredProjectsDesc: "Real case studies with technical breakdowns and verifiable evidence.",

    // Project Cards
    viewCaseStudy: "View Case Study →",
    statusCompleted: "Completed",
    statusInProgress: "In Progress",
    statusPrototype: "Prototype",
    statusArchived: "Archived",

    // Catalog / Software Shelf
    searchPlaceholder: "Search by title, technology, or keyword...",
    allAreas: "All Areas",
    allTechnologies: "All Technologies",
    noProjectsFoundTitle: "No projects found",
    noProjectsFoundDesc: "Try adjusting filters or search query to find other works.",

    // Category Filters (Art Workshop & Catalog)
    filterAll: "All",
    filterCharacters: "Characters",
    filterAssets: "Assets",
    filterAnimations: "Animations",
    filterPartnerships: "Partnerships",
    filterPersonal: "Portfolio",
    filterPortfolio: "Portfolio",
    filterCommercial: "Commercial",
    filterStudies: "Studies",
    filterAllAreas: "All Areas",

    // Suggested Page Openings (v1.1)
    toolsLabTitle: "Tools Lab",
    toolsLabTagline: "Editor tools, pipelines, and utility scripts designed to remove creative friction and speed up development.",
    artWorkshopTitle: "Art Workshop",
    artWorkshopTagline: "3D modeling, texturing, shaders, and animation pipelines optimized for cozy games.",
    gamesPrototypesTitle: "Games & Prototypes",
    gamesPrototypesTagline: "Original games, gameplay mechanics prototypes, and interactive experiments focused on game feel and cozy atmosphere.",
    softwareShelfTitle: "Software Shelf",
    softwareShelfTagline: "Complete catalog of software, tools, and utilities built with technical rigor and usability focus.",

    // Empty States for Developing Areas
    emptyAreaTitle: "Area in Production and Assembly Phase",
    btnBackToMenu: "Back to Menu",
    emptyAreaDesc: "This section of the laboratory is actively in development. Genuine case studies and prototypes will be published as testing progresses.",
    btnBackToShelf: "Browse All Software",

    // Case Study Detail
    caseStudyProblem: "Challenge & Context",
    caseStudySolution: "Technical Approach & Solution",
    caseStudyContributions: "Individual Responsibilities & Role",
    caseStudyTechnical: "Technical Breakdown & Architecture",
    caseStudyResults: "Results & Observed Limitations",
    btnRepository: "GitHub Repository",
    btnBuild: "Play / Demo Build",
    btnBackToArea: "← Back",

    // Specialized Sections by Project Type
    // 1. Tools Lab
    toolsWorkflowTitle: "Workflow Context & Productivity",
    toolsTargetAudience: "Target Audience",
    toolsPainPoint: "Operational Bottleneck",
    toolsTimeSaved: "Impact & Time Saved",
    toolsPipelineTitle: "Pipeline Flow (I/O)",
    toolsInputs: "Inputs",
    toolsProcessing: "Processing Logic",
    toolsOutputs: "Outputs",
    toolsArchitectureTitle: "Technical Architecture & Ergonomics",
    toolsDataStructures: "Data Structures",
    toolsIntegrations: "Engine / Editor Integrations",
    toolsSafety: "Validation & Safety",

    // 2. Art Workshop
    artBudgetTitle: "Technical Art Specs & 3D Budget",
    artTriangles: "Triangles",
    artVertices: "Vertices",
    artTexture: "Texture / Atlas",
    artMaterials: "Materials",
    artDrawCalls: "Estimated Draw Calls",
    artUvEfficiency: "UV Efficiency",
    artShadingTitle: "Shader & Real-Time Setup",
    artRiggingTitle: "Rigging & Deformation Structure",
    artBones: "Bones",
    artIK: "IK Controls",
    artClipsTitle: "Animation Clips",
    artLoop: "Looping Cycle",
    artOnce: "One-shot",

    // 3. Games & Prototypes
    gameProfileTitle: "Gameplay Profile & Premise",
    gameGenre: "Genre & Style",
    gamePerspective: "Camera Perspective",
    gamePlatform: "Target Platforms",
    gameControls: "Controls Scheme",
    gameFeelTitle: "Tactile Feedback & Game Feel Engineering",
    gameMovement: "Movement Mechanics",
    gameTactile: "Tactile Responses & 'Juice'",
    gameAudioVisual: "Audio-Visual Feedback",
    gameSystemsTitle: "Gameplay Systems Architecture",
    gameplayDemoTitle: "Playable Demo / Gameplay",

    // 4. Software Shelf
    softwareArchTitle: "Software Architecture & Design Patterns",
    softwarePatterns: "Design Patterns",
    softwareModularity: "Modularity & Decoupling",
    softwareQualityTitle: "Code Quality, Tests & Benchmarks",
    softwareCoverage: "Test Coverage",
    softwareDistributionTitle: "Distribution & License",

    // 5. Project Gallery & Lightbox
    projectGalleryTitle: "Project Gallery",
    projectGalleryDesc: "Visual records, interfaces, and development screenshots.",
    lightboxClose: "Close",
    lightboxPrev: "Previous",
    lightboxNext: "Next",
    viewImageFull: "Click to view full-size image",
    imageOf: "of",

    // 6. Natureza do Projeto & Parcerias
    collabPersonal: "Portfolio",
    collabPortfolio: "Portfolio",
    collabCommercial: "Commercial",
    collabPartnership: "Partnership",
    collabStudy: "Study",
    collabPartnerPrefix: "In partnership with",

    // Construction Banner
    bannerConstructionTitle: "Laboratory under construction",
    bannerConstructionText: "We are currently setting up the workbenches, tuning tools and pipelines, and preparing the first case studies for publication.",

    // Contact CTA Component
    contactCtaTitle: "Get in touch with me",
    contactCtaText: "Interested in chatting about game development, technical tools, procedural art, or project collaborations? Feel free to reach out:",
    btnWhatsApp: "Chat on WhatsApp",
    btnLinkedIn: "Connect on LinkedIn",
    btnEmail: "Send an Email",

    // About Page (4 Core Focus Areas)
    aboutTitle: "About Me",
    aboutSubtitle: "Software Development • Games • 3D Modeling • Tools Dev",
    aboutPillarSoftwareTitle: "💻 Software Development",
    aboutParagraphSoftware: "In Software Engineering, my focus is on building robust applications, maintainable codebases, and clean architecture. I prioritize engineering best practices, readability, decoupling, and operational simplicity, delivering solutions that solve real-world problems with predictability, high performance, and long-term maintainability across both frontend and backend.",
    aboutPillarGamesTitle: "🎮 Game Development",
    aboutParagraphGames: "In Game Development, my passion lies in crafting indie experiences with a cozy pace and immersive atmosphere. Working with engines such as Unity and Godot 4, I architect intuitive mechanics, decoupled state machines, and juicy game feel — ensuring every jump, dialogue line, and tactile interaction conveys delightful feedback and artistic care.",
    aboutPillar3dTitle: "🎨 3D Modeling & Technical Art",
    aboutParagraph3d: "In 3D Modeling & Technical Art, I bridge playful aesthetics with rigorous technical efficiency. Using Blender, I craft stylized low-poly environments, props, and characters, leveraging compact UV atlas mapping and custom shaders — such as vertex wind simulation and soft lighting — ensuring warm worlds with minimal draw calls and optimal performance.",
    aboutPillarToolsTitle: "🔧 Tools Development",
    aboutParagraphTools: "In Tools Development, I engineer custom tools, automation scripts, and editor extensions that eliminate friction and repetitive tasks from the creative pipeline. Whether developing Custom Editors in Unity, procedural layout generators, or automated asset validation workflows, my goal is to empower artists and level designers to realize their visions with speed, confidence, and autonomy.",
    aboutContactTitle: "Contact & Networks",
    aboutContactText: "I am always open to discussing game development opportunities, custom technical tools, and collaborative projects.",

    // Footer
    footerEmail: "Email",
    footerQuote: "Where code meets craft • Crafted with coffee, code, and care.",
    footerCopyright: "© 2026 Germano Gomes. All rights reserved."
  }
};

let currentLanguage = 'pt';

function getLanguage() {
  return currentLanguage;
}

function t(key) {
  const lang = currentLanguage;
  if (I18N[lang] && I18N[lang][key] !== undefined) {
    return I18N[lang][key];
  }
  if (I18N.pt && I18N.pt[key] !== undefined) {
    return I18N.pt[key];
  }
  return key;
}

function setLanguage(lang) {
  currentLanguage = (lang === 'en') ? 'en' : 'pt';
  document.documentElement.lang = currentLanguage === 'pt' ? 'pt-BR' : 'en';

  try {
    localStorage.setItem('preferred_lang', currentLanguage);
  } catch (e) {}

  // Atualizar elementos marcados com data-i18n
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });

  // Atualizar atributos de placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', t(key));
  });

  // Atualizar botões de idioma
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const isSelected = btn.getAttribute('data-lang') === currentLanguage;
    btn.classList.toggle('active', isSelected);
    btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
  });

  // Disparar evento para componentes dinâmicos re-renderizarem
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: currentLanguage } }));
}

function initI18n() {
  let saved = null;
  try {
    saved = localStorage.getItem('preferred_lang');
  } catch (e) {}

  if (!saved) {
    const browser = navigator.language || navigator.userLanguage || '';
    saved = browser.toLowerCase().startsWith('pt') ? 'pt' : 'en';
  }

  setLanguage(saved);

  // Vincular eventos de clique nos botões de alternância
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.lang-btn');
    if (btn) {
      const selected = btn.getAttribute('data-lang');
      if (selected && selected !== currentLanguage) {
        setLanguage(selected);
      }
    }
  });
}
