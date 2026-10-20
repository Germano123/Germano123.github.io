# Changelog — Cozy Developer Laboratory

Todas as alterações graduais, refatorações e entregas de engenharia deste projeto estão registradas abaixo.

O formato baseia-se no [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

---

## [0.15.1] - 2026-10-20
### Adicionado
- **Capas Ilustradas Vetoriais Completas para Todos os 6 Jogos:**
  - Recriação das capas de *Typing Defenders* (teclado mecânico estilizado, defesa de lasers e telemetria de WPM) e *Little Knight* (pequeno cavaleiro em plataforma com espada, escudo e montanhas crepusculares).
  - Criação de capas ilustradas temáticas para os demais projetos:
    - *Digital Delivery*: Terminal hacker interativo com prompt, cubo 3D de dados e malha de sockets.
    - *Tribunal Lógico*: Balança da justiça dourada com valores lógicos V/F, martelo de juiz em mogno e pergaminho de tabela verdade.
    - *MetaGhost Fantasy*: Mansão assombrada vitoriana com janelas iluminadas, grade tática isométrica e frasco de ectoplasma.
    - *Cripto Flowers*: Rosa-do-deserto em vaso de cerâmica com raízes expostas, dupla hélice de DNA/genótipo e ciclo de cuidados botânicos.

---

## [0.15.0] - 2026-10-20
### Adicionado
- **Padronização de Capas e Suporte a `cover_pic` e `gallery`:**
  - Adicionado suporte formal ao campo canônico `cover_pic` (com fallback retrocompatível para `cover` e `coverImage`) em [`js/components.js`](file:///c:/Users/Germano/Documents/projects/sideprojects/Germano123.github.io/js/components.js) e [`project.html`](file:///c:/Users/Germano/Documents/projects/sideprojects/Germano123.github.io/project.html).
  - Atualização dos metadados em [`artifacts/portfolio-data/`](file:///c:/Users/Germano/Documents/projects/sideprojects/Germano123.github.io/artifacts/portfolio-data/) e [`js/data/projects.js`](file:///c:/Users/Germano/Documents/projects/sideprojects/Germano123.github.io/js/data/projects.js) com as propriedades canônicas `cover_pic` e `gallery`.
  - **Identificação Visual das Capas:**
    - Capas personalizadas de destaque para *Typing Defenders* e *Little Knight* identificadas como `CAPA PERSONALIZADA • COVER_PIC`.
    - Capas placeholders personalizadas para os demais jogos (*Digital Delivery*, *Tribunal Lógico*, *MetaGhost Fantasy*, *Cripto Flowers*) identificadas como `PLACEHOLDER DE CAPA • COVER_PIC PREVIEW` com borda tracejada e metadados contextuais.
  - O carrossel e lightbox agora resolvem flexivelmente URLs de imagens tanto por `item.url` quanto por `item.src` ou strings diretas de caminho.

---

## [0.14.1] - 2026-10-20
### Adicionado
- **Listagem dos 6 Jogos em Games & Prototypes (`games-prototypes.html`):**
  - Correção na inicialização da renderização dos cards com declaração de `statusIcon` em `renderProjectCard` ([`js/components.js`](file:///c:/Users/Germano/Documents/projects/sideprojects/Germano123.github.io/js/components.js)).
  - Habilitada a listagem completa dos 6 jogos autorais e parcerias em `games-prototypes.html`: *Digital Delivery*, *Tribunal Lógico*, *Typing Defenders*, *Little Knight*, *MetaGhost Fantasy* e *Cripto Flowers*.
  - **Filtros Rápidos com Contadores:** Adicionados filtros interativos de escopo no topo do catálogo (`Todos (6)`, `🤝 Parcerias (3)`, `👤 Pessoal (2)`, `📖 Estudos (1)`).
  - Suporte a internacionalização (PT/EN) para os novos filtros em [`js/i18n.js`](file:///c:/Users/Germano/Documents/projects/sideprojects/Germano123.github.io/js/i18n.js).

---

## [0.14.0] - 2026-10-20
### Adicionado
- **Carrossel Interativo para a Galeria do Projeto (`project.html`):**
  - Transformação da galeria do estudo de caso em um carrossel dinâmico, acessível e responsivo, focado em alta fidelidade visual (*Visual First*).
  - **Palco Principal (`.carousel-stage`):** Exibição em destaque do slide ativo com proporção 16:9, suporte a transição suave de opacidade e contador dinâmico de lâminas (*X de Y* / *X of Y*).
  - **Navegação Multimodal:**
    - Botões direcionais sobrepostos ao palco (`‹` e `›`) com microinterações acolhedoras.
    - Barra inferior de miniaturas táteis com rolagem automática e realce ativo com a paleta do laboratório.
    - Indicadores circulares (*dots*) de paginação com animação de expansão.
    - Navegação completa por teclado (`ArrowLeft` e `ArrowRight`).
    - Suporte nativo a gestos de deslize tátil (*swipe touch*) em dispositivos móveis.
  - **Legendas Dinâmicas Reativas:** Barra de legendas contextualizada atualizada de forma síncrona a cada slide.
  - **Integração com Lightbox Modal:** Clique no palco principal mantém a ampliação em tela cheia na imagem exata em exibição.

---

## [0.13.1] - 2026-10-20
### Modificado
- **Reposicionamento da Tag de Status ("Work in Progress"):**
  - Desvinculada a posição da tag de status do projeto da ancoragem absoluta no canto superior direito de `project.html`, eliminando qualquer sobreposição com o novo banner diagonal de parceria/autoria.
  - No estudo de caso (`project.html`), a badge de status agora flui organicamente na barra de metadados (`.case-study-meta`) abaixo do título, integrada aos créditos de parceria e tags tecnológicas.
  - Adicionado espaçamento lateral (`padding-right: 140px` no desktop, `90px` no mobile) em `.case-study-header` para respiro visual harmônico com a faixa diagonal.
  - Adicionados ícones táteis às badges de status (`⏳ Em Andamento`, `✅ Concluído`, `🧪 Protótipo`, `📦 Arquivado`).

---

## [0.13.0] - 2026-10-20
### Adicionado
- **Marcação Visual de Parcerias e Natureza do Projeto:**
  - Adicionado suporte à classificação de projetos por modelo de desenvolvimento: `pessoal`, `parceria` e `estudo`.
  - **Banner Diagonal no Canto Superior Direito:** Componente de faixa diagonal posicionado no canto superior direito do container `<article class="case-study">` em `project.html`, estendendo-se entre as bordas superior e lateral direita a uma distância do canto.
  - **Bordas Coloridas Especializadas:**
    - **Laranja (`#e67e22` / `#f39c12`):** Projetos de autoria `pessoal` (`little-knight`, `metaghost-fantasy`).
    - **Roxo (`#9333ea` / `#a855f7`):** Projetos em `parceria` com equipes, marcas ou empresas (`digital-delivery`, `tribunal-logico`, `typing-defenders` em parceria com *Aquele Professor*).
    - **Branco (`#ffffff` / `#cbd5e1`):** Projetos experimentais ou de `estudo` técnico (`cripto-flowers`).
  - **Badges nos Cards de Catálogo:** Indicadores de parceria e borda superior correspondente nos cards renderizados por [`js/components.js`](file:///c:/Users/Germano/Documents/projects/sideprojects/Germano123.github.io/js/components.js).
  - **Internacionalização (PT/EN):** Dicionários atualizados em [`js/i18n.js`](file:///c:/Users/Germano/Documents/projects/sideprojects/Germano123.github.io/js/i18n.js) com suporte dinâmico aos rótulos e créditos de parceiros.

---

## [0.12.0] - 2026-10-20
### Removido
- **Remoção de Dados Placeholder / Mock:**
  - Removidos os 6 projetos de exemplo fictícios de [`js/data/projects.js`](file:///c:/Users/Germano/Documents/projects/sideprojects/Germano123.github.io/js/data/projects.js) (`cozy-tilemap-automator`, `lowpoly-nature-kit`, `cozy-forest-guardian`, `stylized-locomotion-cycles`, `cozy-interaction-framework`, `cozy-palette-packer`).
  - Removidos os arquivos de teste `exemplo-*.json` em `public/projects/`.
  - A base canônica de projetos agora reflete exclusivamente os dados reais em fase de mapeamento (iniciando pelos 6 jogos já integrados). As áreas ainda sem projetos reais mapeados exibem o estado vazio acolhedor (*empty state*) do laboratório.

---

## [0.11.0] - 2026-10-20
### Adicionado
- **Integração de 6 Novos Jogos do Portfólio (`artifacts/portfolio-data/`):**
  - Mapeamento e estruturação completa em `js/data/projects.js` segundo a arquitetura `GamePrototypeProjectData`:
    - `digital-delivery`: Simulador de entregas com física arcade, drift suave e ambientação de chuva relaxante.
    - `tribunal-logico`: Jogo investigativo de dedução e tribunal com apresentação de evidências e análise de depoimentos.
    - `typing-defenders`: Arcade de digitação rítmica com digitação mecânica e destruição de meteoros.
    - `little-knight`: Metroidvania / Ação de plataforma com combates ágeis e física acolhedora.
    - `metaghost-fantasy`: RPG tático em turnos com movimentação em grade e combos elementais de feitiços.
    - `cripto-flowers`: Simulador de jardinagem e botânica fantástica com estufas hidropônicas e genética botânica procedural.
- **Galeria de Imagens Especializada (Mínimo de 4 imagens por projeto):**
  - 30 novas artes vetoriais SVG geradas e organizadas em `assets/projects/<slug>/` (capa oficial + 4 capturas conceituais/gameplay por projeto).
  - Grid de galeria responsivo na página de estudo de caso (`project.html`) posicionado imediatamente após o Resumo Executivo (*Visual First*).
  - Modal Interativo de Lightbox com transição suave, navegação por teclado (`ArrowLeft`, `ArrowRight`, `Escape`), backdrop click, botões de ação e contadores bilíngues (*"Imagem X de Y"* / *"Image X of Y"*).
  - Suporte completo a internacionalização (PT/EN) para legendas, títulos da galeria e interface do lightbox em `js/i18n.js`.

---

## [0.10.0] - 2026-10-20
### Adicionado
- **Especificação de Estruturas de Apresentação (`artifacts/3_project_presentation_schemas.md`):** Extração e especificação técnica das 4 estruturas de dados especializadas (Tools Lab, Art Workshop, Games & Prototypes, Software Shelf) com diagramas de taxonomia e fluxogramas de pipeline em Mermaid.
- **Modelagem Especializada em `js/data/projects.js`:**
  - `ToolsLabProjectData`: Contexto de workflow, gargalo operacional, tempo economizado, pipeline I/O (inputs, processamento, outputs) e integrações de editor não-destrutivas com Undo/Redo.
  - `ArtWorkshopProjectData`: Métricas de Technical Art Budget (triângulos, vértices, atlas de textura, draw calls, aproveitamento UV), setup de shaders (deslocamento senoidal em vértices) e rigging/animação (contagem de ossos, controles IK e clipes NLA).
  - `GamePrototypeProjectData`: Perfil de jogabilidade (gênero, perspectiva, plataformas, controles), engenharia de sensação tátil (*game feel*: input buffering de 100ms, squash & stretch, micro-trepidação, bips modulados) e arquitetura de FSM/Event Bus/Resources.
  - `SoftwareShelfProjectData`: Padrões de arquitetura (Strategy, Pipeline, Inversão de Dependências), modularidade desacoplada, cobertura de testes unitários (92%), benchmarks de performance e distribuição SemVer.
- **Renderização Contextual no Estudo de Caso (`project.html`):** Componentes dinâmicos dedicados renderizados conforme a disciplina do projeto, destacando a profundidade técnica de cada trabalho.
- **Métricas Especializadas nos Cards (`js/components.js`):** Micro-badges dinâmicos exibindo métricas-chave diretamente no grid (tempo economizado para ferramentas, contagem de tris e draw calls para arte, gênero para jogos, versão e licença para software).
- **Internacionalização das Novas Seções (`js/i18n.js`):** Dicionários reativos em PT e EN para todas as seções especializadas.

---

## [0.9.0] - 2026-10-14
### Adicionado
- **Games & Prototypes (`games-prototypes.html`):** Nova página dedicada a jogos autorais, protótipos de mecânicas e experimentos interativos acolhedores (substituindo Game Systems).
- **Filtros por Categoria no Art Workshop (`art-workshop.html`):** Barra de filtros integrada com 4 categorias: Todos (`all`), Personagens (`personagens`), Assets (`assets`) e Animações (`animacoes`), com suporte a query params (`?category=...`).
- **Diretriz Transversal "Visual First" em `project.html`:** Mídia principal (renders/gameplay/covers) exibida no topo, logo após o título e tags, antes dos resumos e breakdowns técnicos.
- **Redirecionamentos Transparentes:**
  - `animation-lab.html` redireciona para `art-workshop.html?category=animacoes`.
  - `game-systems.html` redireciona para `games-prototypes.html`.

### Modificado
- **Navegação Principal (Navbar):** Reativação de todos os links principais (`tools-lab.html`, `art-workshop.html`, `games-prototypes.html`, `software-shelf.html`, `about.html`).
- **Aberturas & Taglines das Áreas:** Atualizadas taglines das 4 áreas principais conforme especificação v1.1 com suporte total bilíngue (PT/EN).
- **Catálogo Software Shelf:** Atualização dos filtros de área e mapeamento automático da taxonomia revisada.

---

## [0.8.0] - 2026-10-14
### Adicionado
- **Página "Sobre" (`about.html`):** Estruturação completa com cabeçalho contendo avatar oficial do GitHub, moldura de madeira e badge Cozy Dev.
- **4 Parágrafos de Atuação:** Detalhamento formal e acolhedor das 4 frentes de trabalho:
  1. **Desenvolvimento de Software:** Engenharia de software sustentável, arquitetura limpa, desacoplamento e robustez técnica.
  2. **Desenvolvimento de Jogos:** Experiências independentes com ritmo *cozy*, máquinas de estados, polimento de *game feel* e motores Unity e Godot 4.
  3. **Modelagem 3D & Technical Art:** Modelagem low-poly estilizada no Blender, UV atlas compacto e shaders customizados (vento em vértices e iluminação suave).
  4. **Tools Development:** Custom Editors na Unity, ferramentas de automação para level design (tilemaps e regras de adjacência) e pipelines sem atrito.
- **Internacionalização da Página Sobre:** Tradução completa e reativa (PT/EN) de todos os 4 pilares e textos de perfil em `js/i18n.js`.
- **Habilitação do link "Sobre" no Navbar:** O link agora está ativo e funcional na barra de navegação.

---

## [0.7.0] - 2026-10-14
### Adicionado
- **Banner "Laboratório em Construção":** Inserido logo abaixo do Manifesto do Laboratório, informando a preparação das bancadas e publicação incremental de estudos de caso.
- **Componente CTA "Entre em contato comigo":** Card de convite com links diretos e estilizados para WhatsApp (`wa.me`), LinkedIn e E-mail.
### Modificado
- **Ocultação Temporária de Seções:** Comentadas as seções "Explore o Laboratório" e "Projetos em Destaque" no `index.html` enquanto as bancadas são finalizadas.
- **Navegação Temporariamente Desabilitada:** Links de áreas em construção no navbar configurados com classe `.disabled`, `aria-disabled="true"` e cursor indicativo de bloqueio.
- **Internacionalização do Rodapé:** Sincronização de todos os links e termos do rodapé com o dicionário do `js/i18n.js`.

---

## [0.6.0] - 2026-10-14
### Modificado
- **Reajuste Estrutural do Hero Card:**
  - Bloco superior horizontal (`.hero-title`): Foto de perfil e conjunto de título (badge + h1) posicionados lado-a-lado.
  - Bloco inferior vertical (`.hero-description`): Tagline, bio e botões de ação organizados em coluna única com divisória suave.
  - Ajuste de responsividade para dispositivos móveis (centralização e empilhamento fluido).

---

## [0.5.0] - 2026-10-14
### Adicionado
- **Hero Card com Avatar Oficial:** Integração da foto pública do GitHub (`https://github.com/Germano123.png`) ao componente de apresentação "Onde código, arte e ferramentas se encontram".
- Moldura arredondada com aro em tom de madeira natural (`--wood-light`), halo sutil e mini-badge de folhagem `🌿`.

---

## [0.4.0] - 2026-10-13
### Adicionado
- **Mapa de Rotas Completo:**
  - `software-shelf.html`: Catálogo geral com busca em tempo real e filtros combinados por área e tecnologia.
  - `project.html`: Renderizador dinâmico de estudos de caso via `?slug=...` com breakdown técnico (problema, solução, contribuições individuais e links verificáveis).
  - Páginas dedicadas por área: `tools-lab.html`, `art-workshop.html`, `game-systems.html`.
  - Áreas em preparação com *Empty States* explicativos: `animation-lab.html` e `experiments.html`.
  - Página `404.html` personalizada para GitHub Pages.

---

## [0.3.0] - 2026-10-13
### Adicionado
- **Design System Cozy Completo (`css/`):**
  - Paleta com tons aconchegantes: verde musgo, laranja caloroso, creme e tons amadeirados.
  - Tipografia arredondada *Fredoka* combinada com *JetBrains Mono* para elementos técnicos.
  - Variáveis semânticas em `tokens.css`.
  - Sistema de internacionalização reativo PT/EN em `js/i18n.js` com persistência em `localStorage`.
