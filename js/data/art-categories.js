/**
 * Cozy Developer Laboratory — Categorias do Art Workshop
 *
 * Taxonomia canônica das três categorias principais de modelagem 3D.
 * Usada pela listagem (tag visual), pelos filtros e pelo template de página.
 *
 *   personagens → Personagens
 *   assets      → Assets
 *   animacoes   → Animações
 */

const ART_CATEGORIES = {
  personagens: {
    id: 'personagens',
    icon: '🎭',
    i18nKey: 'artCategoryCharacters',
    accent: 'purple',
    color: '#c084fc'
  },
  assets: {
    id: 'assets',
    icon: '🗿',
    i18nKey: 'artCategoryAssets',
    accent: 'green',
    color: '#34d399'
  },
  animacoes: {
    id: 'animacoes',
    icon: '🎬',
    i18nKey: 'artCategoryAnimations',
    accent: 'orange',
    color: '#fb923c'
  }
};

/** Ordem de exibição das categorias na listagem. */
const ART_CATEGORY_ORDER = ['personagens', 'assets', 'animacoes'];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ART_CATEGORIES, ART_CATEGORY_ORDER };
}
