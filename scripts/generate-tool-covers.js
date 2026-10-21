#!/usr/bin/env node
/**
 * Cozy Developer Laboratory — Gerador de Cenas de Placeholder para Ferramentas
 *
 * Produz as capas e miniaturas de galeria em `assets/tools/<slug>/` a partir
 * dos registros em `artifacts/tools-data/*.json`.
 *
 * Comportamento:
 *   - Arquivos existentes são PRESERVADOS (protege arte customizada).
 *   - Use `--force` para sobrescrever tudo com placeholders.
 *
 * Uso:
 *   node scripts/generate-tool-covers.js
 *   node scripts/generate-tool-covers.js --force
 *   node scripts/generate-tool-covers.js --examples   (inclui artifacts/tools-data/examples/)
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { xmlEscape, assertWellFormedSvg } = require('./lib/xml');

const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'artifacts', 'tools-data');
const ASSETS_DIR = path.join(ROOT, 'assets', 'tools');

const FORCE = process.argv.includes('--force');
const INCLUDE_EXAMPLES = process.argv.includes('--examples');

const ACCENT_COLORS = {
  green: '#10b981',
  orange: '#f97316',
  blue: '#0284c7',
  purple: '#9333ea',
  slate: '#64748b'
};

/**
 * Resolve um valor localizado ({pt,en} ou string).
 */
function loc(value, lang = 'pt') {
  if (!value) return '';
  if (typeof value === 'string') return value;
  return value[lang] || value.pt || value.en || '';
}

/**
 * Trunca um texto para caber na largura da legenda do SVG.
 */
function truncate(value, max = 72) {
  const text = String(value || '').trim();
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).trimEnd()}…`;
}

/**
 * Constrói o SVG de um asset (capa ou miniatura de galeria).
 */
function createSvg(tool, kind, index) {
  const slug = tool.slug;
  const color = ACCENT_COLORS[tool.accent] || ACCENT_COLORS.green;
  const title = xmlEscape(loc(tool.title));
  const isCover = kind === 'cover';

  const label = isCover
    ? 'PLACEHOLDER DE CAPA • COVER_PIC PREVIEW'
    : `PLACEHOLDER DE GALERIA • ${String(index + 1).padStart(2, '0')}`;

  const subtitle = isCover
    ? xmlEscape(truncate(loc(tool.subtitle) || 'Tools Lab', 76))
    : xmlEscape(truncate(loc((tool.gallery || [])[index]?.caption) || 'Captura de interface', 76));

  const badgeColor = '#94a3b8';
  const badgeBg = 'rgba(148, 163, 184, 0.12)';
  const borderPattern = 'stroke-dasharray="10 10"';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <defs>
    <radialGradient id="bg-${slug}-${kind}-${index}" cx="50%" cy="40%" r="80%">
      <stop offset="0%" stop-color="#26201b"/>
      <stop offset="100%" stop-color="#141211"/>
    </radialGradient>
    <linearGradient id="accent-${slug}-${kind}-${index}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${color}"/>
      <stop offset="100%" stop-color="#c8813b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="675" fill="url(#bg-${slug}-${kind}-${index})"/>
  <rect x="40" y="40" width="1120" height="595" rx="24" fill="none" stroke="#3d352e" stroke-width="2" ${borderPattern}/>

  <!-- Círculo Central e Ícone -->
  <circle cx="600" cy="240" r="105" fill="rgba(200, 129, 59, 0.08)" stroke="${color}" stroke-width="3"/>
  <text x="600" y="272" font-size="90" text-anchor="middle" font-family="sans-serif">${xmlEscape(tool.icon || '🔧')}</text>

  <!-- Título da Ferramenta -->
  <text x="600" y="400" font-size="44" font-weight="bold" fill="#ede3d4" text-anchor="middle" font-family="Fredoka, sans-serif">${title}</text>
  <rect x="360" y="425" width="480" height="4" rx="2" fill="url(#accent-${slug}-${kind}-${index})"/>

  <!-- Legenda -->
  <text x="600" y="470" font-size="22" font-weight="500" fill="${color}" text-anchor="middle" font-family="Fredoka, sans-serif">${subtitle}</text>

  <!-- Badge de originating -->
  <g transform="translate(600, 520)">
    <rect x="-230" y="-18" width="460" height="36" rx="18" fill="${badgeBg}" stroke="${badgeColor}" stroke-width="1.5"/>
    <text x="0" y="6" font-size="14" font-weight="bold" fill="${badgeColor}" text-anchor="middle" font-family="JetBrains Mono, monospace" letter-spacing="1.5">${label}</text>
  </g>

  <text x="600" y="590" font-size="14" fill="#a89f91" text-anchor="middle" font-family="JetBrains Mono, monospace">COZY DEV LAB • TOOLS LAB • ATIVOS DE DESENVOLVIMENTO</text>
</svg>`;
}

function main() {
  console.log('🎨 Cozy Developer Laboratory — Gerador de Capas de Ferramenta\n');

  if (!fs.existsSync(DATA_DIR)) {
    console.error(`❌ Diretório de dados não encontrado: ${DATA_DIR}\n`);
    process.exit(1);
  }

  const files = fs
    .readdirSync(DATA_DIR)
    .filter((f) => f.endsWith('.json') && f !== 'tool-page.schema.json')
    .sort();

  if (INCLUDE_EXAMPLES) {
    const exDir = path.join(DATA_DIR, 'examples');
    if (fs.existsSync(exDir)) {
      fs.readdirSync(exDir)
        .filter((f) => f.endsWith('.json'))
        .sort()
        .forEach((f) => files.push(path.join('examples', f)));
    }
  }

  if (!files.length) {
    console.error(`❌ Nenhum registro encontrado em ${DATA_DIR}\n`);
    process.exit(1);
  }

  let created = 0;
  let preserved = 0;

  for (const file of files) {
    const tool = JSON.parse(fs.readFileSync(path.join(DATA_DIR, file), 'utf8'));
    const dir = path.join(ASSETS_DIR, tool.slug);
    fs.mkdirSync(dir, { recursive: true });

    // Capa
    const coverPath = path.join(dir, 'cover.svg');
    if (fs.existsSync(coverPath) && !FORCE) {
      preserved++;
    } else {
      const coverSvg = createSvg(tool, 'cover', 0);
      assertWellFormedSvg(coverSvg, coverPath);
      fs.writeFileSync(coverPath, coverSvg, 'utf8');
      created++;
      console.log(`   ✏️  assets/tools/${tool.slug}/cover.svg`);
    }

    // Miniaturas de galeria
    (tool.gallery || []).forEach((item, index) => {
      const name = path.basename(item.src || `gallery-${String(index + 1).padStart(2, '0')}.svg`);
      const galleryPath = path.join(dir, name);
      if (fs.existsSync(galleryPath) && !FORCE) {
        preserved++;
        return;
      }
      const gallerySvg = createSvg(tool, 'gallery', index);
      assertWellFormedSvg(gallerySvg, galleryPath);
      fs.writeFileSync(galleryPath, gallerySvg, 'utf8');
      created++;
      console.log(`   ✏️  assets/tools/${tool.slug}/${name}`);
    });
  }

  console.log(`\n✅ ${created} criado(s), ${preserved} preservado(s).${FORCE ? ' (modo --force)' : ''}\n`);
}

if (require.main === module) {
  main();
}

module.exports = { createSvg, ACCENT_COLORS };
