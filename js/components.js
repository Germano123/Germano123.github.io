/**
 * Cozy Developer Laboratory — Componentes Reutilizáveis de Interface
 * Conforme Seção 8 do documento de requisitos
 */

const Components = {
  /**
   * Renderiza o cabeçalho compartilhado da aplicação
   * @param {string} activeNavId - Identificador da rota ativa
   */
  renderHeader(activeNavId = 'home') {
    const headerContainer = document.getElementById('site-header-mount');
    if (!headerContainer) return;

    headerContainer.className = 'site-header';
    headerContainer.innerHTML = `
      <div class="header-container">
        <a href="index.html" class="brand-link" aria-label="Página Inicial do Cozy Dev Lab">
          <span style="font-size: 1.3rem;">🌿</span>
          <span>Germano</span>
          <span class="brand-badge">Lab</span>
        </a>

        <nav class="primary-nav" aria-label="Navegação Principal">
          <a href="index.html" class="nav-link ${activeNavId === 'home' ? 'active' : ''}" data-i18n="navHome">${t('navHome')}</a>
          <a href="tools-lab.html" class="nav-link ${activeNavId === 'tools' || activeNavId === 'tools-lab' ? 'active' : ''}" data-i18n="navTools">${t('navTools')}</a>
          <a href="art-workshop.html" class="nav-link ${activeNavId === 'art' || activeNavId === 'art-workshop' ? 'active' : ''}" data-i18n="navArt">${t('navArt')}</a>
          <a href="games-prototypes.html" class="nav-link ${activeNavId === 'games' || activeNavId === 'games-prototypes' ? 'active' : ''}" data-i18n="navGamesPrototypes">${t('navGamesPrototypes')}</a>
          <a href="software-shelf.html" class="nav-link ${activeNavId === 'shelf' || activeNavId === 'software-shelf' ? 'active' : ''}" data-i18n="navShelf">${t('navShelf')}</a>
          <a href="about.html" class="nav-link ${activeNavId === 'about' ? 'active' : ''}" data-i18n="navAbout">${t('navAbout')}</a>
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

    footerContainer.className = 'site-footer';
    footerContainer.innerHTML = `
      <div class="footer-container">
        <p class="footer-quote" data-i18n="footerQuote">${t('footerQuote')}</p>
        <div class="footer-links">
          <a href="https://github.com/Germano123" class="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:germano-software-dev@hotmail.com" class="footer-link" data-i18n="footerEmail">${t('footerEmail')}</a>
          <a href="https://www.linkedin.com/in/germano-gomes-293648121/" class="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="software-shelf.html" class="footer-link" data-i18n="navShelf">${t('navShelf')}</a>
          <a href="about.html" class="footer-link" data-i18n="navAbout">${t('navAbout')}</a>
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
    const summary = project.summary[lang] || project.summary.pt;
    const statusClass = `status-${project.status}`;
    
    let statusLabel = t('statusCompleted');
    if (project.status === 'in-progress') statusLabel = t('statusInProgress');
    if (project.status === 'prototype') statusLabel = t('statusPrototype');
    if (project.status === 'archived') statusLabel = t('statusArchived');

    const techTagsHtml = (project.technologies || [])
      .map(tech => `<span class="tech-tag">${tech}</span>`)
      .join('');

    return `
      <article class="project-card" data-project-id="${project.id}">
        <div class="project-card-cover">
          <img src="${project.cover || 'assets/background.jpg'}" alt="${project.title}" loading="lazy">
          <span class="project-status-badge ${statusClass}">${statusLabel}</span>
        </div>
        <div class="project-card-body">
          <h3 class="project-card-title">${project.title}</h3>
          <div class="project-tech-tags">${techTagsHtml}</div>
          ${project.projectType === 'tool' && project.workflowContext && project.workflowContext.timeSavedMetric ? `<div class="card-specialized-metric" style="font-size: 0.8rem; color: var(--color-orange-light); font-weight: 500; margin-top: 4px;">⏱️ ${project.workflowContext.timeSavedMetric}</div>` : ''}
          ${project.projectType === 'art' && project.technicalArtBudget ? `<div class="card-specialized-metric" style="font-size: 0.8rem; color: var(--color-green-light); font-weight: 500; margin-top: 4px;">📐 ${project.technicalArtBudget.triangleCount.toLocaleString()} tris • ${project.technicalArtBudget.drawCallsEstimated} draw calls</div>` : ''}
          ${project.projectType === 'game' && project.gameplayProfile ? `<div class="card-specialized-metric" style="font-size: 0.8rem; color: var(--color-orange-light); font-weight: 500; margin-top: 4px;">🎮 ${project.gameplayProfile.genre[lang] || project.gameplayProfile.genre.pt}</div>` : ''}
          ${project.projectType === 'software' && project.distributionDetails ? `<div class="card-specialized-metric" style="font-size: 0.8rem; color: var(--color-green-light); font-weight: 500; margin-top: 4px;">📦 ${project.distributionDetails.semanticVersion} • ${project.distributionDetails.license}</div>` : ''}
          <p class="project-card-summary">${summary}</p>
          <div class="project-card-footer">
            <a href="project.html?slug=${project.slug}" class="btn btn-secondary" style="padding: 6px 16px; font-size: 0.88rem;">
              ${t('viewCaseStudy')}
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
      <a href="${area.slug}" class="area-card">
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
        <a href="software-shelf.html" class="btn btn-primary" style="margin-top: 8px;">
          ${t('btnBackToShelf')}
        </a>
      </div>
    `;
  }
};
