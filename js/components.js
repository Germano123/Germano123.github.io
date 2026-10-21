/**
 * Cozy Developer Laboratory — Componentes Reutilizáveis de Interface
 * Conforme Seção 8 do documento de requisitos
 */

const Components = {
  /**
   * Calcula o prefixo relativo necessário para alcançar a raiz do site
   * a partir da página atual. Permite que um mesmo componente funcione
   * em páginas na raiz (`/`) e em subpastas (`/tools/`).
   * @returns {string} '' ou '../', '../../', etc.
   */
  assetRoot() {
    if (typeof window === 'undefined') return '';
    // Tenta primeiro detectar o caminho relativo pelo atributo src do próprio components.js
    if (typeof document !== 'undefined') {
      const script = document.querySelector('script[src*="components.js"]');
      if (script) {
        const src = script.getAttribute('src') || '';
        const match = src.match(/^(.*?)js\//);
        if (match) return match[1];
      }
    }
    // Fallback verificando se está em subpasta conhecida (/tools/)
    if (typeof window !== 'undefined' && window.location && window.location.pathname) {
      if (window.location.pathname.replace(/\\/g, '/').includes('/tools/')) {
        return '../';
      }
    }
    return '';
  },

  /**
   * Renderiza o cabeçalho compartilhado da aplicação
   * @param {string} activeNavId - Identificador da rota ativa
   */
  renderHeader(activeNavId = 'home') {
    const headerContainer = document.getElementById('site-header-mount');
    if (!headerContainer) return;

    headerContainer.className = 'site-header';

    // Prefixo relativo à raiz do site (permite uso em subpastas como /tools/).
    const root = this.assetRoot();

    headerContainer.innerHTML = `
      <div class="header-container">
        <a href="${root}index.html" class="brand-link">
          <span aria-hidden="true" style="font-size: 1.3rem;">🌿</span>
          <span>Germano</span>
          <span class="brand-badge">Lab</span>
          <span class="sr-only" data-i18n="brandHomeAria">${t('brandHomeAria')}</span>
        </a>

        <nav class="primary-nav" aria-label="Navegação Principal">
          <a href="${root}index.html" class="nav-link ${activeNavId === 'home' ? 'active' : ''}" data-i18n="navHome">${t('navHome')}</a>
          <a href="${root}tools-lab.html" class="nav-link ${activeNavId === 'tools' || activeNavId === 'tools-lab' ? 'active' : ''}" data-i18n="navTools">${t('navTools')}</a>
          <a href="${root}art-workshop.html" class="nav-link ${activeNavId === 'art' || activeNavId === 'art-workshop' ? 'active' : ''}" data-i18n="navArt">${t('navArt')}</a>
          <a href="${root}games-prototypes.html" class="nav-link ${activeNavId === 'games' || activeNavId === 'games-prototypes' ? 'active' : ''}" data-i18n="navGamesPrototypes">${t('navGamesPrototypes')}</a>
          <a href="${root}about.html" class="nav-link ${activeNavId === 'about' ? 'active' : ''}" data-i18n="navAbout">${t('navAbout')}</a>
        </nav>

        <div class="lang-segmented" role="group" aria-label="Seletor de Idioma">
          <button type="button" class="lang-btn ${getLanguage() === 'pt' ? 'active' : ''}" data-lang="pt" aria-pressed="${getLanguage() === 'pt'}">PT</button>
          <button type="button" class="lang-btn ${getLanguage() === 'en' ? 'active' : ''}" data-lang="en" aria-pressed="${getLanguage() === 'en'}">EN</button>
        </div>
      </div>
    `;
  },

  /**
   * Renderiza o rodapé compartilhado
   */
  renderFooter() {
    const footerContainer = document.getElementById('site-footer-mount');
    if (!footerContainer) return;

    const root = this.assetRoot();

    footerContainer.className = 'site-footer';
    footerContainer.innerHTML = `
      <div class="footer-container">
        <p class="footer-quote" data-i18n="footerQuote">${t('footerQuote')}</p>
        <div class="footer-links">
          <a href="https://github.com/Germano123" class="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:germano-software-dev@hotmail.com" class="footer-link" data-i18n="footerEmail">${t('footerEmail')}</a>
          <a href="https://www.linkedin.com/in/germano-gomes-293648121/" class="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="${root}software-shelf.html" class="footer-link" data-i18n="navShelf">${t('navShelf')}</a>
          <a href="${root}about.html" class="footer-link" data-i18n="navAbout">${t('navAbout')}</a>
        </div>
        <p class="footer-copyright" data-i18n="footerCopyright">${t('footerCopyright')}</p>
      </div>
    `;
  },

  /**
   * Renderiza um card de projeto canônico
   * @param {Object} project - Dados canônicos do projeto
   * @param {string} lang - Idioma atual ('pt' ou 'en')
   */
  renderProjectCard(project, lang = getLanguage()) {
    const rawSummary = (project.summary && (project.summary[lang] || project.summary.pt)) || '';
    
    // Clamp fechado com limite de caracteres e '...' no final
    const MAX_SUMMARY_CHARS = 130;
    let clampedSummary = rawSummary.trim();
    if (clampedSummary.length > MAX_SUMMARY_CHARS) {
      let slice = clampedSummary.slice(0, MAX_SUMMARY_CHARS);
      const lastSpace = slice.lastIndexOf(' ');
      if (lastSpace > 60) {
        slice = slice.slice(0, lastSpace);
      }
      slice = slice.replace(/\s+(da|de|do|das|dos|e|o|a|em|com|um|uma|por|para|of|and|the|in|on|at|to|for|with|a|an)$/i, '');
      clampedSummary = slice.trim().replace(/[,.;:!?]+$/, '') + '...';
    }
    const statusClass = `status-${project.status}`;
    
    let statusLabel = t('statusCompleted');
    let statusIcon = '✅';
    if (project.status === 'in-progress') {
      statusLabel = t('statusInProgress');
      statusIcon = '⏳';
    } else if (project.status === 'prototype') {
      statusLabel = t('statusPrototype');
      statusIcon = '🧪';
    } else if (project.status === 'archived') {
      statusLabel = t('statusArchived');
      statusIcon = '📦';
    }

    const techTagsHtml = (project.technologies || [])
      .map(tech => `<span class="tech-tag">${tech}</span>`)
      .join('');

    // Ferramentas com página estática própria (tools/<slug>.html) são
    // priorizadas sobre o estudo de caso dinâmico (project.html?slug=...).
    const root = this.assetRoot();
    const detailUrl = project.pageUrl
      ? `${root}${project.pageUrl}`
      : `project.html?slug=${project.slug}`;
    const detailLabel = project.pageUrl ? t('toolViewDetails') : t('viewCaseStudy');

    const collabType = project.collaborationType || 'portfolio';
    let collabLabel = t('collabPortfolio');
    let collabIcon = '📁';
    if (collabType === 'parceria') {
      collabLabel = t('collabPartnership');
      collabIcon = '🤝';
    } else if (collabType === 'comercial') {
      collabLabel = t('collabCommercial');
      collabIcon = '💼';
    } else if (collabType === 'estudo') {
      collabLabel = t('collabStudy');
      collabIcon = '📖';
    } else if (collabType === 'pessoal') {
      collabLabel = t('collabPersonal');
      collabIcon = '📁';
    }

    return `
      <article class="project-card project-card--${collabType}" data-project-id="${project.id}" role="link" tabindex="0" onclick="if (!event.target.closest('a, button')) { window.location.href='${detailUrl}'; }" onkeydown="if ((event.key === 'Enter' || event.key === ' ') && !event.target.closest('a, button')) { event.preventDefault(); window.location.href='${detailUrl}'; }">
        <div class="project-card-cover">
          <img src="${root}${project.cover_pic || project.cover || 'assets/background.jpg'}" alt="${project.title}" loading="lazy">
          <span class="card-collab-badge card-collab-badge--${collabType}">
            <span>${collabIcon}</span>
            <span>${collabLabel}</span>
          </span>
          <span class="project-status-badge ${statusClass}"><span>${statusIcon}</span><span>${statusLabel}</span></span>
        </div>
        <div class="project-card-body">
          <h3 class="project-card-title">${project.title}</h3>
          <div class="project-tech-tags">${techTagsHtml}</div>
          ${project.projectType === 'tool' && project.workflowContext && project.workflowContext.timeSavedMetric ? `<div class="card-specialized-metric" style="font-size: 0.8rem; color: var(--color-orange-light); font-weight: 500; margin-top: 4px;">⏱️ ${project.workflowContext.timeSavedMetric}</div>` : ''}
          ${project.projectType === 'art' && project.technicalArtBudget ? `<div class="card-specialized-metric" style="font-size: 0.8rem; color: var(--color-green-light); font-weight: 500; margin-top: 4px;">📐 ${project.technicalArtBudget.triangleCount.toLocaleString()} tris • ${project.technicalArtBudget.drawCallsEstimated} draw calls</div>` : ''}
          ${project.projectType === 'game' && project.gameplayProfile ? `<div class="card-specialized-metric" style="font-size: 0.8rem; color: var(--color-orange-light); font-weight: 500; margin-top: 4px;">🎮 ${project.gameplayProfile.genre[lang] || project.gameplayProfile.genre.pt}</div>` : ''}
          ${project.projectType === 'software' && project.distributionDetails ? `<div class="card-specialized-metric" style="font-size: 0.8rem; color: var(--color-green-light); font-weight: 500; margin-top: 4px;">📦 ${project.distributionDetails.semanticVersion} • ${project.distributionDetails.license}</div>` : ''}
          <p class="project-card-summary">${clampedSummary}</p>
          <div class="project-card-footer">
            <a href="${detailUrl}" class="btn btn-secondary" style="padding: 6px 16px; font-size: 0.88rem;">
              ${detailLabel}
            </a>
          </div>
        </div>
      </article>
    `;
  },

  /**
   * Renderiza um card de área do laboratório para o "Explore the Lab"
   * @param {Object} area - Dados da área
   * @param {string} lang - Idioma atual
   */
  renderAreaCard(area, lang = getLanguage()) {
    const name = area.name[lang] || area.name.pt;
    const tagline = area.tagline[lang] || area.tagline.pt;

    return `
      <a href="${this.assetRoot()}${area.slug}" class="area-card">
        <div class="area-card-header">
          <span class="area-icon" aria-hidden="true">${area.icon}</span>
          <h3 class="area-name">${name}</h3>
        </div>
        <p class="area-tagline">${tagline}</p>
        <span class="area-action">Explorar Área →</span>
      </a>
    `;
  },

  /**
   * Renderiza o componente EmptyState acolhedor
   * @param {string} title 
   * @param {string} desc 
   * @param {string} icon 
   */
  renderEmptyState(title = t('emptyAreaTitle'), desc = t('emptyAreaDesc'), icon = '🛠️') {
    return `
      <div class="empty-state">
        <span class="empty-state-icon" aria-hidden="true">${icon}</span>
        <h3 class="empty-state-title">${title}</h3>
        <p class="empty-state-desc">${desc}</p>
        <a href="${this.assetRoot()}index.html" class="btn btn-primary" style="margin-top: 8px;">
          ${t('btnBackToMenu')}
        </a>
      </div>
    `;
  }
};
