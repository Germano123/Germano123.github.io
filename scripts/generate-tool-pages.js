#!/usr/bin/env node
/**
 * Cozy Developer Laboratory — Gerador de Páginas de Ferramenta (Tools Lab)
 *
 * Pipeline:
 *   artifacts/tools-data/<slug>.json          (fonte de verdade, manual)
 *          │
 *          │  validação contra artifacts/tools-data/tool-page.schema.json
 *          ▼
 *   ├──▶ tools/<slug>.html                    (página estática gerada)
 *   └──▶ js/data/tools.js                     (registro canônico p/ o catálogo)
 *
 * Uso:
 *   node scripts/generate-tool-pages.js                # gera tudo
 *   node scripts/generate-tool-pages.js --slug=cardinal # gera apenas uma
 *   node scripts/generate-tool-pages.js --check        # verifica se está em dia (CI)
 *
 * Sem dependências externas. Requer Node >= 18.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { renderToolPage } = require('./templates/tool-page.template');
const { validate } = require('./lib/validate');

const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'artifacts', 'tools-data');
const SCHEMA_PATH = path.join(DATA_DIR, 'tool-page.schema.json');
const OUT_HTML_DIR = path.join(ROOT, 'tools');
const OUT_DATA_FILE = path.join(ROOT, 'js', 'data', 'tools.js');

/**
 * Normaliza as quebras de linha para comparação de conteúdo.
 * @param {string|null} value
 * @returns {string}
 */
function normalizeEol(value) {
  return (value || '').replace(/\r\n/g, '\n');
}

/* ------------------------------------------------------------------ */
/* Carregamento                                                       */
/* ------------------------------------------------------------------ */

/**
 * Lê e valida todos os registros em artifacts/tools-data.
 */
function loadTools(fromFile) {
  if (fromFile) {
    // Modo --from: renderiza um registro específico (ex.: um rascunho isolado).
    const full = path.isAbsolute(fromFile)
      ? fromFile
      : path.resolve(ROOT, fromFile);

    if (!fs.existsSync(full)) {
      throw new Error(`Arquivo não encontrado: ${full}`);
    }

    const schema = JSON.parse(fs.readFileSync(SCHEMA_PATH, 'utf8'));
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
  if (!fs.existsSync(SCHEMA_PATH)) {
    throw new Error(`Schema não encontrado: ${SCHEMA_PATH}`);
  }

  const schema = JSON.parse(fs.readFileSync(SCHEMA_PATH, 'utf8'));
  const files = fs
    .readdirSync(DATA_DIR)
    .filter((f) => f.endsWith('.json') && f !== 'tool-page.schema.json')
    .sort();

  if (!files.length) {
    throw new Error(`Nenhum registro encontrado em ${DATA_DIR}`);
  }

  const tools = [];
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

    // O nome do arquivo deve corresponder ao slug (evita ambiguidade).
    const expected = `${raw.slug}.json`;
    if (file !== expected) {
      problems.push(`${file}: nome de arquivo deve ser "${expected}" (slug: "${raw.slug}")`);
      continue;
    }

    raw._sourceFile = file;
    tools.push(raw);
  }

  if (problems.length) {
    const err = new Error(
      `Validação falhou em ${problems.length} arquivo(s):\n\n${problems.join('\n\n')}`
    );
    err.validationErrors = problems;
    throw err;
  }

  return tools;
}

/* ------------------------------------------------------------------ */
/* Geração                                                            */
/* ------------------------------------------------------------------ */

/**
 * Converte o registro de ferramenta no formato consumido pelos cards do catálogo.
 */
function toCatalogRecord(tool) {
  return {
    id: tool.id,
    slug: tool.slug,
    title: tool.title.pt,
    projectType: 'tool',
    areas: ['tools-lab', 'software-shelf'],
    technologies: tool.technologies || [],
    tags: tool.tags || [],
    status: tool.status,
    visibility: tool.visibility,
    featured: tool.featured === true,
    collaborationType: tool.collaborationType || 'portfolio',
    partner: tool.partner || null,
    cover_pic: tool.cover,
    cover: tool.cover,
    summary: tool.summary,
    problem: tool.problem,
    solution: tool.solution,
    contributions: tool.contributions,
    workflowContext: tool.workflowContext,
    pipelineFlow: tool.pipelineFlow,
    technicalArchitecture: tool.technicalArchitecture,
    validation: tool.validation,
    results: tool.results,
    links: tool.links,
    gallery: tool.gallery || [],
    // Caminho (relativo à raiz do site) da página estática gerada.
    pageUrl: `tools/${tool.slug}.html`
  };
}

/**
 * Serializa js/data/tools.js no mesmo formato de js/data/projects.js.
 */
function renderToolsDataFile(tools) {
  const records = tools.map(toCatalogRecord);
  const body = JSON.stringify(records, null, 2).replace(/\n/g, '\n  ');

  return `/**
 * Cozy Developer Laboratory — Registro Canônico de Ferramentas (Tools Lab)
 * ARQUIVO GERADO — NÃO EDITE MANUALMENTE.
 * Fonte: artifacts/tools-data/*.json  →  Gerador: scripts/generate-tool-pages.js
 *
 * Para adicionar ou alterar uma ferramenta, edite o JSON correspondente em
 * artifacts/tools-data/ e execute: node scripts/generate-tool-pages.js
 */

const TOOLS = ${body};
`;
}

/* ------------------------------------------------------------------ */
/* Execução                                                           */
/* ------------------------------------------------------------------ */

function main() {
  const args = process.argv.slice(2);
  const checkOnly = args.includes('--check');
  const slugArg = args.find((a) => a.startsWith('--slug='));
  const fromArg = args.find((a) => a.startsWith('--from='));
  const onlySlug = slugArg ? slugArg.split('=')[1] : null;
  const fromFile = fromArg ? fromArg.split('=')[1] : null;

  console.log('🔧 Cozy Developer Laboratory — Gerador de Páginas de Ferramenta\n');

  if (fromFile && onlySlug) {
    console.error('❌ Use --from OU --slug, não ambos.\n');
    process.exit(1);
  }

  let tools;
  try {
    tools = loadTools(fromFile);
  } catch (err) {
    console.error('❌ ' + err.message + '\n');
    process.exit(1);
  }

  const selected = onlySlug ? tools.filter((t) => t.slug === onlySlug) : tools;

  if (onlySlug && !selected.length) {
    console.error(`❌ Nenhum registro com slug "${onlySlug}" em artifacts/tools-data/.\n`);
    process.exit(1);
  }

  console.log(`   Registros válidos: ${tools.length} (${tools.map((t) => t.slug).join(', ')})`);

  fs.mkdirSync(OUT_HTML_DIR, { recursive: true });

  const outputs = [];
  for (const tool of selected) {
    const html = renderToolPage(tool, {
      lang: 'pt',
      outputPath: `tools/${tool.slug}.html`
    });
    const outFile = path.join(OUT_HTML_DIR, `${tool.slug}.html`);
    outputs.push({ file: outFile, content: html });
  }

  // tools/index.html garante que qualquer acesso direto a /tools redirecione para /tools-lab.html
  if (!onlySlug && !fromFile) {
    const indexRedirectHtml = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="0; url=../tools-lab.html">
    <title>Tools Lab | Germano Cozy Dev Lab</title>
</head>
<body>
    <script>window.location.replace('../tools-lab.html');</script>
</body>
</html>
`;
    outputs.push({ file: path.join(OUT_HTML_DIR, 'index.html'), content: indexRedirectHtml });
    outputs.push({ file: OUT_DATA_FILE, content: renderToolsDataFile(tools) });
  }

  let drift = 0;
  for (const out of outputs) {
    const rel = path.relative(ROOT, out.file).replace(/\\/g, '/');
    const exists = fs.existsSync(out.file);
    const current = exists ? fs.readFileSync(out.file, 'utf8') : null;
    // A comparação ignora a diferença de quebras de linha: o Git pode
    // reescrever os artefatos com CRLF no checkout (core.autocrlf), o que
    // não representa drift real de conteúdo.
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
      console.error(`\n❌ ${drift} arquivo(s) gerado(s) desatualizado(s). Rode: node scripts/generate-tool-pages.js\n`);
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

module.exports = { validate, loadTools, toCatalogRecord, renderToolsDataFile };
