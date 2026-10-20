# 📁 Guia de Coleta de Arquivos por Projeto
> **Cozy Developer Laboratory** — Pasta base para reunir mídias, assets e dados de teste de cada tipo de projeto.

---

## 📊 Tabela de Referência: 1 Projeto de Cada Tipo

A tabela abaixo serve como checklist direto para você reunir e organizar os arquivos necessários de cada projeto antes de publicar:

| Área / Tipo | Projeto de Exemplo | Arquivos & Mídias Necessários | Métricas & Metadados Chave | Links Verificáveis |
| :--- | :--- | :--- | :--- | :--- |
| **🔧 Tools Lab**<br/>(`tool`) | `tilemap-prop-automator` | • `cover.png` (Capa 16:9)<br/>• `demo.mp4` ou `demo.gif` (Uso no editor)<br/>• `inspector.png` (Custom UI)<br/>• `before-after.png` (Comparativo) | • Host: Unity (C#)<br/>• Tempo economizado: ~60%<br/>• I/O: Tilemap ➔ Cenário instanciado<br/>• Suporte nativo a Undo/Redo | • Repositório GitHub<br/>• Pacote `.unitypackage` ou release |
| **🎨 Art Workshop**<br/>(`art`) | `forest-guardian-character` | • `cover.png` (Beauty Render)<br/>• `turntable.mp4` ou `.gif` (Giro 360°)<br/>• `wireframe.png` (Topologia limpa)<br/>• `uv-atlas.png` (Mapa de textura)<br/>• `in-engine.png` (Asset no jogo) | • Categoria: `personagens` ou `assets`<br/>• 1.800 Triângulos • 1 Draw Call<br/>• Atlas 256x256 ou 512x512<br/>• Rig com 28 ossos + 3 clipes NLA | • Repositório / Link de Shaders<br/>• Visualizador 3D (Sketchfab / glTF) |
| **🎮 Games & Prototypes**<br/>(`game`) | `tactile-interaction-prototype` | • `cover.png` (Capa de gameplay)<br/>• `gameplay.mp4` ou `.gif` (60fps juice)<br/>• `controls.png` (Guia de botões)<br/>• Build WebGL ou pasta exportada | • Estágio: Protótipo de mecânica<br/>• Gênero: Exploração / Aventura Cozy<br/>• Game Feel: Coyote time, Input buffer, Squash & stretch<br/>• FSM + Signals na Godot | • Build jogável (Itch.io / WebGL)<br/>• Repositório de código |
| **📚 Software Shelf**<br/>(`software`) | `palette-atlas-packer` | • `cover.png` (Interface ou terminal)<br/>• `architecture.png` (Diagrama modular)<br/>• `cli-demo.gif` (Sessão de terminal)<br/>• Logs de testes e benchmark | • Categoria: `cli-utility` ou `library`<br/>• Padrões: Strategy, Pipeline, Inversão de Dependências<br/>• Cobertura de testes: 92%<br/>• Versão semântica: `v1.1.0` | • Repositório GitHub<br/>• Pacote npm / Release executável |

---

## 🗂️ Estrutura de Pastas Sugerida para Armazenar os Arquivos

Para facilitar sua organização local, utilize a estrutura abaixo dentro de `public/projects/`:

```text
public/projects/
├── README.md                          <-- Este guia
├── tools/
│   └── tilemap-prop-automator/
│       ├── project.json               <-- Metadados do projeto
│       ├── cover.png                  <-- Capa principal
│       ├── demo.mp4                   <-- Vídeo curto de uso
│       └── inspector.png              <-- Captura da UI de editor
├── art/
│   └── forest-guardian-character/
│       ├── project.json
│       ├── cover.png
│       ├── turntable.mp4
│       ├── wireframe.png
│       └── uv-atlas.png
├── games/
│   └── tactile-interaction-prototype/
│       ├── project.json
│       ├── cover.png
│       ├── gameplay.mp4
│       └── build/                     <-- Arquivos de build WebGL exportada
└── software/
    └── palette-atlas-packer/
        ├── project.json
        ├── cover.png
        ├── architecture.png
        └── terminal-demo.gif
```

---

## 📋 Checklist Rápido de Arquivos para Cada Novo Projeto

### 1. Tools Lab
- [ ] Imagem de capa nítida mostrando a ferramenta em funcionamento no editor.
- [ ] Vídeo curto (15 a 45s) ou GIF mostrando a ferramenta resolvendo a tarefa sem atrito.
- [ ] Captura do inspetor personalizado (*Custom Inspector*) ou ferramentas de cena (*Scene Handles*).
- [ ] Definição do problema real (gargalo de tempo) e do fluxo de entrada/saída.

### 2. Art Workshop
- [ ] Render principal com boa iluminação e estética acolhedora (*beauty shot*).
- [ ] Vídeo ou GIF em turntable (giro 360°) para demonstrar silhueta e volume.
- [ ] Captura com wireframe visível para comprovar topologia e loops limpos.
- [ ] Textura do atlas UV para comprovar aproveitamento de espaço e baixo custo.
- [ ] Tabela de métricas (número exato de triângulos, resolução de textura e draw calls).

### 3. Games & Prototypes
- [ ] Imagem de capa que comunique imediatamente a perspectiva (top-down, side-scroller) e o clima do jogo.
- [ ] Vídeo de gameplay fluido (60fps) com áudio ligado evidenciando o polimento (*juice*).
- [ ] Esquema visual de controles (teclado e/ou controle).
- [ ] Link ou arquivos para jogar no navegador (WebGL).

### 4. Software Shelf
- [ ] Captura da interface do software ou gravação de terminal de alta resolução.
- [ ] Diagrama visual de arquitetura (fluxo de dependências ou módulos).
- [ ] Dados de qualidade: framework de testes, % de cobertura e benchmarks de tempo/memória.
- [ ] Link do repositório público com instruções claras de instalação.
