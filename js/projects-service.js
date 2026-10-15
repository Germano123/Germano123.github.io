/**
 * Cozy Developer Laboratory — Serviço de Consulta de Projetos
 * Encapsula o acesso aos dados canônicos sem duplicação de lógica.
 */

const ProjectsService = {
  /**
   * Retorna todos os projetos públicos
   */
  getAllPublished() {
    return (PROJECTS || []).filter(p => p.visibility === 'public');
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
   * Retorna projetos do Art Workshop filtrados por categoria (todos, personagens, assets, animacoes)
   * Conforme Seção 4.1 de artifacts/2_portfolio_pages.md
   * @param {string} category 
   */
  getByArtCategory(category = 'all') {
    const artProjects = this.getByArea('art-workshop');
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
    return (PROJECTS || []).find(p => p.slug === slug && p.visibility === 'public') || null;
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
