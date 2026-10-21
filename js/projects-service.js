/**
 * Cozy Developer Laboratory — Serviço de Consulta de Projetos
 * Encapsula o acesso aos dados canônicos sem duplicação de lógica.
 */

const ProjectsService = {
  /**
   * Retorna todos os registros públicos de TODAS as fontes canônicas.
   * - PROJECTS: jogos e demais projetos (js/data/projects.js)
   * - TOOLS:    ferramentas do Tools Lab (js/data/tools.js, gerado)
   * - ART:      trabalhos do Art Workshop (js/data/art.js, gerado)
   * @returns {Array}
   */
  getAllPublished() {
    const games = (typeof PROJECTS !== 'undefined' && PROJECTS) || [];
    const tools = (typeof TOOLS !== 'undefined' && TOOLS) || [];
    const art = (typeof ART !== 'undefined' && ART) || [];
    return [...games, ...tools, ...art].filter(p => p.visibility === 'public');
  },

  /**
   * Retorna todos os registros públicos, incluindo rascunhos.
   * Usado por fluxos internos de verificação.
   * @returns {Array}
   */
  getAllRecords() {
    const games = (typeof PROJECTS !== 'undefined' && PROJECTS) || [];
    const tools = (typeof TOOLS !== 'undefined' && TOOLS) || [];
    const art = (typeof ART !== 'undefined' && ART) || [];
    return [...games, ...tools, ...art];
  },

  /**
   * Retorna todos os registros do Art Workshop (área 'art-workshop'),
   * independentemente do pipeline de origem.
   * @returns {Array}
   */
  getArtWorks() {
    const art = (typeof ART !== 'undefined' && ART) || [];
    const fromArea = this.getAllPublished().filter(
      (p) => p.projectType === 'art' && (p.areas || []).includes('art-workshop')
    );
    // Deduplica por id, preservando a ordem dos registros de arte.
    const seen = new Set();
    return [...art, ...fromArea].filter((p) => {
      if (seen.has(p.id)) return false;
      seen.add(p.id);
      return p.visibility === 'public';
    });
  },

  /**
   * Retorna os projetos marcados como featured
   */
  getFeatured() {
    return this.getAllPublished().filter(p => p.featured === true);
  },

  /**
   * Retorna projetos pertencentes a uma área específica
   * @param {string} areaId 
   */
  getByArea(areaId) {
    return this.getAllPublished().filter(p => (p.areas || []).includes(areaId));
  },

  /**
   * Retorna projetos filtrados por tipo de projeto (tool, art, game, software)
   * Conforme Especificação 3
   * @param {string} type 
   */
  getByProjectType(type) {
    if (!type || type === 'all') return this.getAllPublished();
    return this.getAllPublished().filter(p => p.projectType === type);
  },

  /**
   * Retorna os trabalhos do Art Workshop filtrados por categoria
   * (all, personagens, assets, animacoes).
   * A categoria principal (`mainCategory`) tem precedência; a tag secundária
   * permite que um trabalho apareça também em outro filtro.
   * Conforme Seção 4.1 de artifacts/2_portfolio_pages.md
   * @param {string} category
   */
  getByArtCategory(category = 'all') {
    const artProjects = this.getArtWorks();
    if (!category || category === 'all') {
      return artProjects;
    }
    return artProjects.filter(p => {
      const isMain = p.mainCategory === category;
      const hasTag = (p.tags || []).includes(category);
      return isMain || hasTag;
    });
  },

  /**
   * Retorna um projeto pelo seu slug
   * @param {string} slug 
   */
  getBySlug(slug) {
    if (!slug) return null;
    return this.getAllPublished().find(p => p.slug === slug) || null;
  },

  /**
   * Extrai todas as tecnologias únicas utilizadas nos projetos publicados
   */
  getAllTechnologies() {
    const techs = new Set();
    this.getAllPublished().forEach(p => {
      (p.technologies || []).forEach(t => techs.add(t));
    });
    return Array.from(techs).sort();
  },

  /**
   * Aplica filtros combinados de busca textual, área e tecnologia
   */
  filterProjects(projects, { query = '', area = 'all', tech = 'all' } = {}) {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter(p => {
      // Filtro de área
      if (area !== 'all' && !(p.areas || []).includes(area)) {
        return false;
      }

      // Filtro de tecnologia
      if (tech !== 'all' && !(p.technologies || []).includes(tech)) {
        return false;
      }

      // Busca por texto no título, resumo ou tecnologias
      if (normalizedQuery) {
        const titleMatch = (p.title || '').toLowerCase().includes(normalizedQuery);
        const ptSummaryMatch = ((p.summary && p.summary.pt) || '').toLowerCase().includes(normalizedQuery);
        const enSummaryMatch = ((p.summary && p.summary.en) || '').toLowerCase().includes(normalizedQuery);
        const techMatch = (p.technologies || []).some(t => t.toLowerCase().includes(normalizedQuery));

        return titleMatch || ptSummaryMatch || enSummaryMatch || techMatch;
      }

      return true;
    });
  }
};
