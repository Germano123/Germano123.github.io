# Changelog — Cozy Developer Laboratory

Todas as alterações graduais, refatorações e entregas de engenharia deste projeto estão registradas abaixo.

O formato baseia-se no [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

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
- **Fonte Única de Dados Canônica:**
  - `js/data/projects.js`: Modelagem central de projetos com suporte bilíngue, tags, status e visibilidade.
  - `js/data/areas.js`: Metadados das áreas do laboratório.
  - `js/projects-service.js`: Camada de serviços para consultas e filtros.
- **Sistema de Design Tokens:** Criação de `css/tokens.css` e `css/style.css` com paleta aconchegante (madeira, verde, laranja, creme e grafite escuro).
- **Componentes Compartilhados:** `js/components.js` com renderizadores de Header, Footer, Cards e Empty States.

---

## [0.2.0] - 2026-10-13
### Adicionado
- **Sistema de Internacionalização (i18n):**
  - Implementação de seletor segmentado `PT | EN` no cabeçalho.
  - Alternância instantânea via `data-i18n` e evento `languageChanged`.
  - Persistência da preferência em `localStorage` e detecção automática via `navigator.language`.

---

## [0.1.0] - 2026-10-13
### Removido
- Remoção de cards falsos de projetos com textos de placeholder.
- Remoção de botões inoperantes que apontavam para `#`.
- Remoção do script legado vazio `index.js`.
