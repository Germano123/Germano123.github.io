/**
 * Cozy Developer Laboratory — Runtime das Páginas de Ferramenta (Tools Lab)
 *
 * As páginas em `tools/<slug>.html` são geradas estaticamente por
 * `scripts/generate-tool-pages.js`, com o conteúdo bilíngue embutido em
 * `<script type="application/json" id="tool-data">`.
 *
 * Este runtime resolve dois bindings:
 *   - `data-i18n`      → rótulos globais do site (dictionário em js/i18n.js)
 *   - `data-ti`        → conteúdo específico da ferramenta (JSON embutido)
 *
 * Ao trocar o idioma, o conteúdo `data-ti` é re-resolvido sem recarregar a página.
 */

const ToolPage = {
  data: null,
  gallery: null,

  /**
   * Inicializa a página: lê o registro embutido, aplica os bindings e monta a galeria.
   */
  init() {
    this.data = this.readEmbeddedData();

    Components.renderHeader('tools');
    Components.renderFooter();

    this.applyBindings();

    const carousel = document.getElementById('project-carousel');
    if (carousel && this.data) {
      this.gallery = Gallery.mount(carousel, {
        items: this.data.gallery || [],
        getLang: () => getLanguage(),
        translate: (key) => t(key),
        resolveSrc: (src) => this.resolveAssetPath(src)
      });
    }

    // Re-resolve o conteúdo específico quando o idioma muda.
    window.addEventListener('languageChanged', () => {
      this.applyBindings();
      this.updateMeta();
      if (this.gallery) this.gallery.refresh();
    });
  },

  /**
   * Lê e faz o parse do registro canônico embutido na página.
   * @returns {Object|null}
   */
  readEmbeddedData() {
    const node = document.getElementById('tool-data');
    if (!node) return null;
    try {
      return JSON.parse(node.textContent);
    } catch (err) {
      console.error('[ToolPage] Falha ao ler o registro embutido:', err);
      return null;
    }
  },

  /**
   * Converte um caminho relativo à raiz do site em caminho relativo à página.
   * As páginas de ferramenta vivem em `tools/`, exigindo o prefixo `../`.
   * @param {string} path
   * @returns {string}
   */
  resolveAssetPath(path) {
    if (!path) return '';
    if (/^(https?:)?\/\//i.test(path) || path.startsWith('data:')) return path;
    if (path.startsWith('/')) return `..${path}`;
    if (path.startsWith('../') || path.startsWith('./')) return path;
    return `../${path}`;
  },

  /**
   * Resolve um dot-path sobre um objeto.
   * @param {Object} source
   * @param {string} dotPath - ex.: "workflowContext.metrics.0.label"
   * @returns {*}
   */
  resolve(source, dotPath) {
    if (!source || !dotPath) return undefined;
    return dotPath.split('.').reduce((acc, key) => {
      if (acc === null || acc === undefined) return undefined;
      return acc[key];
    }, source);
  },

  /**
   * Resolve um valor localizado (string ou {pt, en}) para o idioma ativo.
   * @param {*} value
   * @returns {string}
   */
  localize(value) {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      const lang = getLanguage();
      return value[lang] || value.pt || value.en || '';
    }
    return '';
  },

  /**
   * Aplica todos os bindings `data-ti*` presentes no documento.
   */
  applyBindings() {
    if (!this.data) return;

    // Conteúdo textual
    document.querySelectorAll('[data-ti]').forEach((el) => {
      const value = this.resolve(this.data, el.getAttribute('data-ti'));
      el.textContent = this.localize(value);
    });

    // Conteúdo com HTML permitido (escape hatch para <code>, <strong>, listas)
    document.querySelectorAll('[data-ti-html]').forEach((el) => {
      const value = this.resolve(this.data, el.getAttribute('data-ti-html'));
      el.innerHTML = this.localize(value);
    });

    // Listas: o elemento alvo recebe um <li> por item
    document.querySelectorAll('[data-ti-list]').forEach((el) => {
      const value = this.resolve(this.data, el.getAttribute('data-ti-list'));
      el.innerHTML = '';

      if (!Array.isArray(value)) return;

      value.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = this.localize(item);
        el.appendChild(li);
      });

      if (!value.length) {
        el.closest('section')?.setAttribute('data-empty', 'true');
      }
    });

    // Atributos (ex.: alt)
    document.querySelectorAll('[data-ti-alt]').forEach((el) => {
      const value = this.resolve(this.data, el.getAttribute('data-ti-alt'));
      el.setAttribute('alt', this.localize(value));
    });
  },

  /**
   * Atualiza <title> e <meta description> conforme o idioma ativo.
   */
  updateMeta() {
    if (!this.data) return;

    const title = this.localize(this.data.title);
    const summary = this.localize(this.data.summary);
    const description = (summary || title).replace(/\s+/g, ' ').trim().slice(0, 160);

    document.title = `${title} | Tools Lab | Germano Cozy Dev Lab`;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);
  }
};

if (typeof window !== 'undefined') {
  window.ToolPage = ToolPage;
}
