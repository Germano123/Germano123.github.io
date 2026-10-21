#!/usr/bin/env node
/**
 * Cozy Developer Laboratory — Gerador de Capas Ilustradas das Ferramentas
 *
 * Produz as capas vetoriais autorais em `assets/tools/<slug>/cover.svg`.
 * Mesma abordagem de `scripts/generate-custom-covers.js` (jogos), porém para
 * o Tools Lab. Deve rodar DEPOIS de `scripts/generate-tool-covers.js`.
 *
 * Uso:
 *   node scripts/generate-custom-tool-covers.js
 *   node scripts/generate-custom-tool-covers.js --force
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const ASSETS_DIR = path.join(ROOT, 'assets', 'tools');
const FORCE = process.argv.includes('--force');

/* ------------------------------------------------------------------ */
/* GameFlow Connect — Google Drive + Git + assets no repositório      */
/* ------------------------------------------------------------------ */

const gameflowConnect = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <defs>
    <radialGradient id="bg-gfc" cx="50%" cy="28%" r="85%">
      <stop offset="0%" stop-color="#10301f"/>
      <stop offset="60%" stop-color="#0a1f14"/>
      <stop offset="100%" stop-color="#040f0a"/>
    </radialGradient>
    <linearGradient id="gfc-accent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399"/>
      <stop offset="100%" stop-color="#10b981"/>
    </linearGradient>
    <linearGradient id="gfc-flow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#60a5fa"/>
      <stop offset="50%" stop-color="#34d399"/>
      <stop offset="100%" stop-color="#f97316"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="675" fill="url(#bg-gfc)"/>

  <!-- Grade técnica de fundo -->
  <g opacity="0.14" stroke="#34d399" stroke-width="1.2">
    <line x1="60" y1="200" x2="1140" y2="200"/>
    <line x1="60" y1="280" x2="1140" y2="280"/>
    <line x1="60" y1="360" x2="1140" y2="360"/>
    <line x1="60" y1="440" x2="1140" y2="440"/>
    <line x1="180" y1="120" x2="180" y2="540"/>
    <line x1="340" y1="120" x2="340" y2="540"/>
    <line x1="860" y1="120" x2="860" y2="540"/>
    <line x1="1020" y1="120" x2="1020" y2="540"/>
  </g>

  <rect x="36" y="36" width="1128" height="603" rx="20" fill="none" stroke="#14532d" stroke-width="2"/>

  <!-- ===== Coluna esquerda: Google Drive (triângulo) ===== -->
  <g transform="translate(150, 175)">
    <circle cx="60" cy="60" r="92" fill="none" stroke="#34d399" stroke-width="1.5" stroke-dasharray="8 6" opacity="0.45"/>
    <polygon points="60,12 108,108 12,108" fill="#0f9d58" opacity="0.28"/>
    <polygon points="60,12 108,108 76,108" fill="#00ac47" opacity="0.92"/>
    <polygon points="60,12 44,108 12,108" fill="#f4b400" opacity="0.92"/>
    <polygon points="12,108 108,108 60,12" fill="none" stroke="#34d399" stroke-width="2.5" stroke-linejoin="round"/>
    <text x="60" y="140" font-size="13" font-weight="bold" fill="#34d399" text-anchor="middle" font-family="JetBrains Mono, monospace" letter-spacing="1">GOOGLE DRIVE</text>
  </g>

  <!-- ===== Fluxo central: pacotes de asset viajando ===== -->
  <g transform="translate(320, 240)">
    <path d="M0,40 C120,-10 300,-10 420,40" fill="none" stroke="url(#gfc-flow)" stroke-width="3" stroke-dasharray="12 9" stroke-linecap="round"/>
    <path d="M0,90 C120,150 300,150 420,90" fill="none" stroke="url(#gfc-flow)" stroke-width="2" stroke-dasharray="6 10" stroke-linecap="round" opacity="0.55"/>

    <!-- Pacote de asset em trânsito -->
    <g transform="translate(180, 12)">
      <rect x="-26" y="-26" width="52" height="52" rx="10" fill="#052e16" stroke="#34d399" stroke-width="2"/>
      <path d="M-13,-8 L0,-18 L13,-8 L13,12 L-13,12 Z" fill="#34d399" opacity="0.85"/>
      <text x="0" y="46" font-size="10" font-weight="bold" fill="#6ee7b7" text-anchor="middle" font-family="JetBrains Mono, monospace">ASSET</text>
    </g>
    <g transform="translate(320, 66)">
      <rect x="-22" y="-22" width="44" height="44" rx="9" fill="#052e16" stroke="#f97316" stroke-width="2"/>
      <path d="M-10,-6 L0,-14 L10,-6 L10,10 L-10,10 Z" fill="#f97316" opacity="0.9"/>
    </g>
  </g>

  <!-- ===== Coluna direita: grafo Git ===== -->
  <g transform="translate(900, 160)">
    <!-- Ramos -->
    <g stroke="#34d399" stroke-width="2.6" fill="none" stroke-linecap="round">
      <path d="M30,40 L30,150"/>
      <path d="M30,90 C30,60 90,60 90,40"/>
      <path d="M30,130 C30,100 150,100 150,70"/>
      <path d="M90,40 L90,12"/>
    </g>
    <!-- Nós -->
    <circle cx="30" cy="40" r="13" fill="#052e16" stroke="#34d399" stroke-width="2.5"/>
    <circle cx="30" cy="150" r="13" fill="#052e16" stroke="#34d399" stroke-width="2.5"/>
    <circle cx="90" cy="40" r="11" fill="#052e16" stroke="#6ee7b7" stroke-width="2.5"/>
    <circle cx="90" cy="12" r="9" fill="#34d399"/>
    <circle cx="150" cy="70" r="11" fill="#052e16" stroke="#f97316" stroke-width="2.5"/>
    <circle cx="30" cy="40" r="5" fill="#34d399"/>
    <circle cx="30" cy="150" r="5" fill="#34d399"/>
    <text x="95" y="200" font-size="13" font-weight="bold" fill="#34d399" text-anchor="middle" font-family="JetBrains Mono, monospace" letter-spacing="1">GIT REPO</text>
  </g>

  <!-- ===== Título ===== -->
  <text x="600" y="418" font-size="54" font-weight="700" fill="#f8fafc" text-anchor="middle" font-family="Fredoka, sans-serif" letter-spacing="0.5">GameFlow Connect</text>
  <rect x="340" y="438" width="520" height="4" rx="2" fill="url(#gfc-accent)"/>
  <text x="600" y="478" font-size="21" font-weight="500" fill="#6ee7b7" text-anchor="middle" font-family="Fredoka, sans-serif">Open Source • Google Drive ↔ Git • Assets no Código</text>

  <!-- ===== Badge ===== -->
  <g transform="translate(600, 528)">
    <rect x="-215" y="-19" width="430" height="38" rx="19" fill="rgba(52, 211, 153, 0.14)" stroke="#34d399" stroke-width="1.8"/>
    <text x="0" y="6" font-size="14" font-weight="bold" fill="#34d399" text-anchor="middle" font-family="JetBrains Mono, monospace" letter-spacing="1.2">🔓 OPEN SOURCE • INTEGRAÇÃO DE ASSETS</text>
  </g>

  <text x="600" y="600" font-size="13" fill="#4b7c64" text-anchor="middle" font-family="JetBrains Mono, monospace">COZY DEVELOPER LABORATORY • TOOLS LAB • PIPELINE DE INTEGRAÇÃO</text>
</svg>`;

/* ------------------------------------------------------------------ */
/* Cardinal — simulador de mundos, JSON e malhas procedurais          */
/* ------------------------------------------------------------------ */

const cardinal = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
  <defs>
    <radialGradient id="bg-card" cx="46%" cy="30%" r="85%">
      <stop offset="0%" stop-color="#33200f"/>
      <stop offset="60%" stop-color="#1e1409"/>
      <stop offset="100%" stop-color="#0d0906"/>
    </radialGradient>
    <linearGradient id="card-accent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fb923c"/>
      <stop offset="100%" stop-color="#f97316"/>
    </linearGradient>
    <linearGradient id="card-mesh" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fb923c"/>
      <stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="675" fill="url(#bg-card)"/>

  <!-- Grade de tile nodes ao fundo -->
  <g opacity="0.16" stroke="#fb923c" stroke-width="1.2">
    <line x1="60" y1="170" x2="1140" y2="170"/>
    <line x1="60" y1="250" x2="1140" y2="250"/>
    <line x1="60" y1="330" x2="1140" y2="330"/>
    <line x1="60" y1="410" x2="1140" y2="410"/>
    <line x1="60" y1="490" x2="1140" y2="490"/>
  </g>

  <rect x="36" y="36" width="1128" height="603" rx="20" fill="none" stroke="#5a3413" stroke-width="2"/>

  <!-- ===== Mundo em tile nodes (esfera) ===== -->
  <g transform="translate(215, 130)">
    <circle cx="110" cy="110" r="108" fill="#1a1108" stroke="#fb923c" stroke-width="2" opacity="0.9"/>
    <!-- Tiles do mundo -->
    <g fill="url(#card-mesh)">
      <rect x="46" y="26" width="22" height="22" rx="3" opacity="0.95"/>
      <rect x="74" y="26" width="22" height="22" rx="3" opacity="0.75"/>
      <rect x="102" y="26" width="22" height="22" rx="3" opacity="0.95"/>
      <rect x="130" y="26" width="22" height="22" rx="3" opacity="0.5"/>
      <rect x="158" y="26" width="22" height="22" rx="3" opacity="0.7"/>
      <rect x="60" y="54" width="22" height="22" rx="3" opacity="0.6"/>
      <rect x="88" y="54" width="22" height="22" rx="3" opacity="0.95"/>
      <rect x="116" y="54" width="22" height="22" rx="3" opacity="0.8"/>
      <rect x="144" y="54" width="22" height="22" rx="3" opacity="0.95"/>
      <rect x="172" y="54" width="22" height="22" rx="3" opacity="0.45"/>
      <rect x="46" y="82" width="22" height="22" rx="3" opacity="0.85"/>
      <rect x="74" y="82" width="22" height="22" rx="3" opacity="0.55"/>
      <rect x="102" y="82" width="22" height="22" rx="3" opacity="0.95"/>
      <rect x="130" y="82" width="22" height="22" rx="3" opacity="0.7"/>
      <rect x="158" y="82" width="22" height="22" rx="3" opacity="0.9"/>
      <rect x="60" y="110" width="22" height="22" rx="3" opacity="0.5"/>
      <rect x="88" y="110" width="22" height="22" rx="3" opacity="0.9"/>
      <rect x="116" y="110" width="22" height="22" rx="3" opacity="0.65"/>
      <rect x="144" y="110" width="22" height="22" rx="3" opacity="0.95"/>
      <rect x="74" y="138" width="22" height="22" rx="3" opacity="0.7"/>
      <rect x="102" y="138" width="22" height="22" rx="3" opacity="0.85"/>
      <rect x="130" y="138" width="22" height="22" rx="3" opacity="0.5"/>
      <rect x="102" y="166" width="22" height="22" rx="3" opacity="0.65"/>
    </g>
    <!-- Bússola (cardinal) -->
    <g transform="translate(196, 168)">
      <circle cx="0" cy="0" r="34" fill="#1a1108" stroke="#fb923c" stroke-width="2"/>
      <polygon points="0,-24 9,0 0,24 -9,0" fill="#fb923c" opacity="0.9"/>
      <polygon points="0,24 9,0 0,-24 -9,0" fill="#7c2d12" opacity="0.75"/>
      <text x="0" y="-40" font-size="13" font-weight="bold" fill="#fb923c" text-anchor="middle" font-family="JetBrains Mono, monospace">N</text>
    </g>
    <text x="110" y="248" font-size="13" font-weight="bold" fill="#fb923c" text-anchor="middle" font-family="JetBrains Mono, monospace" letter-spacing="1">TILE NODES</text>
  </g>

  <!-- ===== Documento JSON exportado ===== -->
  <g transform="translate(790, 145)">
    <rect x="14" y="14" width="260" height="220" rx="14" fill="#000" opacity="0.4"/>
    <rect width="260" height="220" rx="14" fill="#181009" stroke="#fb923c" stroke-width="2"/>
    <path d="M0,14 Q0,0 14,0 L246,0 Q260,0 260,14 L260,42 L0,42 Z" fill="#2a1a0d"/>
    <circle cx="24" cy="21" r="6" fill="#ef4444"/>
    <circle cx="44" cy="21" r="6" fill="#f59e0b"/>
    <circle cx="64" cy="21" r="6" fill="#10b981"/>
    <text x="130" y="26" font-size="12" font-weight="600" fill="#a8825f" text-anchor="middle" font-family="JetBrains Mono, monospace">world.export.json</text>

    <text x="20" y="76" font-size="22" font-weight="bold" fill="#fb923c" font-family="JetBrains Mono, monospace">{</text>
    <text x="42" y="98" font-size="13" fill="#d8ceba" font-family="JetBrains Mono, monospace">"seed": 4417,</text>
    <text x="42" y="122" font-size="13" fill="#d8ceba" font-family="JetBrains Mono, monospace">"rules": [ ... ],</text>
    <text x="42" y="146" font-size="13" fill="#d8ceba" font-family="JetBrains Mono, monospace">"entities": 1284,</text>
    <text x="42" y="170" font-size="13" fill="#a8825f" font-family="JetBrains Mono, monospace">"mesh": "tile-nodes"</text>
    <text x="20" y="200" font-size="22" font-weight="bold" fill="#fb923c" font-family="JetBrains Mono, monospace">}</text>
  </g>

  <!-- ===== Malha procedural flutuante ===== -->
  <g transform="translate(600, 132)" opacity="0.95">
    <path d="M0,60 L40,30 L80,60 L80,120 L40,150 L0,120 Z" fill="none" stroke="url(#card-mesh)" stroke-width="2.5"/>
    <path d="M0,60 L40,90 L80,60 M40,30 L40,90 M40,90 L40,150" fill="none" stroke="url(#card-mesh)" stroke-width="1.6" opacity="0.7"/>
    <circle cx="40" cy="90" r="6" fill="#fb923c"/>
  </g>

  <!-- ===== Título ===== -->
  <text x="600" y="418" font-size="56" font-weight="700" fill="#f8fafc" text-anchor="middle" font-family="Fredoka, sans-serif" letter-spacing="3">Cardinal</text>
  <rect x="380" y="438" width="440" height="4" rx="2" fill="url(#card-accent)"/>
  <text x="600" y="478" font-size="21" font-weight="500" fill="#fb923c" text-anchor="middle" font-family="Fredoka, sans-serif">Simulador de Mundos • Exportação JSON • Malhas Procedurais</text>

  <!-- ===== Badge ===== -->
  <g transform="translate(600, 528)">
    <rect x="-225" y="-19" width="450" height="38" rx="19" fill="rgba(251, 146, 60, 0.14)" stroke="#fb923c" stroke-width="1.8"/>
    <text x="0" y="6" font-size="14" font-weight="bold" fill="#fb923c" text-anchor="middle" font-family="JetBrains Mono, monospace" letter-spacing="1.2">🧭 SIMULADOR DE MUNDOS • GERAÇÃO PROCEDURAL</text>
  </g>

  <text x="600" y="600" font-size="13" fill="#8a5c33" text-anchor="middle" font-family="JetBrains Mono, monospace">COZY DEVELOPER LABORATORY • TOOLS LAB • WORLD SIMULATION &amp; PROCEDURAL ASSETS</text>
</svg>`;

/* ------------------------------------------------------------------ */

const covers = {
  'gameflow-connect': gameflowConnect,
  'cardinal': cardinal
};

function main() {
  console.log('🎨 Cozy Developer Laboratory — Capas Ilustradas das Ferramentas\n');

  let created = 0;
  let preserved = 0;

  for (const [slug, svg] of Object.entries(covers)) {
    const dir = path.join(ASSETS_DIR, slug);
    const file = path.join(dir, 'cover.svg');

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    if (fs.existsSync(file) && !FORCE) {
      preserved++;
      console.log(`   ➖ assets/tools/${slug}/cover.svg (preservado)`);
      continue;
    }

    fs.writeFileSync(file, svg, 'utf8');
    created++;
    console.log(`   ✏️  assets/tools/${slug}/cover.svg`);
  }

  console.log(`\n✅ ${created} criada(s), ${preserved} preservada(s).${FORCE ? ' (modo --force)' : ''}\n`);
}

if (require.main === module) {
  main();
}

module.exports = { covers };
