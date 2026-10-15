# 2 — Portfolio Pages
## Especificação de conteúdo para as páginas de apresentação do portfólio

**Versão:** 1.1 — integração de animação ao Art Workshop  
**Escopo:** páginas de portfólio dentro do site existente.  
**Fora do escopo:** reconstruir o site, alterar o HTML-base ou substituir sua arquitetura global.

## 1. Direção para esta etapa

O site já existe. Esta etapa organiza apenas as páginas de apresentação dos projetos e das áreas do portfólio, respeitando a estrutura, os componentes e os padrões já existentes.

Páginas previstas:
1. **Tools Lab** — ferramentas, automações e pipelines.
2. **Art Workshop** — personagens, assets 3D, materiais, texturas, shaders, rigging e animações.
3. **Games & Prototypes** — jogos concluídos, projetos em desenvolvimento e protótipos jogáveis. Este nome substitui “Game Systems” por ser mais concreto.
4. **Software Shelf** — catálogo de softwares e aplicações.

**Animation Lab deixa de ser uma página ou área independente.** Rigging, skinning e animação passam a ser apresentados dentro de **Art Workshop**, usando a tag `animações` e o filtro correspondente.

A apresentação será **visual primeiro e breakdown técnico depois, quando aplicável**. O posicionamento permanece Cozy Developer: um laboratório onde código, arte e ferramentas se encontram, com equilíbrio entre Tools Development e Technical Art.

## 2. Princípios de apresentação

- Orientar rapidamente a descoberta e demonstrar capacidade real.
- Mostrar o resultado antes de aprofundar o processo.
- Ajustar a profundidade técnica à natureza do projeto.
- Distinguir conceito, protótipo, implementação parcial e produto concluído.
- Explicitar contribuição individual em trabalhos colaborativos.
- Não inventar funcionalidades, tecnologias, métricas ou resultados.
- Usar apenas conteúdo próprio ou autorizado; respeitar NDA e confidencialidade.
- Cada projeto tem um registro canônico, que pode ser referenciado por várias áreas.
- Usar tags consistentes para facilitar a filtragem sem criar páginas duplicadas.

## 3. Tools Lab

**Intenção:** demonstrar capacidade de construir ferramentas que ajudam equipes de desenvolvimento e arte a produzir, validar, integrar ou depurar conteúdo.

**Abertura sugerida:** “Ferramentas e automações para tornar os fluxos de desenvolvimento mais claros, consistentes e eficientes.”

**Conteúdos:** editor tools, scripts, automação, pipelines de assets, geração procedural, validadores, debug e profiling, integrações entre DCC tools e engines.

**Card:** imagem/captura própria, nome, resumo curto, tecnologias, status e link para detalhes.

**Página individual:**
1. Demonstração da ferramenta em funcionamento.
2. Problema ou tarefa que resolve.
3. Entrada, processamento e saída.
4. Decisões técnicas e arquitetura.
5. Validações, testes e tratamento de erros, se existirem.
6. Resultado observado e limitações.
7. Links para código, documentação ou build.

**Evidências prioritárias:** vídeo curto de uso, captura da interface, exemplo de entrada/saída, diagrama simples e código selecionado, se publicável.

## 4. Art Workshop

**Intenção:** demonstrar produção de arte e Technical Art para jogos, da criação visual à preparação técnica e integração de assets. A área também reúne personagens e trabalhos de rigging, skinning e animação.

**Abertura sugerida:** “Personagens, assets e animações construídos com atenção à linguagem visual, à estrutura e ao uso em tempo real.”

### 4.1 Filtros da página

A página deve apresentar três filtros visíveis e fáceis de compreender:

- **Todos** — mostra todos os projetos publicados em Art Workshop.
- **Personagens** — personagens e criaturas, incluindo modelagem, escultura, retopologia, materiais, rigging ou outras etapas associadas ao personagem.
- **Assets** — props, objetos, ambientes, conjuntos de assets, materiais, texturas, shaders e estudos de Technical Art que não estejam classificados primariamente como personagens ou animações.
- **Animações** — animação de personagens ou objetos, rigging, skinning, testes de deformação, ciclos, clipes e preparação de animações para engine.

“Todos” é o estado inicial recomendado. Os três filtros solicitados devem ser categorias de navegação, não páginas independentes. Cada projeto recebe uma **categoria principal** e pode ter tags adicionais.

**Regras de classificação:**
- Cada projeto deve ter uma categoria principal entre `personagens`, `assets` e `animações`.
- Um personagem que também tenha rig e animação pode ser classificado como `personagens` e receber `animações` como tag adicional.
- Um estudo centrado no movimento, no rig ou no resultado animado deve ser classificado como `animações`.
- Um modelo de personagem estático, sem foco demonstrativo em movimento, normalmente entra em `personagens`.
- Evitar duplicar o mesmo projeto para fazê-lo aparecer em mais de um filtro; a filtragem deve usar metadados do registro canônico.

**Metadados mínimos para os cards:** título, resumo curto, categoria principal, tags, ferramentas relevantes, status e imagem de capa. Os filtros devem funcionar sobre esses metadados e não depender do nome do arquivo ou do texto descritivo.

### 4.2 Conteúdos

Modelagem, low-poly, retopologia, topologia, UV mapping, texturas e mapas, materiais, shaders, personagens, criaturas, rigging, skinning, animação, ciclos, exportação e preparação para engine.

### 4.3 Página individual de projeto

A ordem varia conforme o foco, mantendo a apresentação visual em primeiro lugar:

1. Render, turntable, clipe de animação ou asset em contexto.
2. Objetivo visual e técnico.
3. Processo realizado: modelagem, UVs, texturas, material, rig, skinning ou animação, conforme aplicável.
4. Breakdown técnico: topologia, mapas, hierarquia, controles, deformações, clipes ou exportação.
5. Integração no ambiente de destino, se disponível.
6. Limitações, otimizações e aprendizados.
7. Links autorizados para projeto, documentação ou demonstração.

**Evidências:** render final, wireframe, UV layout, mapas pertinentes, material/shader, turntable, vídeo de animação, captura do rig, teste de deformação e comparação em contexto. Exibir somente artefatos existentes e não declarar integração que não tenha sido realizada.

## 5. Games & Prototypes

**Por que o nome muda:** “Games & Prototypes” comunica jogos concluídos, jogos em desenvolvimento e protótipos. “Game Systems” pode ser uma tag ou competência dentro de um projeto.

**Intenção:** demonstrar capacidade de transformar ideias em experiências jogáveis e explicar o estado real de desenvolvimento.

**Abertura sugerida:** “Jogos, protótipos e experiências interativas em diferentes estágios de desenvolvimento.”

**Conteúdos:** jogos concluídos, projetos em andamento, MVPs, protótipos jogáveis, game jams e mecânicas demonstráveis.

**Card:** screenshot ou gameplay, título, gênero/conceito, status, contribuição e link para detalhe ou build.

**Página individual:**
1. Gameplay ou vídeo de apresentação.
2. Premissa e objetivo.
3. Estado e escopo efetivamente implementado.
4. Papel e contribuição individual.
5. Sistemas, mecânicas ou ferramentas implementados.
6. Breakdown técnico, quando relevante.
7. Aprendizados, limitações e próximos passos.
8. Build, repositório ou documentação, se disponíveis.

**Evidências:** gameplay real, capturas próprias, descrição do que funciona e separação entre contribuição individual e trabalho da equipe. Se não for possível distribuir uma build, usar vídeo ou capturas autorizadas.

## 6. Software Shelf

**Intenção:** catálogo central de aplicações, softwares e ferramentas de maior escopo. Ajuda a descobrir os trabalhos sem substituir páginas especializadas.

**Abertura sugerida:** “Uma coleção de softwares, aplicações e ferramentas construídas para resolver problemas concretos.”

**Conteúdos:** aplicações web/desktop, serviços, bibliotecas, sistemas, utilitários e projetos colaborativos com contribuição identificável.

**Card:** captura real, nome, problema que resolve, status, stack principal, contribuição e link para estudo de caso.

**Página individual:**
1. Tela ou demo em destaque.
2. Contexto e problema.
3. Funcionalidades implementadas.
4. Contribuição individual.
5. Arquitetura e decisões técnicas, se relevantes.
6. Integrações, validações e limitações.
7. Links para repositório, demo e documentação.

Um projeto pode aparecer também em Tools Lab ou Games & Prototypes, mas deve manter um único registro canônico. Distinguir software implementado de proposta conceitual.

## 7. Relação entre áreas e projetos

- Uma ferramenta pode aparecer em Tools Lab e Software Shelf.
- Um jogo pode aparecer em Games & Prototypes e Software Shelf.
- Um shader pode aparecer em Art Workshop e ser relacionado a um jogo.
- Um personagem pode ser listado em Art Workshop com categoria `personagens` e tag adicional `animações`, se o projeto também incluir rig ou movimento.
- Um projeto centrado em rigging, skinning ou movimento fica em Art Workshop com categoria principal `animações`.
- As áreas organizam a descoberta; a página individual apresenta a história completa. Não duplicar conteúdo manualmente.

## 8. Ordem visual comum

1. Imagem principal ou demonstração.
2. Título e resumo.
3. Status, tecnologias, categoria/tags e contribuição.
4. Galeria ou sequência visual.
5. Breakdown técnico, se relevante.
6. Resultados, limitações e links.

Preservar a identidade visual e os componentes do site existente. Esta especificação não autoriza reconstruir o site nem alterar o HTML-base.

## 9. Conteúdo mínimo para publicar

- Título e resumo claros.
- Status real.
- Contribuição individual definida.
- Pelo menos uma evidência visual própria ou autorizada.
- Descrição do que foi implementado.
- Tecnologias realmente utilizadas.
- Categoria principal e tags coerentes, para projetos em Art Workshop.
- Links verificados, quando existirem.
- Revisão de confidencialidade e direitos de uso.

O breakdown técnico pode ser aprofundado depois se não for essencial para sustentar a competência demonstrada na primeira publicação.

## 10. Fluxo incremental

1. Selecionar um projeto.
2. Escolher o template: `game-project`, `software`, `tool` ou `art-asset`.
3. Preencher o Markdown específico.
4. Definir categoria principal e tags, quando for um projeto de Art Workshop.
5. Reunir e mapear as mídias.
6. Confirmar autoria, status e autorização.
7. Produzir a página individual a partir dos dados aprovados.
8. Referenciar o projeto na área apropriada.
9. Verificar filtros, links, responsividade e conteúdo.
10. Publicar sem alterar páginas não relacionadas.

## 11. Critérios de aceite

- As quatro páginas têm propósito e estrutura definidos.
- “Games & Prototypes” substitui “Game Systems”.
- Art Workshop possui os filtros `Personagens`, `Assets` e `Animações`, além da opção `Todos`.
- Rigging, skinning e animação são tratados dentro de Art Workshop, sem uma página Animation Lab separada.
- Cada projeto pode ser preparado isoladamente.
- A estrutura do site existente permanece preservada.
- Novos projetos podem ser adicionados sem reconstruir as páginas.

## 12. Decisões em aberto

- Quais projetos serão publicados primeiro.
- Quais terão breakdown técnico completo.
- Quais mídias já existem e quais precisam ser produzidas.
- Quais builds, repositórios e links podem ser divulgados.
- Como os filtros serão conectados aos componentes já existentes no site, respeitando o HTML-base e os padrões atuais.

Essas decisões serão tomadas projeto a projeto, com os artefatos individuais.
