#!/usr/bin/env node
/**
 * Cozy Developer Laboratory — Gerador de Mídia Placeholder do Art Workshop
 *
 * Produz as imagens de banner e de carrossel em `assets/art/<slug>/` a partir
 * dos registros em `artifacts/art-data/*.json`.
 *
 * Os arquivos respeitam a convenção de nomes do projeto:
 *   <slug>-banner.png
 *   <slug>-carrossel-<grupo>-<item>.png
 *
 * O agrupamento em carrosséis é deduzido dessa convenção pelo gerador de
 * páginas (`scripts/templates/art-page.template.js`).
 *
 * Comportamento:
 *   - Arquivos existentes são PRESERVADOS (protege arte final).
 *   - Use `--force` para sobrescrever tudo.
 *
 * Uso:
 *   node scripts/generate-art-assets.js
 *   node scripts/generate-art-assets.js --force
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { encodePng } = require('./lib/png');
const { groupCarousels, parseCarouselName } = require('./templates/art-page.template');
const { ART_CATEGORIES } = require('../js/data/art-categories.js');

const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'artifacts', 'art-data');
const ASSETS_DIR = path.join(ROOT, 'assets', 'art');

const FORCE = process.argv.includes('--force');

const WIDTH = 1200;
const HEIGHT = 675;

/* ------------------------------------------------------------------ */
/* Paleta por categoria                                               */
/* ------------------------------------------------------------------ */

const CATEGORY_PALETTE = {
  personagens: { base: [26, 16, 40], accent: [192, 132, 252], deep: [12, 7, 20] },
  assets: { base: [8, 32, 24], accent: [52, 211, 153], deep: [4, 16, 12] },
  animacoes: { base: [38, 20, 10], accent: [251, 146, 60], deep: [18, 9, 5] }
};

/* ------------------------------------------------------------------ */
/* Fonte de dígitos 3x5 (para indicar grupo e item)                  */
/* ------------------------------------------------------------------ */

const DIGIT_FONT = {
  0: ['111', '101', '101', '101', '111'],
  1: ['010', '110', '010', '010', '111'],
  2: ['111', '001', '111', '100', '111'],
  3: ['111', '001', '111', '001', '111'],
  4: ['101', '101', '111', '001', '001'],
  5: ['111', '100', '111', '001', '111'],
  6: ['111', '100', '111', '101', '111'],
  7: ['111', '001', '010', '010', '010'],
  8: ['111', '101', '111', '101', '111'],
  9: ['111', '101', '111', '001', '111']
};

/* ------------------------------------------------------------------ */
/* Desenho                                                            */
/* ------------------------------------------------------------------ */

/**
 * Mistura duas cores.
 */
function mix(a, b, t) {
  return [
    Math.round(a[0] + (b[0] - a[0]) * t),
    Math.round(a[1] + (b[1] - a[1]) * t),
    Math.round(a[2] + (b[2] - a[2]) * t)
  ];
}

/**
 * Desenha um dígito (3x5) escalado na imagem.
 */
function drawDigit(pixels, W, H, digit, originX, originY, scale, color) {
  const glyph = DIGIT_FONT[digit];
  if (!glyph) return;
  for (let gy = 0; gy < glyph.length; gy++) {
    for (let gx = 0; gx < glyph[gy].length; gx++) {
      if (glyph[gy][gx] !== '1') continue;
      for (let sy = 0; sy < scale; sy++) {
        for (let sx = 0; sx < scale; sx++) {
          const px = originX + gx * scale + sx;
          const py = originY + gy * scale + sy;
          if (px < 0 || py < 0 || px >= W || py >= H) continue;
          pixels[py * W + px] = color;
        }
      }
    }
  }
}

/**
 * Desenha a etiqueta "G-I" (grupo-item) no canto superior esquerdo.
 */
function drawLabel(pixels, W, H, group, item, color) {
  const scale = 8;
  const originX = 48;
  const originY = 48;
  const step = 4 * scale; // 3 colunas + 1 de espaçamento

  drawDigit(pixels, W, H, group, originX, originY, scale, color);
  drawDigit(pixels, W, H, item, originX + step, originY, scale, color);

  // Separador
  for (let sy = 0; sy < 5 * scale; sy++) {
    for (let sx = 0; sx < scale; sx++) {
      const px = originX + 3 * scale + Math.floor(sx / 2);
      const py = originY + 2 * scale + sy;
      if (px < 0 || py < 0 || px >= W || py >= H) continue;
      pixels[py * W + px] = color;
    }
  }
}

/**
 * Desenha um símbolo geométrico central conforme a categoria.
 */
function drawGlyph(pixels, W, H, category, color) {
  const cx = W / 2;
  const cy = H / 2;
  const R = 150;

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const dx = x - cx;
      const dy = y - cy;

      let inside = false;

      if (category === 'personagens') {
        // Silhueta: cabeça + ombros
        const head = dx * dx + dy * dy <= (R * 0.55) ** 2;
        const shoulders = dy > 0 && dy < R && Math.abs(dx) < R * 0.95 - dy * 0.25;
        inside = head || shoulders;
      } else if (category === 'assets') {
        // Losango
        inside = Math.abs(dx) + Math.abs(dy) <= R;
      } else {
        // Triângulo (play)
        const t = (dx + R * 0.7) / (R * 1.4);
        inside = t >= 0 && t <= 1 && Math.abs(dy) <= (1 - t) * R * 0.85;
      }

      if (inside) {
        pixels[y * W + x] = mix(color, [255, 255, 255], 0.12);
      }
    }
  }
}

/**
 * Renderiza um placeholder PNG.
 */
function renderPlaceholder(category, label) {
  const palette = CATEGORY_PALETTE[category] || CATEGORY_PALETTE.assets;
  const pixels = new Array(WIDTH * HEIGHT);

  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      // Gradiente diagonal do fundo
      const t = (x / WIDTH) * 0.55 + (y / HEIGHT) * 0.45;
      let color = mix(palette.deep, palette.base, t);

      // Halo radial no centro
      const dx = (x - WIDTH / 2) / (WIDTH / 2);
      const dy = (y - HEIGHT / 2) / (HEIGHT / 2);
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 0.85) {
        color = mix(color, palette.accent, (1 - dist / 0.85) * 0.14);
      }

      // Hachura diagonal discreta
      if ((x + y) % 34 < 2) {
        color = mix(color, palette.accent, 0.07);
      }

      // Borda interna
      const edge = Math.min(x, y, WIDTH - 1 - x, HEIGHT - 1 - y);
      if (edge < 3) {
        color = mix(color, palette.accent, 0.45);
      }

      pixels[y * WIDTH + x] = color;
    }
  }

  drawGlyph(pixels, WIDTH, HEIGHT, category, palette.accent);

  if (label) {
    drawLabel(pixels, WIDTH, HEIGHT, label.group, label.item, palette.accent);
  }

  return encodePng(WIDTH, HEIGHT, (x, y) => pixels[y * WIDTH + x]);
}

/* ------------------------------------------------------------------ */
/* Execução                                                           */
/* ------------------------------------------------------------------ */

function main() {
  console.log('🎨 Cozy Developer Laboratory — Mídia Placeholder do Art Workshop\n');

  if (!fs.existsSync(DATA_DIR)) {
    console.error(`❌ Diretório de dados não encontrado: ${DATA_DIR}\n`);
    process.exit(1);
  }

  const files = fs
    .readdirSync(DATA_DIR)
    .filter((f) => f.endsWith('.json') && f !== 'art-page.schema.json')
    .sort();

  if (!files.length) {
    console.error(`❌ Nenhum registro encontrado em ${DATA_DIR}\n`);
    process.exit(1);
  }

  let created = 0;
  let preserved = 0;

  for (const file of files) {
    const art = JSON.parse(fs.readFileSync(path.join(DATA_DIR, file), 'utf8'));
    const category = art.mainCategory;
    const dir = path.join(ASSETS_DIR, art.slug);
    fs.mkdirSync(dir, { recursive: true });

    const write = (relativePath, buffer) => {
      const target = path.join(ROOT, relativePath);
      fs.mkdirSync(path.dirname(target), { recursive: true });
      if (fs.existsSync(target) && !FORCE) {
        preserved++;
        return;
      }
      fs.writeFileSync(target, buffer);
      created++;
      console.log(`   ✏️  ${relativePath}`);
    };

    // Banner
    const bannerSrc = art.banner?.src || art.cover_pic;
    if (bannerSrc) {
      write(bannerSrc, renderPlaceholder(category, null));
    }

    // Carrosséis — o rótulo indica grupo e item.
    const carousels = groupCarousels(art.media || []);
    carousels.forEach((group) => {
      group.items.forEach((item, index) => {
        const parsed = parseCarouselName(item.src);
        const label = {
          group: parsed ? parsed.group : group.index,
          item: parsed ? parsed.order : index + 1
        };
        write(item.src, renderPlaceholder(category, label));
      });
    });
  }

  console.log(`\n✅ ${created} criada(s), ${preserved} preservada(s).${FORCE ? ' (modo --force)' : ''}\n`);
}

if (require.main === module) {
  main();
}

module.exports = { renderPlaceholder, CATEGORY_PALETTE };
