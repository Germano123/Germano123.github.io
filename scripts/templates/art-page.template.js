/**
 * Cozy Developer Laboratory — Template de Página de Arte (Art Workshop)
 *
 * Template único e replicável para os trabalhos de modelagem 3D.
 * Todas as páginas em `art/<slug>.html` são geradas a partir deste arquivo.
 *
 * Contrato de internacionalização (dual):
 *   - `data-i18n="chave"`      → rótulos GLOBAIS do site (dictionário js/i18n.js)
 *   - `data-ti="caminho"`      → conteúdo ESPECÍFICO do trabalho (JSON embutido)
 *   - `data-ti-html="caminho"` → idem, interpretando HTML
 *   - `data-ti-list="caminho"` → lista de itens renderizada como <li>
 *   - `data-ti-alt="caminho"`  → define o atributo `alt` do elemento
 */

const { ART_CATEGORIES } = require('../../js/data/art-categories.js');

/**
 * Rótulos PT usados como fallback estático no HTML gerado.
 * O runtime i18n substitui o texto no carregamento; o fallback garante
 * que a página sem JavaScript continue legível e indexável.
 */
const CATEGORY_LABELS_PT = {
  personagens: 'Personagem',
  assets: 'Asset',
  animacoes: 'Animação'
};

/* ------------------------------------------------------------------ */
/* Utilitários                                                         */
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
 */
function esc(value) {
  if (value === null || value === undefined) return '';
  return String(value).replace(/[&<>"']/g, (ch) => HTML_ESCAPES[ch]);
}

/**
 * Resolve um valor localizado para o idioma ativo.
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
 * As páginas de arte vivem em `art/`.
 */
function toPageRelative(path) {
  if (!path) return '';
  if (/^(https?:)?\/\//i.test(path) || path.startsWith('data:')) return path;
  if (path.startsWith('/')) return `..${path}`;
  if (path.startsWith('../') || path.startsWith('./')) return path;
  return `../${path}`;
}

/* ------------------------------------------------------------------ */
/* Agrupamento de carrosséis                                           */
/* ------------------------------------------------------------------ */

/**
 * Deduz o grupo de carrossel a partir do nome do arquivo.
 * Padrão reconhecido: `<prefixo>-carrossel-<grupo>-<item>.<ext>`
 * Ex.: lily-carrossel-1-1.png → grupo 1, item 1
 *      lily-carrossel-2-3.png → grupo 2, item 3
 *
 * @param {string} src
 * @returns {{group: number, order: number}|null}
 */
function parseCarouselName(src) {
  if (!src) return null;
  const match = /carrossel[-_](\d+)[-_](\d+)/i.exec(src);
  if (!match) return null;
  return { group: parseInt(match[1], 10), order: parseInt(match[2], 10) };
}

/**
 * Agrupa as mídias em carrosséis.
 * Mídias sem o padrão de nome caem em um único carrossel (grupo 1),
 * preservando a ordem de declaração.
 *
 * @param {Array<Object>} media
 * @returns {Array<{index: number, items: Array<Object>}>}
 */
function groupCarousels(media) {
  const list = media || [];
  const groups = new Map();

  list.forEach((item, index) => {
    const parsed = parseCarouselName(item.src);
    const group = item.carousel || (parsed ? parsed.group : 1);
    const order = parsed ? parsed.order : index + 1;

    if (!groups.has(group)) {
      groups.set(group, { index: group, items: [] });
    }
    groups.get(group).items.push({ ...item, order });
  });

  return Array.from(groups.values())
    .sort((a, b) => a.index - b.index)
    .map((group) => ({
      index: group.index,
      items: group.items
        .slice()
        .sort((a, b) => a.order - b.order)
        .map(({ order, ...rest }) => rest)
    }));
}

/* ------------------------------------------------------------------ */
/* Blocos da página                                                    */
/* ------------------------------------------------------------------ */

/**
 * Tag visual explícita da categoria.
 */
function renderCategoryTag(category, extraClass = '') {
  const meta = ART_CATEGORIES[category] || ART_CATEGORIES.assets;
  const label = CATEGORY_LABELS_PT[meta.id] || meta.id;
  return `<span class="art-category-tag art-category-tag--${esc(meta.accent)} ${esc(extraClass)}">
            <span class="art-category-tag-icon" aria-hidden="true">${esc(meta.icon)}</span>
            <span data-i18n="${meta.i18nKey}">${esc(label)}</span>
          </span>`;
}

/**
 * Cabeçalho: breadcrumb, título, tag de categoria e metadados.
 */
function renderHeader(art, lang) {
  const title = loc(art.title, lang);
  const subtitle = loc(art.subtitle, lang);

  const techTags = (art.technologies || [])
    .map((tech) => `<span class="tech-tag">${esc(tech)}</span>`)
    .join('');

  const tagChips = (art.tags || [])
    .map((tag) => `<span class="art-tag-chip">#${esc(tag)}</span>`)
    .join('');

  const statusLabel = art.status === 'completed' ? 'statusCompleted'
    : art.status === 'in-progress' ? 'statusInProgress'
    : art.status === 'prototype' ? 'statusPrototype'
    : 'statusArchived';
  const statusIcon = art.status === 'completed' ? '✅'
    : art.status === 'in-progress' ? '⏳'
    : art.status === 'prototype' ? '🧪'
    : '📦';

  return `
    <!-- 0. Breadcrumb -->
    <nav class="art-breadcrumb" aria-label="Breadcrumb">
      <a href="../index.html" data-i18n="navHome">Início</a>
      <span class="art-breadcrumb-sep" aria-hidden="true">/</span>
      <a href="../art-workshop.html" data-i18n="navArt">Art Workshop</a>
      <span class="art-breadcrumb-sep" aria-hidden="true">/</span>
      <span class="art-breadcrumb-current" aria-current="page">${esc(title)}</span>
    </nav>

    <!-- 1. Cabeçalho do Trabalho -->
    <header class="case-study-header art-page-header">
      <div class="art-page-title-row">
        ${renderCategoryTag(art.mainCategory, 'art-category-tag--lg')}
        <h1 class="case-study-title" data-ti="title">${esc(title)}</h1>
      </div>

      ${subtitle ? `<p class="art-page-subtitle" data-ti="subtitle">${esc(subtitle)}</p>` : ''}

      <div class="case-study-meta">
        <span class="project-status-badge status-${esc(art.status)}">
          <span aria-hidden="true">${statusIcon}</span>
          <span data-i18n="${statusLabel}">${esc(statusLabel)}</span>
        </span>
        ${techTags}
        ${tagChips}
      </div>
    </header>`;
}

/**
 * Apresentação principal: vídeo (se houver) ou imagem de banner.
 */
function renderHero(art, lang) {
  const video = art.video;
  const banner = art.banner;

  if (video && video.src) {
    const poster = video.poster || banner?.src;
    return `
    <!-- 2. Apresentação Principal (Vídeo) -->
    <figure class="art-hero art-hero--video">
      <video class="art-hero-media"
             src="${esc(toPageRelative(video.src))}"
             ${poster ? `poster="${esc(toPageRelative(poster))}"` : ''}
             ${video.loop === false ? '' : 'loop'}
             ${video.muted === false ? '' : 'muted'}
             ${video.controls ? 'controls' : 'autoplay'}
             playsinline
             preload="metadata"></video>
      ${video.caption ? `<figcaption class="art-hero-caption" data-ti="video.caption">${esc(loc(video.caption, lang))}</figcaption>` : ''}
    </figure>`;
  }

  if (banner && banner.src) {
    return `
    <!-- 2. Apresentação Principal (Banner) -->
    <figure class="art-hero art-hero--image">
      <img class="art-hero-media" src="${esc(toPageRelative(banner.src))}" alt="${esc(banner.alt || loc(art.title, lang))}" loading="eager">
      ${banner.caption ? `<figcaption class="art-hero-caption" data-ti="banner.caption">${esc(loc(banner.caption, lang))}</figcaption>` : ''}
    </figure>`;
  }

  return '';
}

/**
 * Características concisas do trabalho.
 */
function renderCharacteristics(art) {
  const items = art.characteristics || [];
  if (!items.length) return '';

  const cards = items
    .map(
      (c, i) => `<div class="art-characteristic">
          ${c.icon ? `<span class="art-characteristic-icon" aria-hidden="true">${esc(c.icon)}</span>` : ''}
          <span class="art-characteristic-label" data-ti="characteristics.${i}.label"></span>
          <span class="art-characteristic-value" data-ti="characteristics.${i}.value"></span>
        </div>`
    )
    .join('\n          ');

  return `
    <!-- 3. Características -->
    <section class="case-study-section art-section-characteristics">
      <h2 class="case-study-section-title">📐 <span data-i18n="artCharacteristicsTitle">Características</span></h2>
      <div class="case-study-section-content">
        <div class="art-characteristic-grid">
          ${cards}
        </div>
      </div>
    </section>`;
}

/**
 * Carrossel (único ou múltiplo) com as imagens do trabalho.
 * @param {Object} art - Registro canônico
 * @param {Array<Object>} carousels - Grupos já calculados
 */
function renderCarousels(art, carousels) {
  if (!carousels || !carousels.length) return '';

  const first = carousels[0];
  const firstItem = first.items[0];

  const tabs = carousels.length > 1
    ? `<div class="art-carousel-tabs" role="tablist" aria-label="${esc('Carrosséis')}">
            ${carousels
              .map(
                (g, i) => `<button type="button" class="art-carousel-tab ${i === 0 ? 'active' : ''}"
                            role="tab" data-carousel-group="${g.index}"
                            aria-selected="${i === 0 ? 'true' : 'false'}">
                            <span data-i18n="artCarouselLabel">Carrossel</span> ${g.index}
                          </button>`
              )
              .join('\n            ')}
          </div>`
    : '';

  return `
    <!-- 4. Galeria / Carrosséis -->
    <section class="case-study-section art-section-gallery" aria-roledescription="carousel" aria-label="${esc('Project Gallery')}">
      <div class="art-section-heading">
        <h2 class="case-study-section-title">🖼️ <span data-i18n="artGalleryTitle">Galeria do Trabalho</span></h2>
        <span class="art-section-hint" data-i18n="artGalleryDesc">Registros visuais do processo e do resultado final.</span>
      </div>

      ${tabs}

      <div class="project-carousel" id="project-carousel" tabindex="0" role="region" aria-label="${esc('Project Gallery')}">
        <div class="carousel-stage" id="carousel-stage" role="button" tabindex="0">
          <span class="carousel-top-badge" id="carousel-counter"></span>
          <span class="carousel-zoom-hint" aria-hidden="true">🔍 <span data-i18n="viewImageFull">Clique para ampliar a imagem</span></span>
          <button type="button" class="carousel-nav-btn carousel-nav-btn--prev" id="carousel-prev-btn" aria-label="Anterior">‹</button>
          <img src="${esc(toPageRelative(firstItem.src))}" alt="${esc(firstItem.alt || '')}" class="carousel-slide-img" id="carousel-main-img">
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
 * Resumo curto do trabalho.
 */
function renderSummary(art) {
  return `
    <!-- 5. Resumo -->
    <section class="case-study-section art-section-summary">
      <h2 class="case-study-section-title">📝 <span data-i18n="artSummaryTitle">Resumo</span></h2>
      <div class="case-study-section-content">
        <p class="art-lead" data-ti="summary"></p>
      </div>
    </section>`;
}

/**
 * Processo e integração (opcionais).
 */
function renderProcess(art) {
  const hasProcess = art.process && (art.process.pt || art.process.en);
  const hasIntegration = art.integration && (art.integration.pt || art.integration.en);
  if (!hasProcess && !hasIntegration) return '';

  return `
    <!-- 6. Processo e Integração -->
    <section class="case-study-section art-section-process">
      <h2 class="case-study-section-title">🛠️ <span data-i18n="artProcessTitle">Processo &amp; Integração</span></h2>
      <div class="case-study-section-content">
        ${hasProcess ? `<p data-ti="process"></p>` : ''}
        ${hasIntegration ? `<p data-ti="integration"></p>` : ''}
      </div>
    </section>`;
}

/**
 * Links externos.
 */
function renderActions(art) {
  const links = art.links || {};
  const buttons = [];

  if (links.repositoryUrl) {
    buttons.push(`<a href="${esc(links.repositoryUrl)}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
        <span aria-hidden="true">🐙</span> <span data-i18n="btnRepository">Repositório no GitHub</span></a>`);
  }
  if (links.buildUrl) {
    buttons.push(`<a href="${esc(links.buildUrl)}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
        <span aria-hidden="true">🎮</span> <span data-i18n="btnBuild">Testar Demonstração / Build</span></a>`);
  }
  if (links.documentationUrl) {
    buttons.push(`<a href="${esc(links.documentationUrl)}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
        <span aria-hidden="true">📘</span> <span data-i18n="btnDocumentation">Documentação</span></a>`);
  }
  if (links.demoUrl) {
    buttons.push(`<a href="${esc(links.demoUrl)}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
        <span aria-hidden="true">▶️</span> <span data-i18n="btnDemo">Demonstração</span></a>`);
  }
  buttons.push(`<a href="../art-workshop.html" class="btn btn-ghost"><span data-i18n="btnBackToArea">← Voltar</span></a>`);

  return `
    <!-- 7. Links -->
    <div class="case-study-actions">
      ${buttons.join('\n      ')}
    </div>`;
}

/**
 * Markup do lightbox.
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
 * Gera o HTML completo de uma página de trabalho de arte.
 * @param {Object} art - Registro canônico
 * @param {Object} [options]
 * @param {string} [options.lang]
 * @param {string} [options.outputPath]
 * @returns {string}
 */
function renderArtPage(art, options = {}) {
  const lang = options.lang || 'pt';
  const title = loc(art.title, lang);
  const subtitle = loc(art.subtitle, lang);
  const summary = loc(art.summary, lang);
  const categoryMeta = ART_CATEGORIES[art.mainCategory] || ART_CATEGORIES.assets;
  const accent = art.accent || categoryMeta.accent;

  const description = (summary || subtitle || title).replace(/\s+/g, ' ').trim().slice(0, 160);
  const outputPath = options.outputPath || `art/${art.slug}.html`;

  // Carrosséis agrupados na geração — o runtime apenas troca de grupo.
  const carousels = groupCarousels(art.media);
  const embedded = JSON.stringify({ ...art, carousels }).replace(/</g, '\\u003c');

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
    <meta property="og:image" content="${esc(art.cover_pic ? 'https://germano123.github.io/' + art.cover_pic.replace(/^\/+/, '') : 'https://github.com/Germano123.png')}">
    <meta property="og:image:secure_url" content="${esc(art.cover_pic ? 'https://germano123.github.io/' + art.cover_pic.replace(/^\/+/, '') : 'https://github.com/Germano123.png')}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${esc(title)}">
    <meta name="twitter:description" content="${esc(description)}">
    <meta name="twitter:image" content="${esc(art.cover_pic ? 'https://germano123.github.io/' + art.cover_pic.replace(/^\/+/, '') : 'https://github.com/Germano123.png')}">
    <link rel="canonical" href="${esc(outputPath)}">
    <title>${esc(title)} | Art Workshop | Germano Cozy Dev Lab</title>
    <!-- Google Fonts for Cozy Rounded Typography -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <link href="../css/style.css" rel="stylesheet" type="text/css">
    <link href="../css/art.css" rel="stylesheet" type="text/css">

    <!-- Registro canônico embutido -->
    <script type="application/json" id="art-data">${embedded}</script>
</head>
<body>
    <header id="site-header-mount"></header>

    <main class="page-shell">
        <article class="case-study art-page art-page--${esc(accent)} art-page--cat-${esc(art.mainCategory)}" data-art-slug="${esc(art.slug)}">
${renderHeader(art, lang)}
${renderHero(art, lang)}
${renderCharacteristics(art)}
${renderCarousels(art, carousels)}
${renderSummary(art)}
${renderProcess(art)}
${renderActions(art)}
        </article>
    </main>

    <footer id="site-footer-mount"></footer>

    ${renderLightbox()}

    <!-- Scripts da Aplicação -->
    <script src="../js/i18n.js"></script>
    <script src="../js/components.js"></script>
    <script src="../js/data/art-categories.js"></script>
    <script src="../js/gallery.js"></script>
    <script src="../js/art-page.js"></script>

    <script>
      document.addEventListener('DOMContentLoaded', () => {
        initI18n();
        ArtPage.init();
      });
    </script>
</body>
</html>
`;
}

module.exports = {
  renderArtPage,
  esc,
  loc,
  toPageRelative,
  groupCarousels,
  parseCarouselName
};
