/**
 * Cozy Developer Laboratory — Template de Página de Ferramenta (Tools Lab)
 *
 * Template único e replicável. Todas as páginas em `tools/<slug>.html` são
 * geradas a partir deste arquivo, garantindo estrutura idêntica entre projetos.
 *
 * Contrato de internacionalização (dual):
 *   - `data-i18n="chave"`      → rótulos GLOBAIS do site (dictionário js/i18n.js)
 *   - `data-ti="caminho"`      → conteúdo ESPECÍFICO da ferramenta (JSON embutido)
 *   - `data-ti-html="caminho"` → idem, interpretando HTML
 *   - `data-ti-list="caminho"` → lista de itens renderizada como <li>
 *   - `data-ti-alt="caminho"`  → define o atributo `alt` do elemento
 *
 * Caminhos são dot-paths sobre o registro canônico: "workflowContext.painPoint".
 */

/* ------------------------------------------------------------------ */
/* Utilitários de escaping e resolução                                */
/* ------------------------------------------------------------------ */

const HTML_ESCAPES = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

/**
 * Escapa texto para interpolação segura em HTML.
 * @param {*} value
 * @returns {string}
 */
function esc(value) {
  if (value === null || value === undefined) return '';
  return String(value).replace(/[&<>"']/g, (ch) => HTML_ESCAPES[ch]);
}

/**
 * Resolve um valor localizado para o idioma ativo.
 * Aceita string simples ou objeto {pt, en}.
 * @param {*} value
 * @param {string} lang
 * @returns {string}
 */
function loc(value, lang) {
  if (value === null || value === undefined) return '';
  if (typeof value === 'string') return value;
  if (typeof value === 'object') {
    if (value[lang]) return value[lang];
    if (value.pt) return value.pt;
    if (value.en) return value.en;
  }
  return '';
}

/**
 * Converte um caminho relativo à raiz do site em caminho relativo à página.
 * A página vive em `tools/`, portanto todos os assets precisam do prefixo `../`.
 * @param {string} path
 * @returns {string}
 */
function toPageRelative(path) {
  if (!path) return '';
  if (/^(https?:)?\/\//i.test(path) || path.startsWith('data:')) return path;
  if (path.startsWith('/')) return `..${path}`;
  if (path.startsWith('../') || path.startsWith('./')) return path;
  return `../${path}`;
}

/* ------------------------------------------------------------------ */
/* Catálogos de rótulos                                               */
/* ------------------------------------------------------------------ */

const STATUS_META = {
  'completed':   { icon: '✅', i18nKey: 'statusCompleted' },
  'in-progress': { icon: '⏳', i18nKey: 'statusInProgress' },
  'prototype':   { icon: '🧪', i18nKey: 'statusPrototype' },
  'archived':    { icon: '📦', i18nKey: 'statusArchived' }
};

const COLLAB_META = {
  'portfolio':  { icon: '📁', i18nKey: 'collabPortfolio' },
  'pessoal':    { icon: '📁', i18nKey: 'collabPersonal' },
  'parceria':   { icon: '🤝', i18nKey: 'collabPartnership' },
  'comercial':  { icon: '💼', i18nKey: 'collabCommercial' },
  'estudo':     { icon: '📖', i18nKey: 'collabStudy' }
};

const CLASSIFICATION_I18N = {
  'editor-extension':     'toolClassEditorExtension',
  'pipeline-automation':  'toolClassPipelineAutomation',
  'procedural-generator': 'toolClassProceduralGenerator',
  'debug-profiling':      'toolClassDebugProfiling',
  'dcc-integration':      'toolClassDccIntegration',
  'cli-utility':          'toolClassCliUtility'
};

/**
 * Rótulos PT usados como fallback estático no HTML gerado.
 * O runtime i18n substitui o texto no carregamento; o fallback garante
 * que a página sem JavaScript continue legível e indexável.
 */
const PT_FALLBACKS = {
  collabPortfolio: 'Portfólio',
  collabPersonal: 'Portfólio',
  collabPartnership: 'Parceria',
  collabCommercial: 'Comercial',
  collabStudy: 'Estudo',
  toolClassEditorExtension: 'Extensão de Editor',
  toolClassPipelineAutomation: 'Automação de Pipeline',
  toolClassProceduralGenerator: 'Gerador Procedural',
  toolClassDebugProfiling: 'Debug & Profiling',
  toolClassDccIntegration: 'Integração DCC',
  toolClassCliUtility: 'Utilitário CLI'
};

/* ------------------------------------------------------------------ */
/* Blocos da página                                                   */
/* ------------------------------------------------------------------ */

/**
 * Cabeçalho: breadcrumb, título, subtítulo e metadados.
 */
function renderHeader(tool, lang) {
  const status = STATUS_META[tool.status] || STATUS_META['in-progress'];
  const collab = COLLAB_META[tool.collaborationType] || COLLAB_META['portfolio'];
  const title = loc(tool.title, lang);
  const subtitle = loc(tool.subtitle, lang);

  const techTags = (tool.technologies || [])
    .map((tech) => `<span class="tech-tag">${esc(tech)}</span>`)
    .join('');

  const host = tool.host || {};
  const hostBits = [host.name, host.version, host.language].filter(Boolean);
  const hostBadge = hostBits.length
    ? `<span class="tool-host-badge">🧩 ${esc(hostBits.join(' · '))}</span>`
    : '';

  const partnerBadge = tool.partner
    ? `<span class="collab-meta-badge collab-meta-badge--${esc(tool.collaborationType || 'portfolio')}">
         🤝 <span data-i18n="collabPartnerPrefix">Em parceria com</span> <strong>${esc(tool.partner)}</strong>
       </span>`
    : `<span class="collab-meta-badge collab-meta-badge--${esc(tool.collaborationType || 'portfolio')}">
         ${collab.icon} <span data-i18n="${collab.i18nKey}">${esc(PT_FALLBACKS[collab.i18nKey] || collab.i18nKey)}</span>
       </span>`;

  return `
    <!-- 0. Breadcrumb -->
    <nav class="tool-breadcrumb" aria-label="Breadcrumb">
      <a href="../index.html" data-i18n="navHome">Início</a>
      <span class="tool-breadcrumb-sep" aria-hidden="true">/</span>
      <a href="../tools-lab.html" data-i18n="navTools">Tools Lab</a>
      <span class="tool-breadcrumb-sep" aria-hidden="true">/</span>
      <span class="tool-breadcrumb-current" aria-current="page">${esc(title)}</span>
    </nav>

    <!-- 1. Cabeçalho da Ferramenta -->
    <header class="case-study-header tool-page-header">
      <div class="tool-page-title-row">
        <span class="tool-page-icon" aria-hidden="true">${esc(tool.icon || '🔧')}</span>
        <h1 class="case-study-title" data-ti="title">${esc(title)}</h1>
      </div>

      ${subtitle ? `<p class="tool-page-subtitle" data-ti="subtitle">${esc(subtitle)}</p>` : ''}

      <div class="case-study-meta">
        <span class="project-status-badge status-${esc(tool.status)}">
          <span aria-hidden="true">${status.icon}</span>
          <span data-i18n="${status.i18nKey}">${esc(status.i18nKey)}</span>
        </span>
        ${partnerBadge}
        <span class="tool-badge" data-i18n="${CLASSIFICATION_I18N[tool.toolClassification] || 'toolClassEditorExtension'}">
          ${esc(PT_FALLBACKS[CLASSIFICATION_I18N[tool.toolClassification]] || CLASSIFICATION_I18N[tool.toolClassification] || 'toolClassEditorExtension')}
        </span>
        ${hostBadge}
        ${techTags}
      </div>
    </header>`;
}

/**
 * Mídia principal (Visual First) — capa da ferramenta.
 */
function renderHero(tool, lang) {
  if (!tool.cover) return '';
  return `
    <!-- 2. Capa / Demonstração (Visual First) -->
    <figure class="case-study-cover tool-page-hero">
      <img src="${esc(toPageRelative(tool.cover))}" alt="${esc(tool.title && (tool.title.pt || tool.title))}" loading="eager">
    </figure>`;
}

/**
 * Pitch: resumo, problema e solução.
 */
function renderPitch(tool) {
  return `
    <!-- 3. Resumo, Problema e Solução -->
    <section class="case-study-section tool-section-pitch">
      <h2 class="case-study-section-title">💡 <span data-i18n="caseStudyProblem">O Desafio &amp; Contexto</span></h2>
      <div class="case-study-section-content">
        <p class="tool-lead" data-ti="summary"></p>

        <div class="tool-callout tool-callout--problem">
          <strong class="tool-callout-label" data-i18n="toolsPainPoint">Gargalo Operacional</strong>
          <p data-ti="problem"></p>
        </div>

        <div class="tool-callout tool-callout--solution">
          <strong class="tool-callout-label" data-i18n="caseStudySolution">Abordagem Técnica &amp; Solução</strong>
          <p data-ti="solution"></p>
        </div>
      </div>
    </section>`;
}

/**
 * Contexto de workflow, público-alvo e métricas de impacto.
 */
function renderWorkflow(tool) {
  const wc = tool.workflowContext || {};
  const metrics = wc.metrics || [];

  const metricCards = [
    `<div class="tool-stat-card">
       <span class="tool-stat-label" data-i18n="toolsTargetAudience">Público-Alvo</span>
       <p class="tool-stat-value tool-stat-value--text" data-ti="workflowContext.targetAudience"></p>
     </div>`,
    wc.timeSavedMetric
      ? `<div class="tool-stat-card tool-stat-card--accent">
           <span class="tool-stat-label" data-i18n="toolsTimeSaved">Impacto &amp; Tempo Economizado</span>
           <p class="tool-stat-value" data-ti="workflowContext.timeSavedMetric">${esc(wc.timeSavedMetric)}</p>
         </div>`
      : ''
  ].concat(
    metrics.map(
      (m, i) => `<div class="tool-stat-card">
           <span class="tool-stat-label" data-ti="workflowContext.metrics.${i}.label"></span>
           <p class="tool-stat-value">${esc(m.value)}</p>
           ${m.hint ? `<p class="tool-stat-hint" data-ti="workflowContext.metrics.${i}.hint"></p>` : ''}
         </div>`
    )
  );

  return `
    <!-- 4. Contexto de Workflow &amp; Impacto -->
    <section class="case-study-section tool-section-workflow">
      <h2 class="case-study-section-title">⏱️ <span data-i18n="toolsWorkflowTitle">Contexto de Workflow &amp; Produtividade</span></h2>
      <div class="case-study-section-content">
        <div class="tool-stat-grid">
          ${metricCards.filter(Boolean).join('\n          ')}
        </div>
      </div>
    </section>`;
}

/**
 * Recursos principais da ferramenta.
 */
function renderFeatures(tool) {
  const features = tool.features || [];
  if (!features.length) return '';

  const cards = features
    .map(
      (f, i) => `<article class="tool-feature-card">
          <span class="tool-feature-icon" aria-hidden="true">${esc(f.icon || '✨')}</span>
          <h3 class="tool-feature-title" data-ti="features.${i}.title"></h3>
          <p class="tool-feature-body" data-ti="features.${i}.body"></p>
        </article>`
    )
    .join('\n          ');

  return `
    <!-- 5. Recursos Principais -->
    <section class="case-study-section tool-section-features">
      <h2 class="case-study-section-title">✨ <span data-i18n="toolFeaturesTitle">Recursos Principais</span></h2>
      <div class="case-study-section-content">
        <div class="tool-feature-grid">
          ${cards}
        </div>
      </div>
    </section>`;
}

/**
 * Pipeline: entradas → processamento → saídas.
 */
function renderPipeline(tool) {
  const flow = tool.pipelineFlow || {};
  const inputs = flow.inputs || [];
  const outputs = flow.outputs || [];

  return `
    <!-- 6. Pipeline (I/O) -->
    <section class="case-study-section tool-section-pipeline">
      <h2 class="case-study-section-title">🔄 <span data-i18n="toolsPipelineTitle">Fluxo do Pipeline (I/O)</span></h2>
      <div class="case-study-section-content">
        <div class="tool-pipeline">
          <div class="tool-pipeline-col tool-pipeline-col--in">
            <strong class="tool-pipeline-label" data-i18n="toolsInputs">Entradas (Inputs)</strong>
            <ul class="tool-pipeline-list" data-ti-list="pipelineFlow.inputs"></ul>
          </div>

          <div class="tool-pipeline-arrow" aria-hidden="true">→</div>

          <div class="tool-pipeline-col tool-pipeline-col--proc">
            <strong class="tool-pipeline-label" data-i18n="toolsProcessing">Lógica de Processamento</strong>
            <p class="tool-pipeline-logic" data-ti="pipelineFlow.processingLogic"></p>
          </div>

          <div class="tool-pipeline-arrow" aria-hidden="true">→</div>

          <div class="tool-pipeline-col tool-pipeline-col--out">
            <strong class="tool-pipeline-label" data-i18n="toolsOutputs">Saídas (Outputs)</strong>
            <ul class="tool-pipeline-list" data-ti-list="pipelineFlow.outputs"></ul>
          </div>
        </div>
      </div>
    </section>`;
}

/**
 * Galeria / capturas de interface (carrossel + lightbox).
 */
function renderGallery(tool) {
  const gallery = tool.gallery || [];
  if (!gallery.length) return '';

  const first = gallery[0];

  return `
    <!-- 7. Galeria / Capturas de Interface -->
    <section class="case-study-section project-gallery-section tool-section-gallery" aria-roledescription="carousel" aria-label="Project Gallery">
      <div class="tool-section-heading">
        <h2 class="case-study-section-title">🖼️ <span data-i18n="projectGalleryTitle">Galeria do Projeto</span></h2>
        <span class="tool-section-hint" data-i18n="projectGalleryDesc">Registros visuais, interfaces e capturas de desenvolvimento.</span>
      </div>

      <div class="project-carousel" id="project-carousel" tabindex="0" role="region" aria-label="Project Gallery">
        <div class="carousel-stage" id="carousel-stage" role="button" tabindex="0">
          <span class="carousel-top-badge" id="carousel-counter"></span>
          <span class="carousel-zoom-hint" aria-hidden="true">🔍 <span data-i18n="viewImageFull">Clique para ampliar a imagem</span></span>
          <button type="button" class="carousel-nav-btn carousel-nav-btn--prev" id="carousel-prev-btn" aria-label="Anterior">‹</button>
          <img src="${esc(toPageRelative(first.src))}" alt="${esc(first.alt || '')}" class="carousel-slide-img" id="carousel-main-img">
          <button type="button" class="carousel-nav-btn carousel-nav-btn--next" id="carousel-next-btn" aria-label="Próxima">›</button>
        </div>

        <div class="carousel-caption-bar">
          <div class="carousel-caption-text" id="carousel-caption"></div>
        </div>

        <div class="carousel-dock">
          <div class="carousel-dots" id="carousel-dots"></div>
          <div class="carousel-thumbs" id="carousel-thumbs"></div>
        </div>
      </div>
    </section>`;
}

/**
 * Arquitetura técnica: decisões, estruturas de dados e integrações.
 */
function renderArchitecture(tool) {
  const arch = tool.technicalArchitecture || {};
  const decisions = arch.designDecisions || [];
  const structures = arch.dataStructures || [];
  const integrations = arch.editorIntegrations || [];

  const decisionCards = decisions
    .map(
      (d, i) => `<article class="tool-decision-card">
          <h3 class="tool-decision-title" data-ti="technicalArchitecture.designDecisions.${i}.title"></h3>
          <p class="tool-decision-body" data-ti="technicalArchitecture.designDecisions.${i}.body"></p>
        </article>`
    )
    .join('\n          ');

  return `
    <!-- 8. Arquitetura Técnica -->
    <section class="case-study-section tool-section-architecture">
      <h2 class="case-study-section-title">🔧 <span data-i18n="toolsArchitectureTitle">Arquitetura Técnica &amp; Ergonomia</span></h2>
      <div class="case-study-section-content">
        ${structures.length ? `
        <div class="tool-tag-group">
          <strong class="tool-tag-group-label" data-i18n="toolsDataStructures">Estruturas de Dados</strong>
          <div class="tool-tag-list">${structures.map((s) => `<span class="tech-tag">${esc(s)}</span>`).join('')}</div>
        </div>` : ''}

        ${integrations.length ? `
        <div class="tool-tag-group">
          <strong class="tool-tag-group-label" data-i18n="toolsIntegrations">Integrações com Engine / Editor</strong>
          <div class="tool-tag-list">${integrations.map((i) => `<span class="tech-tag">${esc(i)}</span>`).join('')}</div>
        </div>` : ''}

        ${decisions.length ? `
        <div class="tool-decisions">
          <h3 class="tool-subsection-title" data-i18n="toolArchitectureDecisionsTitle">Decisões Técnicas</h3>
          <div class="tool-decision-grid">
          ${decisionCards}
          </div>
        </div>` : ''}
      </div>
    </section>`;
}

/**
 * Validação, testes e tratamento de erros.
 */
function renderValidation(tool) {
  const validation = tool.validation || {};
  const checks = validation.checks || [];

  const checkCards = checks
    .map(
      (c, i) => `<article class="tool-check-card">
          <h3 class="tool-check-title" data-ti="validation.checks.${i}.title"></h3>
          <p class="tool-check-body" data-ti="validation.checks.${i}.body"></p>
        </article>`
    )
    .join('\n          ');

  return `
    <!-- 9. Validação &amp; Testes -->
    <section class="case-study-section tool-section-validation">
      <h2 class="case-study-section-title">🛡️ <span data-i18n="toolValidationTitle">Validação, Testes &amp; Tratamento de Erros</span></h2>
      <div class="case-study-section-content">
        ${validation.testCoverage ? `
        <div class="tool-stat-card tool-stat-card--accent tool-stat-card--inline">
          <span class="tool-stat-label" data-i18n="toolTestCoverage">Cobertura de Testes</span>
          <p class="tool-stat-value">${esc(validation.testCoverage)}</p>
        </div>` : ''}

        <div class="tool-callout tool-callout--safety">
          <strong class="tool-callout-label" data-i18n="toolsSafety">Validação &amp; Não-Destrutividade</strong>
          <p data-ti="validation.safetyFeatures"></p>
        </div>

        ${checks.length ? `
        <div class="tool-check-grid">
          ${checkCards}
        </div>` : ''}
      </div>
    </section>`;
}

/**
 * Resultados, limitações e próximos passos.
 */
function renderResults(tool) {
  const limitations = tool.limitations || [];
  const nextSteps = tool.nextSteps || [];

  return `
    <!-- 10. Resultados, Limitações e Próximos Passos -->
    <section class="case-study-section tool-section-results">
      <h2 class="case-study-section-title">📊 <span data-i18n="caseStudyResults">Resultados &amp; Limitações Observadas</span></h2>
      <div class="case-study-section-content">
        <p data-ti="results"></p>

        ${limitations.length || nextSteps.length ? `
        <div class="tool-lists">
          ${limitations.length ? `
          <div class="tool-list-block tool-list-block--limitations">
            <strong class="tool-list-title" data-i18n="toolLimitationsTitle">Limitações Conhecidas</strong>
            <ul class="tool-list" data-ti-list="limitations"></ul>
          </div>` : ''}
          ${nextSteps.length ? `
          <div class="tool-list-block tool-list-block--next">
            <strong class="tool-list-title" data-i18n="toolNextStepsTitle">Próximos Passos</strong>
            <ul class="tool-list" data-ti-list="nextSteps"></ul>
          </div>` : ''}
        </div>` : ''}
      </div>
    </section>`;
}

/**
 * Contribuição individual.
 */
function renderContributions(tool) {
  return `
    <!-- 11. Contribuição Individual -->
    <section class="case-study-section tool-section-contributions">
      <h2 class="case-study-section-title">👤 <span data-i18n="caseStudyContributions">Responsabilidades &amp; Contribuição Individual</span></h2>
      <div class="case-study-section-content">
        <p data-ti="contributions"></p>
      </div>
    </section>`;
}

/**
 * Links externos: repositório, build, documentação e demo.
 */
function renderActions(tool) {
  const links = tool.links || {};

  const buttons = [];
  if (links.repositoryUrl) {
    buttons.push(
      `<a href="${esc(links.repositoryUrl)}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
         <span aria-hidden="true">🐙</span> <span data-i18n="btnRepository">Repositório no GitHub</span>
       </a>`
    );
  }
  if (links.buildUrl) {
    buttons.push(
      `<a href="${esc(links.buildUrl)}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
         <span aria-hidden="true">🎮</span> <span data-i18n="btnBuild">Testar Demonstração / Build</span>
       </a>`
    );
  }
  if (links.documentationUrl) {
    buttons.push(
      `<a href="${esc(links.documentationUrl)}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
         <span aria-hidden="true">📘</span> <span data-i18n="btnDocumentation">Documentação</span>
       </a>`
    );
  }
  if (links.demoUrl) {
    buttons.push(
      `<a href="${esc(links.demoUrl)}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
         <span aria-hidden="true">▶️</span> <span data-i18n="btnDemo">Demonstração</span>
       </a>`
    );
  }
  buttons.push(
    `<a href="../tools-lab.html" class="btn btn-ghost"><span data-i18n="btnBackToArea">← Voltar</span></a>`
  );

  return `
    <!-- 12. Links & Recursos -->
    <div class="case-study-actions">
      ${buttons.join('\n      ')}
    </div>`;
}

/**
 * Markup do lightbox (modal de ampliação da galeria).
 */
function renderLightbox() {
  return `
    <!-- Lightbox Modal -->
    <div id="project-lightbox" class="lightbox-modal" role="dialog" aria-modal="true" aria-hidden="true" inert>
      <div class="lightbox-wrapper">
        <button type="button" class="lightbox-close-btn">
          <span aria-hidden="true">&times;</span>
          <span class="sr-only" data-i18n="lightboxClose">Fechar</span>
        </button>
        <div class="lightbox-stage">
          <button type="button" class="lightbox-nav-btn prev" aria-label="Anterior">&#8249;</button>
          <img id="lightbox-img" class="lightbox-image" src="" alt="">
          <button type="button" class="lightbox-nav-btn next" aria-label="Próxima">&#8250;</button>
        </div>
        <div class="lightbox-caption-bar">
          <div id="lightbox-caption" class="lightbox-caption-text"></div>
          <div id="lightbox-counter" class="lightbox-counter"></div>
        </div>
      </div>
    </div>`;
}

/* ------------------------------------------------------------------ */
/* Montagem da página                                                 */
/* ------------------------------------------------------------------ */

/**
 * Gera o HTML completo de uma página de ferramenta.
 * @param {Object} tool - Registro canônico da ferramenta
 * @param {Object} [options]
 * @param {string} [options.lang] - Idioma do conteúdo embutido (padrão: 'pt')
 * @param {string} [options.outputPath] - Caminho relativo à raiz do site
 * @returns {string} HTML completo
 */
function renderToolPage(tool, options = {}) {
  const lang = options.lang || 'pt';
  const title = loc(tool.title, lang);
  const subtitle = loc(tool.subtitle, lang);
  const summary = loc(tool.summary, lang);
  const accent = tool.accent || 'green';

  // Descrição SEO: até 160 caracteres, sem quebras de linha.
  const description = (summary || subtitle || title)
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 160);

  const outputPath = options.outputPath || `tools/${tool.slug}.html`;

  // JSON embutido: dados completos para re-renderização reativa de idioma.
  const embeddedData = JSON.stringify(tool).replace(/</g, '\\u003c');

  return `<!DOCTYPE html>
<html lang="${lang === 'pt' ? 'pt-BR' : 'en'}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${esc(description)}">
    <meta name="author" content="Germano Gomes">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Germano | Cozy Dev Lab">
    <meta property="og:title" content="${esc(title)}">
    <meta property="og:description" content="${esc(description)}">
    <meta property="og:url" content="https://germano123.github.io/${esc(outputPath)}">
    <meta property="og:image" content="https://github.com/Germano123.png">
    <meta property="og:image:secure_url" content="https://github.com/Germano123.png">
    <meta property="og:image:alt" content="Germano Gomes — Cozy Developer Laboratory">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${esc(title)}">
    <meta name="twitter:description" content="${esc(description)}">
    <meta name="twitter:image" content="https://github.com/Germano123.png">
    <link rel="canonical" href="${esc(outputPath)}">
    <title>${esc(title)} | Tools Lab | Germano Cozy Dev Lab</title>
    <!-- Google Fonts for Cozy Rounded Typography -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <link href="../css/style.css" rel="stylesheet" type="text/css">
    <link href="../css/tools.css" rel="stylesheet" type="text/css">

    <!-- Registro canônico embutido (fonte da re-renderização reativa de idioma) -->
    <script type="application/json" id="tool-data">${embeddedData}</script>
</head>
<body>
    <header id="site-header-mount"></header>

    <main class="page-shell">
        <article class="case-study tool-page tool-page--${esc(accent)}" data-tool-slug="${esc(tool.slug)}">
${renderHeader(tool, lang)}
${renderHero(tool, lang)}
${renderPitch(tool)}
${renderWorkflow(tool)}
${renderFeatures(tool)}
${renderPipeline(tool)}
${renderGallery(tool)}
${renderArchitecture(tool)}
${renderValidation(tool)}
${renderResults(tool)}
${renderContributions(tool)}
${renderActions(tool)}
        </article>
    </main>

    <footer id="site-footer-mount"></footer>

    ${renderLightbox()}

    <!-- Scripts da Aplicação -->
    <script src="../js/i18n.js"></script>
    <script src="../js/components.js"></script>
    <script src="../js/gallery.js"></script>
    <script src="../js/tool-page.js"></script>

    <script>
      document.addEventListener('DOMContentLoaded', () => {
        initI18n();
        ToolPage.init();
      });
    </script>
</body>
</html>
`;
}

module.exports = {
  renderToolPage,
  esc,
  loc,
  toPageRelative,
  STATUS_META,
  COLLAB_META,
  CLASSIFICATION_I18N
};
