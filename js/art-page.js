/**
 * Cozy Developer Laboratory — Runtime das Páginas de Arte (Art Workshop)
 *
 * As páginas em `art/<slug>.html` são geradas estaticamente por
 * `scripts/generate-art-pages.js`, com o registro bilíngue embutido em
 * `<script type="application/json" id="art-data">`.
 *
 * Este runtime resolve:
 *   - `data-i18n`  → rótulos globais do site (dictionário js/i18n.js)
 *   - `data-ti*`   → conteúdo específico do trabalho (JSON embutido)
 *
 * E implementa:
 *   - alternância entre múltiplos carrosséis (padrão `<slug>-carrossel-<grupo>-<item>`)
 *   - fallback do vídeo principal para a imagem de banner
 */

const ArtPage = {
  data: null,
  gallery: null,
  activeCarousel: 0,

  /**
   * Inicializa a página.
   */
  init() {
    this.data = this.readEmbeddedData();

    Components.renderHeader('art');
    Components.renderFooter();

    this.applyBindings();
    this.setupVideoFallback();
    this.setupCarouselTabs();
    this.mountGallery();

    window.addEventListener('languageChanged', () => {
      this.applyBindings();
      this.updateMeta();
      if (this.gallery) this.gallery.refresh();
    });
  },

  /**
   * Lê o registro canônico embutido.
   * @returns {Object|null}
   */
  readEmbeddedData() {
    const node = document.getElementById('art-data');
    if (!node) return null;
    try {
      return JSON.parse(node.textContent);
    } catch (err) {
      console.error('[ArtPage] Falha ao ler o registro embutido:', err);
      return null;
    }
  },

  /**
   * Converte um caminho relativo à raiz do site em caminho relativo à página.
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
   */
  resolve(source, dotPath) {
    if (!source || !dotPath) return undefined;
    return dotPath.split('.').reduce((acc, key) => {
      if (acc === null || acc === undefined) return undefined;
      return acc[key];
    }, source);
  },

  /**
   * Resolve um valor localizado.
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
   * Aplica os bindings `data-ti*`.
   */
  applyBindings() {
    if (!this.data) return;

    document.querySelectorAll('[data-ti]').forEach((el) => {
      el.textContent = this.localize(this.resolve(this.data, el.getAttribute('data-ti')));
    });

    document.querySelectorAll('[data-ti-html]').forEach((el) => {
      el.innerHTML = this.localize(this.resolve(this.data, el.getAttribute('data-ti-html')));
    });

    document.querySelectorAll('[data-ti-list]').forEach((el) => {
      const value = this.resolve(this.data, el.getAttribute('data-ti-list'));
      el.innerHTML = '';
      if (!Array.isArray(value)) return;
      value.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = this.localize(item);
        el.appendChild(li);
      });
    });

    document.querySelectorAll('[data-ti-alt]').forEach((el) => {
      el.setAttribute('alt', this.localize(this.resolve(this.data, el.getAttribute('data-ti-alt'))));
    });
  },

  /**
   * Se o vídeo principal não carregar, exibe a imagem de banner no lugar.
   */
  setupVideoFallback() {
    const video = document.querySelector('.art-hero--video video');
    if (!video) return;

    const fallback = () => {
      const figure = video.closest('.art-hero');
      if (!figure || figure.dataset.fallbackApplied === 'true') return;
      figure.dataset.fallbackApplied = 'true';

      const src = this.data?.banner?.src || this.data?.video?.poster;
      if (!src) {
        figure.classList.remove('art-hero--video');
        video.remove();
        return;
      }

      const img = document.createElement('img');
      img.className = 'art-hero-media';
      img.src = this.resolveAssetPath(src);
      img.alt = this.localize(this.data?.title);
      figure.classList.remove('art-hero--video');
      figure.classList.add('art-hero--image');
      video.replaceWith(img);
    };

    video.addEventListener('error', fallback);
    if (video.readyState === 3 && video.error) fallback();
  },

  /**
   * Liga as abas de carrossel (projetos com mais de um carrossel).
   */
  setupCarouselTabs() {
    const tabs = document.querySelectorAll('.art-carousel-tab');
    if (!tabs.length) return;

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const group = parseInt(tab.getAttribute('data-carousel-group'), 10);
        this.activeCarousel = group;
        this.updateTabState();
        this.setCarouselItems();
      });
    });
  },

  /**
   * Atualiza o estado visual das abas de carrossel.
   */
  updateTabState() {
    document.querySelectorAll('.art-carousel-tab').forEach((tab) => {
      const isActive = parseInt(tab.getAttribute('data-carousel-group'), 10) === this.activeCarousel;
      tab.classList.toggle('active', isActive);
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
  },

  /**
   * Devolve os itens do carrossel ativo.
   */
  getActiveCarouselItems() {
    const carousels = this.data?.carousels || [];
    if (!carousels.length) return [];
    const found = carousels.find((g) => g.index === this.activeCarousel);
    return (found || carousels[0]).items.map((item) => ({
      ...item,
      src: this.resolveAssetPath(item.src)
    }));
  },

  /**
   * Troca os itens exibidos no carrossel.
   */
  setCarouselItems() {
    if (!this.gallery) return;
    this.gallery.setItems(this.getActiveCarouselItems());
  },

  /**
   * Monta o carrossel principal.
   */
  mountGallery() {
    const carousel = document.getElementById('project-carousel');
    if (!carousel || !this.data) return;

    this.gallery = Gallery.mount(carousel, {
      items: this.getActiveCarouselItems(),
      getLang: () => getLanguage(),
      translate: (key) => t(key),
      resolveSrc: (src) => this.resolveAssetPath(src)
    });
  },

  /**
   * Atualiza `<title>` e metadatas conforme o idioma ativo.
   */
  updateMeta() {
    if (!this.data) return;

    const title = this.localize(this.data.title);
    const summary = this.localize(this.data.summary);
    const description = (summary || title).replace(/\s+/g, ' ').trim().slice(0, 160);

    document.title = `${title} | Art Workshop | Germano Cozy Dev Lab`;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);
  }
};

if (typeof window !== 'undefined') {
  window.ArtPage = ArtPage;
}
