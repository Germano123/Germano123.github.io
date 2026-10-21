#!/usr/bin/env node
/**
 * Cozy Developer Laboratory — Gerador de Páginas de Arte (Art Workshop)
 *
 * Pipeline:
 *   artifacts/art-data/<slug>.json           (fonte de verdade, manual)
 *          │
 *          │  validação contra artifacts/art-data/art-page.schema.json
 *          ▼
 *   ├──▶ art/<slug>.html                     (página estática gerada)
 *   └──▶ js/data/art.js                      (registro canônico p/ a listagem)
 *
 * Uso:
 *   node scripts/generate-art-pages.js                # gera tudo
 *   node scripts/generate-art-pages.js --slug=lily    # gera apenas uma
 *   node scripts/generate-art-pages.js --from=<arq>    # renderiza um rascunho
 *   node scripts/generate-art-pages.js --check         # verifica drift (CI)
 *
 * Sem dependências externas. Requer Node >= 18.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { renderArtPage, groupCarousels } = require('./templates/art-page.template');
const { validate } = require('./lib/validate');
const { ART_CATEGORIES } = require('../js/data/art-categories.js');

const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'artifacts', 'art-data');
const SCHEMA_PATH = path.join(DATA_DIR, 'art-page.schema.json');
const OUT_HTML_DIR = path.join(ROOT, 'art');
const OUT_DATA_FILE = path.join(ROOT, 'js', 'data', 'art.js');

/**
 * Normaliza as quebras de linha para comparação de conteúdo.
 */
function normalizeEol(value) {
  return (value || '').replace(/\r\n/g, '\n');
}

/**
 * Lê e valida os registros de arte.
 * @param {string|null} fromFile
 */
function loadArt(fromFile) {
  if (!fs.existsSync(SCHEMA_PATH)) {
    throw new Error(`Schema não encontrado: ${SCHEMA_PATH}`);
  }
  const schema = JSON.parse(fs.readFileSync(SCHEMA_PATH, 'utf8'));

  if (fromFile) {
    const full = path.isAbsolute(fromFile) ? fromFile : path.resolve(ROOT, fromFile);
    if (!fs.existsSync(full)) throw new Error(`Arquivo não encontrado: ${full}`);

    const raw = JSON.parse(fs.readFileSync(full, 'utf8'));
    const errors = validate(raw, schema, schema);
    if (errors.length) {
      throw new Error(
        `Validação falhou em ${path.basename(full)}:\n\n    - ${errors.join('\n    - ')}`
      );
    }
    raw._sourceFile = path.basename(full);
    return [raw];
  }

  if (!fs.existsSync(DATA_DIR)) {
    throw new Error(`Diretório de dados não encontrado: ${DATA_DIR}`);
  }

  const files = fs
    .readdirSync(DATA_DIR)
    .filter((f) => f.endsWith('.json') && f !== 'art-page.schema.json')
    .sort();

  if (!files.length) {
    throw new Error(`Nenhum registro encontrado em ${DATA_DIR}`);
  }

  const records = [];
  const problems = [];

  for (const file of files) {
    const full = path.join(DATA_DIR, file);
    let raw;
    try {
      raw = JSON.parse(fs.readFileSync(full, 'utf8'));
    } catch (err) {
      problems.push(`${file}: JSON inválido — ${err.message}`);
      continue;
    }

    const errors = validate(raw, schema, schema);
    if (errors.length) {
      problems.push(`${file}:\n    - ${errors.join('\n    - ')}`);
      continue;
    }

    const expected = `${raw.slug}.json`;
    if (file !== expected) {
      problems.push(`${file}: nome de arquivo deve ser "${expected}" (slug: "${raw.slug}")`);
      continue;
    }

    raw._sourceFile = file;
    records.push(raw);
  }

  if (problems.length) {
    throw new Error(
      `Validação falhou em ${problems.length} arquivo(s):\n\n${problems.join('\n\n')}`
    );
  }

  return records;
}

/**
 * Converte o registro de arte no formato consumido pelos cards da listagem.
 */
function toCatalogRecord(art) {
  const category = ART_CATEGORIES[art.mainCategory] || ART_CATEGORIES.assets;
  const cover = art.cover_pic || art.banner?.src || art.video?.poster || null;

  return {
    id: art.id,
    slug: art.slug,
    title: art.title.pt,
    projectType: 'art',
    areas: ['art-workshop', 'software-shelf'],
    mainCategory: art.mainCategory,
    technologies: art.technologies || [],
    tags: art.tags || [],
    status: art.status,
    visibility: art.visibility,
    featured: art.featured === true,
    cover_pic: cover,
    cover,
    banner: art.banner || null,
    video: art.video || null,
    summary: art.summary,
    characteristics: art.characteristics || [],
    carousels: groupCarousels(art.media || []),
    process: art.process || null,
    integration: art.integration || null,
    limitations: art.limitations || [],
    links: art.links || {},
    accent: art.accent || category.accent,
    // Caminho (relativo à raiz do site) da página estática gerada.
    pageUrl: `art/${art.slug}.html`
  };
}

/**
 * Serializa js/data/art.js.
 */
function renderArtDataFile(records) {
  const body = JSON.stringify(records.map(toCatalogRecord), null, 2).replace(/\n/g, '\n  ');

  return `/**
 * Cozy Developer Laboratory — Registro Canônico de Arte (Art Workshop)
 * ARQUIVO GERADO — NÃO EDITE MANUALMENTE.
 * Fonte: artifacts/art-data/*.json  →  Gerador: scripts/generate-art-pages.js
 *
 * Para adicionar ou alterar um trabalho, edite o JSON correspondente em
 * artifacts/art-data/ e execute: node scripts/generate-art-pages.js
 */

const ART = ${body};
`;
}

/**
 * Stub de redirecionamento para acessos diretos a /art/.
 */
function renderIndexRedirect() {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="0; url=../art-workshop.html">
    <title>Art Workshop | Germano Cozy Dev Lab</title>
</head>
<body>
    <script>window.location.replace('../art-workshop.html');</script>
</body>
</html>
`;
}

function main() {
  const args = process.argv.slice(2);
  const checkOnly = args.includes('--check');
  const slugArg = args.find((a) => a.startsWith('--slug='));
  const fromArg = args.find((a) => a.startsWith('--from='));
  const onlySlug = slugArg ? slugArg.split('=')[1] : null;
  const fromFile = fromArg ? fromArg.split('=')[1] : null;

  console.log('🎨 Cozy Developer Laboratory — Gerador de Páginas de Arte\n');

  if (fromFile && onlySlug) {
    console.error('❌ Use --from OU --slug, não ambos.\n');
    process.exit(1);
  }

  let records;
  try {
    records = loadArt(fromFile);
  } catch (err) {
    console.error('❌ ' + err.message + '\n');
    process.exit(1);
  }

  const selected = onlySlug ? records.filter((r) => r.slug === onlySlug) : records;

  if (onlySlug && !selected.length) {
    console.error(`❌ Nenhum registro com slug "${onlySlug}" em artifacts/art-data/.\n`);
    process.exit(1);
  }

  console.log(
    `   Registros válidos: ${records.length} (${records.map((r) => r.slug).join(', ')})`
  );

  fs.mkdirSync(OUT_HTML_DIR, { recursive: true });

  const outputs = [];
  for (const art of selected) {
    const html = renderArtPage(art, {
      lang: 'pt',
      outputPath: `art/${art.slug}.html`
    });
    outputs.push({
      file: path.join(OUT_HTML_DIR, `${art.slug}.html`),
      content: html
    });
  }

  if (!onlySlug && !fromFile) {
    outputs.push({
      file: path.join(OUT_HTML_DIR, 'index.html'),
      content: renderIndexRedirect()
    });
    outputs.push({ file: OUT_DATA_FILE, content: renderArtDataFile(records) });
  }

  let drift = 0;
  for (const out of outputs) {
    const rel = path.relative(ROOT, out.file).replace(/\\/g, '/');
    const exists = fs.existsSync(out.file);
    const current = exists ? fs.readFileSync(out.file, 'utf8') : null;
    const changed = normalizeEol(current) !== normalizeEol(out.content);

    if (checkOnly) {
      if (changed) {
        drift++;
        console.log(`   ⚠️  ${rel} — desatualizado`);
      } else {
        console.log(`   ✅ ${rel} — em dia`);
      }
      continue;
    }

    if (changed) {
      fs.writeFileSync(out.file, out.content, 'utf8');
      console.log(`   ✏️  ${rel}${exists ? ' (atualizado)' : ' (criado)'}`);
    } else {
      console.log(`   ➖ ${rel} (sem alterações)`);
    }
  }

  if (checkOnly) {
    if (drift) {
      console.error(
        `\n❌ ${drift} arquivo(s) gerado(s) desatualizado(s). Rode: node scripts/generate-art-pages.js\n`
      );
      process.exit(1);
    }
    console.log('\n✅ Todos os artefatos gerados estão em dia.\n');
    return;
  }

  console.log(`\n✅ ${outputs.length} artefato(s) processado(s).\n`);
}

if (require.main === module) {
  main();
}

module.exports = { loadArt, toCatalogRecord, renderArtDataFile };
