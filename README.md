# 🌿 Cozy Developer Laboratory

> **"Onde código, arte e ferramentas se encontram."**  
> *"Where code meets craft."*  
> Portfólio profissional e laboratório digital de **Germano Gomes** — Desenvolvedor de Jogos, Tools Developer e Technical Artist.

[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-success?style=flat-square&logo=github)](https://germano123.github.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg?style=flat-square)](LICENSE)
[![i18n: PT | EN](https://img.shields.io/badge/i18n-PT%20%7C%20EN-blue?style=flat-square)](#internacionaliza%C3%A7%C3%A3o-i18n)

---

## ☕ Visão Geral

O **Cozy Developer Laboratory** é um ambiente digital concebido para apresentar trabalhos técnicos, ferramentas de produtividade, artefatos 3D e sistemas de jogos sob uma estética acolhedora (*cozy*), combinando design lúdico com rigor de engenharia de software.

O projeto segue os princípios estabelecidos no documento canônico de requisitos (`artifacts/1_cozy_developer_laboratory_engineering_spec.md`), priorizando:
- **Conteúdo antes de efeitos:** Foco em demonstrar evidências concretas, problemas e soluções reais.
- **Fonte única de dados:** Cada projeto possui um único registro canônico que alimenta cards, filtros e estudos de caso.
- **Simplicidade arquitetural:** Execução estática de alta velocidade no GitHub Pages sem etapas pesadas de build ou dependências frágeis.
- **Acessibilidade e responsividade:** Contraste WCAG AA, navegação por teclado, respeito a movimento reduzido e fluidez em telas móveis e desktops.

---

## 🎯 4 Frentes de Atuação

| Área | Foco e Especialidade | Tecnologias Chave |
| :--- | :--- | :--- |
| **💻 Desenvolvimento de Software** | Aplicações modernas, código limpo, desacoplamento, arquitetura sustentável e facilidade de manutenção. | TypeScript, JavaScript, C#, Python, REST APIs, Git |
| **🎮 Desenvolvimento de Jogos** | Jogos independentes acolhedores (*cozy*), máquinas de estados, mecânicas táteis e polimento de *game feel*. | Unity (C#), Godot (GDScript), Aseprite |
| **🎨 Modelagem 3D & Technical Art** | Modelos *low-poly* estilizados, mapeamento UV compacto (texture atlas) e shaders customizados (vento e iluminação). | Blender, Shader Graph, Vertex Shaders, Texturização |
| **🔧 Tools Development** | Extensões de editor sob medida (Custom Inspectors), geradores procedurais e ferramentas de automação de fluxo de trabalho. | Unity Editor Scripting, ScriptableObjects, Pipelines de Assets |

---

## 🗺️ Mapa de Páginas e Navegação

```text
/
├── index.html              # Página Inicial (Hero Card com avatar, Manifesto, Banner e CTA)
├── about.html              # Página Sobre (Detalhamento das 4 atuações e contatos)
├── software-shelf.html     # Catálogo central pesquisável e filtrável de todos os projetos
├── project.html            # Estudo de caso detalhado dinâmico (?slug=meu-projeto, Visual First)
├── tools-lab.html          # Tools Lab: Ferramentas de editor, pipelines e automação
├── art-workshop.html       # Art Workshop: 3D, texturas, shaders e animações com filtros
├── games-prototypes.html   # Games & Prototypes: Jogos autorais, protótipos e mecânicas
├── game-systems.html       # Redirecionamento de compatibilidade para games-prototypes.html
├── animation-lab.html      # Redirecionamento de compatibilidade para art-workshop.html?category=animacoes
├── experiments.html        # Bancada de experimentos, benchmarks e protótipos
├── devlog.html             # Artigos técnicos, pós-mortems e notas de produção
└── 404.html                # Página de erro amigável para rotas inexistentes
```

---

## 📂 Estrutura do Repositório

```text
├── assets/                 # Imagens, capas de projetos e recursos estáticos
├── css/
│   ├── tokens.css          # Variáveis de design (cores, madeira, tipografia, elevações)
│   └── style.css           # Estilos globais, componentes e responsividade
├── js/
│   ├── data/
│   │   ├── projects.js     # Fonte canônica de projetos (PT/EN)
│   │   └── areas.js        # Metadados das áreas do laboratório
│   ├── i18n.js             # Motor reativo de tradução PT/EN com persistência
│   ├── projects-service.js # Camada de consulta e filtragem de projetos
│   └── components.js       # Renderizadores de Header, Footer, Cards e EmptyStates
├── artifacts/              # Especificações de engenharia e planos de arquitetura
│   ├── 1_cozy_developer_laboratory_engineering_spec.md
│   ├── 2_portfolio_pages.md
│   └── 3_project_presentation_schemas.md
├── CHANGELOG.md            # Histórico detalhado de versões e entregas
├── LICENSE                 # Licença MIT
└── README.md               # Esta documentação
```

---

## 🌐 Internacionalização (i18n)

O site possui internacionalização nativa e reativa entre **Português (`pt-BR`)** e **Inglês (`en`)**:
- **Detecção Automática:** Se for a primeira visita, o idioma é definido com base no navegador (`navigator.language`).
- **Persistência:** A preferência selecionada no seletor segmentado do topo é memorizada via `localStorage`.
- **Reatividade sem Recarregamento:** A troca de idioma atualiza dinamicamente elementos com atributos `data-i18n`, metatags de SEO, título da página e re-renderiza componentes interativos via evento `languageChanged`.

---

## 🛠️ Como Adicionar um Novo Projeto

Para cadastrar um novo trabalho ou estudo de caso sem tocar no código das páginas:

1. Abra o arquivo [`js/data/projects.js`](file:///c:/Users/Germano/Documents/projects/sideprojects/Germano123.github.io/js/data/projects.js).
2. Adicione um novo objeto seguindo o modelo canônico:

```javascript
{
  id: "meu-novo-projeto",
  slug: "meu-novo-projeto",
  title: "Nome do Projeto",
  projectType: "tool", // 'tool' | 'tech-art' | 'game-system' | 'experiment' | 'software'
  areas: ["tools-lab", "software-shelf"],
  technologies: ["C#", "Unity", "Editor Scripting"],
  status: "completed", // 'completed' | 'in-progress' | 'prototype' | 'archived'
  visibility: "public", // 'public' | 'draft' | 'private'
  featured: true,
  cover: "assets/projects/meu-projeto/cover.webp",
  summary: {
    pt: "Resumo em português para o card...",
    en: "English summary for the project card..."
  },
  problem: {
    pt: "Qual desafio motivou a criação...",
    en: "The problem that motivated the work..."
  },
  solution: {
    pt: "Como o problema foi solucionado tecnicamente...",
    en: "Technical approach and solution..."
  },
  contributions: {
    pt: "Suas responsabilidades individuais no projeto...",
    en: "Individual responsibilities and role..."
  },
  technicalDetails: {
    pt: "Arquitetura, algoritmos, decisões e estruturas...",
    en: "Architecture, algorithms, and technical breakdown..."
  },
  results: {
    pt: "Resultados obtidos e métricas observadas...",
    en: "Observed results and limitations..."
  },
  repositoryUrl: "https://github.com/Germano123/meu-repo",
  buildUrl: null,
  documentationUrl: null
}
```

3. O projeto aparecerá automaticamente na página inicial (se `featured: true`), no catálogo `software-shelf.html`, nas áreas correspondentes (`tools-lab.html`, etc.) e gerará a página de estudo de caso em `project.html?slug=meu-novo-projeto`.

---

## 📬 Contato e Conexões

- 💬 **WhatsApp:** [Iniciar conversa](https://wa.me/558699976066)
- 💼 **LinkedIn:** [linkedin.com/in/germano-gomes-293648121](https://www.linkedin.com/in/germano-gomes-293648121/)
- ✉️ **E-mail:** [germano-software-dev@hotmail.com](mailto:germano-software-dev@hotmail.com)
- 🐙 **GitHub:** [@Germano123](https://github.com/Germano123)

---

## 📄 Licença

Distribuído sob a licença **MIT**. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.