/**
 * Cozy Developer Laboratory — Componente de Galeria (Carrossel + Lightbox)
 *
 * Módulo reutilizável, extraído da implementação original de `project.html`
 * para ser consumido tanto por páginas de projeto quanto pelas páginas
 * estáticas de ferramentas (`tools/<slug>.html`).
 *
 * API:
 *   Gallery.mount(carouselEl, options) → instância
 *   instance.setItems(items)           → troca a galeria e re-renderiza
 *   instance.refresh()                  → re-renderiza (usado na troca de idioma)
 *   instance.destroy()                 → remove listeners
 *
 * options:
 *   items      Array<{src, caption:{pt,en}|string, alt}>
 *   getLang    () => string            idioma atual ('pt' | 'en')
 *   translate  (key) => string         função de tradução (t)
 *   resolveSrc (src) => string         resolve o caminho do asset (padrão: identidade)
 */

(function (global) {
  'use strict';

  const Gallery = {
    /**
     * Monta o carrossel + lightbox sobre um elemento raiz.
     * @param {HTMLElement} root - elemento com a estrutura do carrossel
     * @param {Object} options
     * @returns {Object} instância da galeria
     */
    mount(root, options) {
      let items = (options.items || []).slice();
      const getLang = options.getLang || (() => 'pt');
      const translate = options.translate || ((key) => key);
      const resolveSrc = options.resolveSrc || ((src) => src);

      const el = {
        root,
        stage: root.querySelector('#carousel-stage'),
        mainImg: root.querySelector('#carousel-main-img'),
        caption: root.querySelector('#carousel-caption'),
        counter: root.querySelector('#carousel-counter'),
        dots: root.querySelector('#carousel-dots'),
        thumbs: root.querySelector('#carousel-thumbs'),
        prevBtn: root.querySelector('#carousel-prev-btn'),
        nextBtn: root.querySelector('#carousel-next-btn'),
        modal: document.getElementById('project-lightbox'),
        lbImg: document.getElementById('lightbox-img'),
        lbCaption: document.getElementById('lightbox-caption'),
        lbCounter: document.getElementById('lightbox-counter'),
        lbClose: document.querySelector('.lightbox-close-btn'),
        lbPrev: document.querySelector('.lightbox-nav-btn.prev'),
        lbNext: document.querySelector('.lightbox-nav-btn.next')
      };

      let index = 0;
      let lastFocused = null;
      let touchStartX = 0;

      /**
       * Resolve um texto localizado (string ou {pt, en}).
       */
      function localize(value) {
        if (!value) return '';
        if (typeof value === 'string') return value;
        const lang = getLang();
        return value[lang] || value.pt || value.en || '';
      }

      /**
       * Monta o HTML dos indicadores (dots) e das miniaturas (thumbs).
       */
      function renderDotsAndThumbs() {
        if (el.dots) {
          el.dots.innerHTML = items
            .map(
              (_, i) =>
                `<button type="button" class="carousel-dot ${i === 0 ? 'active' : ''}" data-carousel-index="${i}" aria-label="Slide ${i + 1}" aria-current="${i === 0 ? 'true' : 'false'}"></button>`
            )
            .join('');
        }

        if (el.thumbs) {
          el.thumbs.innerHTML = items
            .map((item, i) => {
              const caption = localize(item.caption);
              return `<button type="button" class="carousel-thumb-btn ${i === 0 ? 'active' : ''}" data-carousel-index="${i}" aria-label="${caption || `Slide ${i + 1}`}" aria-current="${i === 0 ? 'true' : 'false'}">
                        <img src="${resolveSrc(item.src)}" alt="${item.alt || `Preview ${i + 1}`}" loading="lazy">
                      </button>`;
            })
            .join('');
        }
      }

      /**
       * Alterna para um slide específico com transição de opacidade.
       */
      function goTo(i, animate) {
        if (!items.length) return;
        index = (i + items.length) % items.length;
        const item = items[index];
        const lang = getLang();

        if (el.mainImg) {
          const apply = () => {
            el.mainImg.src = resolveSrc(item.src);
            el.mainImg.alt = item.alt || '';
            el.mainImg.style.opacity = '1';
          };
          if (animate === false) {
            apply();
          } else {
            el.mainImg.style.opacity = '0.35';
            setTimeout(apply, 120);
          }
        }

        if (el.caption) {
          const apply = () => {
            el.caption.textContent = localize(item.caption);
            el.caption.style.opacity = '1';
          };
          if (animate === false) {
            apply();
          } else {
            el.caption.style.opacity = '0.35';
            setTimeout(apply, 120);
          }
        }

        if (el.counter) {
          el.counter.textContent = `${index + 1} ${translate('imageOf')} ${items.length}`;
        }

        root.querySelectorAll('.carousel-dot').forEach((dot, di) => {
          const active = di === index;
          dot.classList.toggle('active', active);
          dot.setAttribute('aria-current', active ? 'true' : 'false');
        });

        root.querySelectorAll('.carousel-thumb-btn').forEach((thumb, ti) => {
          const active = ti === index;
          thumb.classList.toggle('active', active);
          thumb.setAttribute('aria-current', active ? 'true' : 'false');
          if (active && typeof thumb.scrollIntoView === 'function') {
            thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          }
        });
      }

      /**
       * Abre o lightbox na imagem do slide atual.
       */
      function openLightbox(i) {
        if (!items.length || !el.modal) return;
        index = (i + items.length) % items.length;
        const item = items[index];

        lastFocused = document.activeElement;

        if (el.lbImg) {
          el.lbImg.src = resolveSrc(item.src);
          el.lbImg.alt = item.alt || '';
        }
        if (el.lbCaption) el.lbCaption.textContent = localize(item.caption);
        if (el.lbCounter) {
          el.lbCounter.textContent = `${index + 1} ${translate('imageOf')} ${items.length}`;
        }

        el.modal.classList.add('active');
        el.modal.setAttribute('aria-hidden', 'false');
        el.modal.removeAttribute('inert');
        document.body.style.overflow = 'hidden';

        if (el.lbClose) el.lbClose.focus();
      }

      /**
       * Fecha o lightbox e devolve o foco ao elemento de origem.
       */
      function closeLightbox() {
        if (!el.modal) return;
        el.modal.classList.remove('active');
        el.modal.setAttribute('aria-hidden', 'true');
        // Impede que elementos focáveis permaneçam na árvore de
        // acessibilidade enquanto o modal está fechado.
        el.modal.setAttribute('inert', '');
        document.body.style.overflow = '';
        if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
      }

      function nextImage() { openLightbox(index + 1); }
      function prevImage() { openLightbox(index - 1); }

      /* ---------------- Listeners ---------------- */

      const onPrevClick = (e) => { e.preventDefault(); goTo(index - 1); };
      const onNextClick = (e) => { e.preventDefault(); goTo(index + 1); };

      const onStageClick = (e) => {
        if (e.target.closest('.carousel-nav-btn')) return;
        openLightbox(index);
      };

      const onStageKey = (e) => {
        if (e.target.closest('.carousel-nav-btn')) return;
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(index);
        }
      };

      const onRootKey = (e) => {
        if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(index - 1); }
        if (e.key === 'ArrowRight') { e.preventDefault(); goTo(index + 1); }
      };

      const onDotClick = (e) => {
        const btn = e.target.closest('.carousel-dot');
        if (!btn) return;
        goTo(parseInt(btn.getAttribute('data-carousel-index'), 10));
      };

      const onThumbClick = (e) => {
        const btn = e.target.closest('.carousel-thumb-btn');
        if (!btn) return;
        goTo(parseInt(btn.getAttribute('data-carousel-index'), 10));
      };

      const onTouchStart = (e) => {
        touchStartX = e.changedTouches[0].screenX;
      };

      const onTouchEnd = (e) => {
        const delta = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(delta) < 45) return;
        goTo(delta < 0 ? index + 1 : index - 1);
      };

      const onModalClick = (e) => {
        if (e.target === el.modal || e.target.classList.contains('lightbox-wrapper') || e.target.classList.contains('lightbox-stage')) {
          closeLightbox();
        }
      };

      const onWindowKey = (e) => {
        if (!el.modal || el.modal.getAttribute('aria-hidden') === 'true') return;
        if (e.key === 'Escape') { e.preventDefault(); closeLightbox(); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); prevImage(); }
        if (e.key === 'ArrowRight') { e.preventDefault(); nextImage(); }
      };

      if (el.prevBtn) el.prevBtn.addEventListener('click', onPrevClick);
      if (el.nextBtn) el.nextBtn.addEventListener('click', onNextClick);
      if (el.stage) {
        el.stage.addEventListener('click', onStageClick);
        el.stage.addEventListener('keydown', onStageKey);
      }
      root.addEventListener('keydown', onRootKey);
      root.addEventListener('click', onDotClick);
      root.addEventListener('click', onThumbClick);
      root.addEventListener('touchstart', onTouchStart, { passive: true });
      root.addEventListener('touchend', onTouchEnd, { passive: true });

      if (el.lbClose) el.lbClose.addEventListener('click', closeLightbox);
      if (el.lbNext) el.lbNext.addEventListener('click', (e) => { e.stopPropagation(); nextImage(); });
      if (el.lbPrev) el.lbPrev.addEventListener('click', (e) => { e.stopPropagation(); prevImage(); });
      if (el.modal) el.modal.addEventListener('click', onModalClick);
      window.addEventListener('keydown', onWindowKey);

      /* ---------------- API pública ---------------- */

      renderDotsAndThumbs();
      goTo(0, false);

      return {
        get index() { return index; },

        setItems(newItems) {
          items = (newItems || []).slice();
          renderDotsAndThumbs();
          goTo(0, false);
        },

        refresh() {
          renderDotsAndThumbs();
          goTo(index, false);
        },

        destroy() {
          if (el.prevBtn) el.prevBtn.removeEventListener('click', onPrevClick);
          if (el.nextBtn) el.nextBtn.removeEventListener('click', onNextClick);
          if (el.stage) {
            el.stage.removeEventListener('click', onStageClick);
            el.stage.removeEventListener('keydown', onStageKey);
          }
          root.removeEventListener('keydown', onRootKey);
          root.removeEventListener('click', onDotClick);
          root.removeEventListener('click', onThumbClick);
          root.removeEventListener('touchstart', onTouchStart);
          root.removeEventListener('touchend', onTouchEnd);
          if (el.lbClose) el.lbClose.removeEventListener('click', closeLightbox);
          if (el.modal) el.modal.removeEventListener('click', onModalClick);
          window.removeEventListener('keydown', onWindowKey);
        }
      };
    }
  };

  global.Gallery = Gallery;
})(window);
