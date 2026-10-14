# Cozy Developer Laboratory

## Documento de requisitos para engenharia de produção

**Tipo:** Especificação funcional e técnica\
**Objetivo:** Orientar a evolução incremental do site pessoal para um
portfólio profissional de desenvolvimento de jogos, com foco em Tools
Development e Technical Art.\
**Status:** Proposta inicial para análise e implementação\
**Princípio central:** Um laboratório de desenvolvimento de jogos onde
código, arte e ferramentas se encontram.

------------------------------------------------------------------------

## 1. Visão do produto

O site deve apresentar o perfil profissional como **Cozy Developer** e
organizar trabalhos, ferramentas, softwares e experimentos em um
laboratório digital. A experiência combina identidade visual acolhedora
com evidências concretas de competência técnica.

O sistema precisa permitir que novos projetos sejam adicionados
incrementalmente, sem exigir a reconstrução das páginas ou duplicação de
conteúdo.

### 1.1 Objetivos

-   Apresentar o perfil profissional e suas principais áreas de atuação.
-   Demonstrar competências em Tools Development, Technical Art e
    desenvolvimento de jogos.
-   Exibir estudos de caso com demonstrações, imagens, vídeos, código e
    documentação.
-   Organizar projetos por áreas, categorias, tecnologias e estado de
    publicação.
-   Permitir que um mesmo projeto apareça em diferentes seções sem
    duplicar seu registro.
-   Manter uma arquitetura simples na primeira versão, com espaço para
    evolução.
-   Facilitar contato profissional, acesso ao currículo e consulta a
    repositórios públicos.

### 1.2 Fora do escopo inicial

Salvo decisão posterior, não são requisitos da primeira versão:

-   CMS complexo ou painel administrativo próprio.
-   Autenticação de usuários.
-   Sistema de comentários ou comunidade.
-   Execução de builds diretamente no navegador.
-   Infraestrutura de banco de dados se arquivos estáticos atenderem ao
    volume inicial.
-   Animações pesadas que prejudiquem desempenho, acessibilidade ou
    leitura.

------------------------------------------------------------------------

## 2. Princípios de produto e engenharia

1.  **Conteúdo antes de efeitos:** a demonstração do trabalho tem
    prioridade sobre decoração visual.
2.  **Incrementalidade:** novas páginas e projetos devem ser
    incorporados sem refatorações estruturais frequentes.
3.  **Fonte única de dados:** cada projeto deve ter um registro
    canônico, reutilizado em cards, filtros e páginas de detalhe.
4.  **Evidência verificável:** resultados, métricas e contribuições
    devem ser reais e identificáveis.
5.  **Responsabilidade explícita:** projetos colaborativos devem
    informar claramente a contribuição individual.
6.  **Desempenho:** imagens, vídeos e scripts devem ser carregados de
    forma eficiente.
7.  **Acessibilidade:** navegação por teclado, contraste, textos
    alternativos e respeito a preferências de movimento.
8.  **Identidade consistente:** a linguagem Cozy Developer deve ser
    reconhecível em todas as áreas.
9.  **Progressive disclosure:** mostrar primeiro o resumo e permitir
    aprofundamento técnico sob demanda.
10. **Simplicidade arquitetural:** adotar a solução menos complexa que
    cumpra os requisitos atuais.

------------------------------------------------------------------------

## 3. Mapa de navegação

### 3.1 Rotas propostas

``` text
/
├── /tools-lab
├── /art-workshop
├── /animation-lab
├── /game-systems
├── /experiments
├── /software-shelf
│   └── /software-shelf/[slug]
├── /devlog
│   └── /devlog/[slug]
└── /about
```

A convenção `[slug]` representa um segmento dinâmico da rota, conforme a
tecnologia adotada.

### 3.2 Descrição das páginas

  --------------------------------------------------------------------------
  Rota                       Objetivo                Conteúdo mínimo
  -------------------------- ----------------------- -----------------------
  `/`                        Apresentar identidade e Hero, manifesto,
                             direcionar a exploração competências, projetos
                                                     em destaque, áreas do
                                                     laboratório e contato

  `/tools-lab`               Demonstrar engenharia   Tools, scripts,
                             de ferramentas          automação, pipelines,
                                                     editor extensions e
                                                     estudos de caso

  `/art-workshop`            Demonstrar produção de  Modelagem, UVs,
                             arte técnica            texturas, materiais,
                                                     shaders e otimização de
                                                     assets

  `/animation-lab`           Demonstrar pipeline de  Rigging, skinning,
                             personagens             animações e integração
                                                     em engine

  `/game-systems`            Demonstrar sistemas de  Gameplay, arquitetura,
                             jogos                   geração procedural,
                                                     interação e protótipos

  `/experiments`             Registrar estudos       Provas de conceito,
                             exploratórios           benchmarks, protótipos
                                                     e experimentos

  `/software-shelf`          Catálogo geral de       Lista
                             softwares e projetos    pesquisável/filtrável
                                                     de projetos

  `/software-shelf/[slug]`   Apresentar um projeto   Estudo de caso completo
                             em detalhe              

  `/devlog`                  Publicar processo e     Lista de artigos e
                             aprendizados            notas técnicas

  `/devlog/[slug]`           Apresentar um artigo    Texto, imagens, código
                                                     e links relacionados

  `/about`                   Facilitar avaliação     Perfil, competências,
                             profissional            currículo, contatos e
                                                     links profissionais
  --------------------------------------------------------------------------

### 3.3 Regras de navegação

-   Todas as páginas devem compartilhar cabeçalho, navegação principal,
    rodapé e tokens visuais.
-   Deve ser possível chegar à página inicial a partir de qualquer rota.
-   Cards de projeto devem abrir a página de detalhe correspondente
    quando ela existir.
-   Links externos devem ser identificáveis e funcionar corretamente.
-   Se uma seção ainda não tiver conteúdo, ela pode exibir uma página de
    introdução com escopo e estado, sem apresentar conteúdo fictício.
-   Não mostrar links para rotas quebradas ou projetos não publicados.

------------------------------------------------------------------------

## 4. Requisitos da página inicial

A página inicial deve comunicar, em poucos segundos, quem é o
profissional, quais problemas resolve e onde estão as evidências de
trabalho.

### 4.1 Seções

1.  **Hero / identidade**
    -   Nome ou marca profissional.
    -   Título curto, por exemplo: "Where code meets craft."
    -   Resumo da proposta: ferramentas, arte técnica e sistemas para
        jogos.
    -   Ações para explorar o laboratório, ver projetos e entrar em
        contato.
    -   Visual representativo do ambiente de criação ou de projetos
        reais.
2.  **Manifesto**
    -   Texto breve sobre a conexão entre código, arte e ferramentas.
    -   Abordagem de trabalho e interesses profissionais.
3.  **Projetos em destaque**
    -   Seleção editorial de projetos publicados.
    -   Cards com imagem, nome, resumo, área e tecnologias principais.
    -   Destaque apenas para trabalhos com conteúdo suficiente para
        sustentar a apresentação.
4.  **Explore the Lab**
    -   Acesso às áreas do laboratório.
    -   Descrição breve de cada área.
5.  **Currently in the Lab**
    -   Opcional na primeira versão.
    -   Exibe um projeto em andamento, estado atual e próximo marco.
    -   Não revelar material confidencial de projetos de terceiros.
6.  **Contato**
    -   Links para currículo, GitHub, LinkedIn, e-mail ou outros canais
        profissionais definidos pelo responsável.

### 4.2 Requisitos de conteúdo

-   O texto deve ser conciso e profissional.
-   A identidade Cozy Developer não deve ocultar as competências
    técnicas.
-   Os projetos em destaque devem ser selecionados a partir da fonte
    única de dados, com um campo editorial de destaque ou equivalente.
-   Imagens demonstrativas devem ser substituídas por capturas reais
    antes da publicação definitiva.

------------------------------------------------------------------------

## 5. Modelo de conteúdo dos projetos

O site deve manter um registro central para cada projeto. As páginas e
listagens devem consumir esses registros, em vez de manter versões
independentes do mesmo conteúdo.

### 5.1 Campos recomendados

  ----------------------------------------------------------------------------
  Campo                   Obrigatório             Descrição
  ----------------------- ----------------------- ----------------------------
  `id`                    Sim                     Identificador estável do
                                                  projeto

  `title`                 Sim                     Nome público

  `slug`                  Sim                     Identificador legível usado
                                                  na URL

  `summary`               Sim                     Resumo curto para cards e
                                                  listagens

  `description`           Sim                     Contexto e objetivo do
                                                  projeto

  `projectType`           Sim                     Ex.: software, ferramenta,
                                                  asset, shader, jogo,
                                                  experimento

  `areas`                 Sim                     Uma ou mais áreas do
                                                  laboratório

  `technologies`          Recomendado             Tecnologias realmente
                                                  utilizadas

  `status`                Sim                     Estado de
                                                  desenvolvimento/publicação

  `cover`                 Recomendado             Caminho ou URL da imagem de
                                                  capa

  `gallery`               Não                     Imagens adicionais

  `videoDemo`             Não                     Vídeo demonstrativo

  `problem`               Recomendado             Problema que motivou o
                                                  trabalho

  `solution`              Recomendado             Abordagem adotada

  `contributions`         Recomendado             Responsabilidades
                                                  individuais

  `technicalDetails`      Não                     Arquitetura, algoritmos,
                                                  decisões e limitações

  `results`               Não                     Resultados observados e
                                                  métricas verificáveis

  `repositoryUrl`         Não                     Repositório público

  `buildUrl`              Não                     Demonstração ou build
                                                  disponível

  `documentationUrl`      Não                     Documentação complementar

  `startDate`             Não                     Data de início

  `endDate`               Não                     Data de conclusão, quando
                                                  aplicável

  `featured`              Sim                     Define se pode aparecer em
                                                  destaque

  `visibility`            Sim                     Define se o conteúdo pode
                                                  ser publicado

  `relatedPosts`          Não                     Artigos do devlog
                                                  relacionados
  ----------------------------------------------------------------------------

Os nomes são uma proposta de contrato conceitual. A nomenclatura final
deve seguir as convenções do repositório existente.

### 5.2 Estados recomendados

Separar o estado de desenvolvimento da visibilidade pública quando a
implementação exigir essa distinção.

**Estado de desenvolvimento (`status`):** - `planned` - `in-progress` -
`prototype` - `completed` - `archived`

**Visibilidade (`visibility`):** - `draft` - `public` - `private`

Regras:

-   Apenas registros com visibilidade pública podem aparecer para
    visitantes.
-   Um projeto em andamento pode ser público se o responsável autorizar
    a divulgação.
-   `featured` não deve permitir que um registro privado seja publicado
    por engano.
-   Projetos arquivados podem continuar acessíveis se isso for
    intencional e estiver documentado.

### 5.3 Relação entre projeto e áreas

Um projeto pode pertencer a várias áreas. Por exemplo, um gerador
procedural pode aparecer em `Tools Lab` e `Software Shelf`.

-   Armazenar o projeto uma única vez.
-   Usar referências por identificador ou slug.
-   Filtrar e apresentar os mesmos dados em diferentes páginas.
-   Evitar cópias manuais de títulos, imagens, tecnologias ou
    descrições.
-   Permitir que cada página de área apresente uma introdução editorial
    própria.

### 5.4 Validação dos dados

Validar, conforme os recursos da stack:

-   Unicidade do `id` e do `slug`.
-   Campos obrigatórios preenchidos.
-   `areas` com valores válidos.
-   `status` e `visibility` restritos aos valores aceitos.
-   URLs válidas quando preenchidas.
-   Caminhos de imagens existentes.
-   Ausência de dados confidenciais em conteúdo público.
-   Coerência entre `featured`, `visibility` e o estado de publicação.

------------------------------------------------------------------------

## 6. Páginas de detalhe e estudos de caso

Toda página de projeto deve permitir compreender o trabalho sem obrigar
o visitante a consultar o código-fonte.

### 6.1 Estrutura recomendada

1.  Título, resumo, áreas e tecnologias.
2.  Capa ou demonstração principal.
3.  Contexto e problema.
4.  Objetivo e restrições.
5.  Solução desenvolvida.
6.  Responsabilidades e contribuição individual.
7.  Breakdown técnico.
8.  Resultados e limitações.
9.  Galeria, vídeo ou demonstração.
10. Links para repositório, build e documentação.
11. Projetos ou artigos relacionados.

### 6.2 Regras de evidência

-   Não inventar métricas de produtividade, desempenho ou qualidade.
-   Se não houver medição, descrever o resultado qualitativamente e
    identificar isso como observação.
-   Diferenciar claramente protótipo, ferramenta funcional e produto
    final.
-   Em trabalhos colaborativos, informar o papel individual sem
    reivindicar o trabalho de toda a equipe.
-   Não publicar código, imagens, builds ou documentos sem autorização.
-   Não expor segredos, tokens, chaves, dados pessoais ou conteúdo sob
    NDA.

------------------------------------------------------------------------

## 7. Direção visual: Cozy Developer

A interface deve combinar acolhimento, personalidade indie e
legibilidade técnica.

### 7.1 Paleta e tipografia

-   **Fundo:** grafite escuro ou neutro equivalente.
-   **Cor principal:** verde associado à tecnologia e à criação.
-   **Destaque:** laranja para ações, indicadores e ênfases.
-   **Elementos de apoio:** tons de madeira, ilustrações e detalhes
    acolhedores.
-   **Títulos:** Fredoka, se disponível e adequada à legibilidade.
-   **Código e dados técnicos:** fonte monoespaçada.
-   **Texto corrido:** fonte legível, com tamanho e espaçamento
    confortáveis.

As cores exatas devem ser definidas em tokens compartilhados, com
contraste suficiente em todos os estados.

### 7.2 Linguagem visual

-   Referências pontuais a pixel art, game development e cozy tech.
-   Cards de projeto com imagens reais e enquadramento consistente.
-   Uso moderado de bordas, superfícies e sombras.
-   Ícones com significado funcional.
-   Animações curtas e intencionais.
-   Hierarquia visual clara entre conteúdo, metadados e ações.

### 7.3 Regras para animação e microinterações

-   Não esconder conteúdo essencial atrás de hover.
-   Garantir alternativa para dispositivos touch.
-   Respeitar a preferência de redução de movimento do sistema
    operacional.
-   Evitar vídeo ou animação automática com som.
-   Não utilizar efeitos que prejudiquem leitura, navegação ou
    desempenho.
-   Aplicar estados visuais claros para hover, foco, ativo, carregamento
    e erro.

### 7.4 Acessibilidade

-   HTML semântico e hierarquia correta de títulos.
-   Navegação completa por teclado.
-   Indicador de foco visível.
-   Contraste adequado.
-   Texto alternativo para imagens informativas.
-   Legendas ou transcrição quando necessárias para vídeos.
-   Links com finalidade compreensível fora do contexto visual.
-   Formulários com rótulos e mensagens de erro claras.

------------------------------------------------------------------------

## 8. Arquitetura de componentes

Os nomes abaixo são conceituais e devem ser adaptados aos padrões do
projeto existente.

### 8.1 Componentes compartilhados

-   `SiteHeader`
-   `PrimaryNavigation`
-   `SiteFooter`
-   `PageShell`
-   `HeroSection`
-   `SectionHeading`
-   `ProjectCard`
-   `ProjectGrid`
-   `ProjectFilters`
-   `ProjectMetadata`
-   `MediaGallery`
-   `VideoDemo`
-   `TechnicalBreakdown`
-   `RelatedProjects`
-   `ContactLinks`
-   `EmptyState`

### 8.2 Responsabilidades

-   `ProjectCard`: apresentar resumo e direcionar para o detalhe.
-   `ProjectGrid`: organizar cards de forma responsiva.
-   `ProjectFilters`: filtrar projetos por área, tipo ou tecnologia,
    quando necessário.
-   `ProjectMetadata`: exibir status, tecnologias e categorias.
-   `MediaGallery`: apresentar mídia com alternativas acessíveis.
-   `TechnicalBreakdown`: estruturar explicações técnicas.
-   `EmptyState`: explicar o propósito da área quando ainda não houver
    projetos públicos.
-   `PageShell`: manter consistência de espaçamento e estrutura geral.

### 8.3 Regras de reutilização

-   Componentes compartilhados não devem conter conteúdo específico de
    um único projeto.
-   Evitar componentes excessivamente genéricos sem necessidade real.
-   Manter o estilo visual em tokens, variáveis ou mecanismo equivalente
    da stack.
-   Não duplicar lógica de filtragem e seleção de projetos em várias
    páginas.
-   Manter componentes de apresentação separados das fontes de conteúdo
    quando isso fizer sentido na arquitetura.

------------------------------------------------------------------------

## 9. Estratégia de dados e publicação

### 9.1 Primeira versão

Preferir conteúdo estático estruturado em arquivos JSON, TypeScript,
Markdown ou mecanismo equivalente já adotado pelo projeto, desde que
isso seja compatível com a stack atual.

Benefícios esperados:

-   Baixa complexidade operacional.
-   Versionamento de conteúdo junto ao código.
-   Revisão de mudanças por Git.
-   Facilidade para publicar novos projetos.
-   Ausência de dependência de banco de dados para o catálogo inicial.

### 9.2 Evolução futura

Considerar CMS ou painel administrativo somente quando houver
necessidade concreta, como:

-   Alto volume de projetos e artigos.
-   Publicação frequente por pessoas não técnicas.
-   Fluxo editorial com revisão e aprovação.
-   Necessidade de edição sem novo deploy.
-   Requisitos de pesquisa ou integração que justifiquem uma fonte de
    dados dinâmica.

### 9.3 Critério de decisão

A escolha de armazenamento e renderização deve considerar a stack atual,
o volume esperado, o ambiente de hospedagem e a frequência de
publicação. Não introduzir banco de dados ou serviço externo apenas por
antecipação.

------------------------------------------------------------------------

## 10. Requisitos não funcionais

### 10.1 Desempenho

-   Otimizar imagens e servir tamanhos adequados ao dispositivo.
-   Usar carregamento tardio para mídia fora da primeira área visível,
    quando apropriado.
-   Evitar dependências pesadas sem benefício claro.
-   Carregar vídeos sob demanda quando possível.
-   Evitar mudanças de layout causadas por mídia sem dimensões
    reservadas.
-   Medir desempenho com ferramentas adequadas antes de definir metas
    numéricas.

### 10.2 Responsividade

-   Garantir funcionamento em dispositivos móveis, tablets e desktops.
-   Permitir leitura e navegação sem zoom horizontal.
-   Ajustar grids, galerias, navegação e mídia conforme o espaço
    disponível.
-   Não depender de hover para ações essenciais.

### 10.3 SEO e compartilhamento

-   Definir título e descrição por página.
-   Usar URLs legíveis e estáveis.
-   Configurar metadados de compartilhamento quando suportados pela
    stack.
-   Definir imagem de compartilhamento para a página inicial e, quando
    apropriado, para projetos.
-   Gerar sitemap e regras de indexação se compatíveis com o ambiente de
    publicação.
-   Evitar indexar rascunhos ou conteúdo privado.

### 10.4 Confiabilidade

-   Links internos sem destinos inexistentes.
-   Estados de erro e conteúdo ausente tratados de forma explícita.
-   Validação automática dos registros, quando viável.
-   Build de produção sem erros.
-   Verificação de links externos e recursos de mídia antes de publicar.

### 10.5 Segurança e privacidade

-   Não incluir segredos no código do frontend.
-   Não publicar material confidencial ou de terceiros sem permissão.
-   Minimizar coleta de dados pessoais.
-   Se houver formulário de contato, validar e proteger a submissão
    conforme a solução escolhida.
-   Revisar dependências e configurações de deploy.

------------------------------------------------------------------------

## 11. Fases de implementação

A sequência abaixo é uma proposta de priorização. O planejamento real
deve considerar o estado do repositório, a stack, o conteúdo disponível
e as dependências existentes.

### Fase 0 --- Auditoria do site atual

**Objetivo:** preservar o que funciona e identificar o trabalho
necessário.

Tarefas: - Identificar framework, linguagem, sistema de rotas e processo
de build. - Mapear páginas, componentes, estilos, fontes de dados e
integrações existentes. - Verificar responsividade, acessibilidade,
desempenho e links. - Identificar componentes reutilizáveis e dívidas
técnicas relevantes. - Registrar o que deve ser preservado, adaptado,
removido ou criado.

**Saída:** diagnóstico técnico e plano de mudanças incremental.

### Fase 1 --- Fundação visual e navegação

**Objetivo:** estabelecer a identidade e a estrutura comum.

Tarefas: - Definir tokens de cor, tipografia, espaçamento e
superfícies. - Consolidar cabeçalho, navegação, rodapé e estrutura de
página. - Implementar a página inicial. - Criar as páginas-base de
`Tools Lab` e `Art Workshop`. - Garantir responsividade e acessibilidade
básicas.

**Critério de conclusão:** o site comunica o posicionamento profissional
e oferece navegação consistente.

### Fase 2 --- Modelo de projetos e catálogo

**Objetivo:** permitir crescimento de conteúdo sem duplicação.

Tarefas: - Definir o contrato de dados dos projetos. - Implementar
validação dos registros. - Criar cards, grids, metadados e filtros
necessários. - Implementar `Software Shelf`. - Implementar a página
dinâmica de detalhe. - Garantir que um projeto possa aparecer em
múltiplas áreas.

**Critério de conclusão:** cadastrar um projeto novo não exige criar uma
página manualmente do zero.

### Fase 3 --- Estudos de caso e evidências

**Objetivo:** demonstrar competências com profundidade.

Tarefas: - Publicar os primeiros projetos com conteúdo real. - Criar
estrutura de breakdown técnico. - Integrar imagens, vídeos, código e
documentação. - Informar contribuições individuais. - Validar links e
permissões de publicação.

**Critério de conclusão:** cada projeto publicado explica o problema, a
solução e as evidências do trabalho.

### Fase 4 --- Expansão do laboratório

**Objetivo:** ampliar o catálogo conforme houver material.

Tarefas: - Adicionar `Animation Lab`, `Game Systems` e `Experiments`. -
Implementar `Devlog` e páginas individuais de artigos. - Relacionar
projetos e artigos. - Melhorar filtros e descoberta de conteúdo se o
volume justificar.

**Critério de conclusão:** novas áreas podem ser ativadas sem duplicar
estrutura ou conteúdo.

### Fase 5 --- Refinamento e otimização

**Objetivo:** elevar a qualidade da experiência.

Tarefas: - Revisar desempenho, acessibilidade e SEO. - Refinar
microinterações e previews. - Testar em navegadores e dispositivos
relevantes. - Automatizar validações de conteúdo e links quando
viável. - Documentar fluxo de publicação e manutenção.

**Critério de conclusão:** o site está estável, acessível, rápido e
simples de atualizar.

------------------------------------------------------------------------

## 12. Critérios de aceite

### Página inicial

-   [ ] O posicionamento Cozy Developer é compreensível rapidamente.
-   [ ] As principais áreas do laboratório estão visíveis.
-   [ ] Projetos em destaque vêm da fonte central de dados.
-   [ ] Links de navegação e contato funcionam.
-   [ ] A página é responsiva.

### Catálogo e projetos

-   [ ] Cada projeto possui identificador e slug únicos.
-   [ ] Um projeto pode pertencer a várias áreas.
-   [ ] O catálogo respeita a visibilidade pública.
-   [ ] Cada card direciona para o detalhe correto.
-   [ ] A página de detalhe apresenta contexto, solução e evidências.
-   [ ] Links externos e mídia são validados antes da publicação.

### Identidade e experiência

-   [ ] Tokens visuais são compartilhados.
-   [ ] Contraste e foco por teclado são adequados.
-   [ ] Animações não bloqueiam tarefas essenciais.
-   [ ] A interface funciona sem depender de hover.
-   [ ] Mídia não causa problemas relevantes de layout ou carregamento.

### Engenharia

-   [ ] O processo de build funciona.
-   [ ] Não há erros críticos no console.
-   [ ] Conteúdo inválido é identificado.
-   [ ] Não há segredos ou material confidencial publicado.
-   [ ] O processo de adicionar um projeto está documentado.

------------------------------------------------------------------------

## 13. Riscos e decisões pendentes

Antes da implementação, a engenharia deve confirmar:

1.  Qual é a stack e a estrutura atual do site?
2.  O site já possui rotas e componentes reutilizáveis?
3.  Onde o conteúdo está armazenado atualmente?
4.  Qual ambiente de hospedagem e deploy é utilizado?
5.  Há projetos reais prontos para publicação e quais possuem
    restrições?
6.  Quais links profissionais e canais de contato serão divulgados?
7.  A identidade visual atual deve ser preservada parcialmente ou
    substituída?
8.  Há necessidade concreta de CMS ou conteúdo estático atende à
    primeira fase?

Riscos a monitorar:

-   Construir páginas demais antes de ter conteúdo de qualidade.
-   Investir em animações antes de estabelecer navegação e catálogo.
-   Duplicar dados dos projetos entre diferentes áreas.
-   Publicar imagens de referência como se fossem trabalhos próprios.
-   Introduzir infraestrutura desnecessária na primeira versão.
-   Apresentar projetos colaborativos sem delimitar a contribuição
    individual.

------------------------------------------------------------------------

## 14. Definição de pronto para um novo projeto

Um novo projeto pode ser considerado pronto para publicação quando:

-   [ ] O registro contém os campos obrigatórios.
-   [ ] O slug é único e a rota resolve corretamente.
-   [ ] A visibilidade foi definida explicitamente.
-   [ ] O resumo comunica o propósito.
-   [ ] A capa e as mídias têm qualidade e autorização de uso.
-   [ ] A contribuição individual está descrita.
-   [ ] As afirmações técnicas são verificáveis.
-   [ ] Os links de repositório, build ou documentação foram testados.
-   [ ] O conteúdo foi revisado para remover segredos e informações
    confidenciais.
-   [ ] A página funciona em telas pequenas e com navegação por teclado.

------------------------------------------------------------------------

## 15. Resultado esperado

Ao final das fases essenciais, o site deve funcionar como:

-   Uma apresentação profissional de identidade e competências.
-   Um laboratório organizado por áreas de atuação.
-   Um catálogo central de softwares, ferramentas, assets e
    experimentos.
-   Uma coleção de estudos de caso com evidências técnicas.
-   Uma plataforma incremental, simples de manter e preparada para
    crescer.

A arquitetura deve permitir que o responsável concentre seu esforço em
produzir bons projetos. O site deve facilitar sua documentação,
organização e apresentação --- não se tornar um produto complexo que
consome mais tempo do que o próprio portfólio.

**Diretriz final para a engenharia:** antes de alterar a implementação,
auditar o repositório atual e produzir um plano de migração que preserve
funcionalidades válidas, respeite as convenções existentes e implemente
a arquitetura por etapas verificáveis.
