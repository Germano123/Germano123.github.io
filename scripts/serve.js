#!/usr/bin/env node
/**
 * Cozy Developer Laboratory — Servidor Estático Local
 *
 * Uso: npm run serve  (ou: node scripts/serve.js [porta])
 * Requer CWD = raiz do repositório.
 */

'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PORT = Number(process.argv[2]) || 8080;

const CONTENT_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.md': 'text/markdown; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8'
};

const REDIRECTS = {
  '/tools': '/tools-lab.html',
  '/tools/': '/tools-lab.html',
  '/tools-lab': '/tools-lab.html',
  '/games': '/games-prototypes.html',
  '/games/': '/games-prototypes.html',
  '/games-prototypes': '/games-prototypes.html',
  '/art': '/art-workshop.html',
  '/art/': '/art-workshop.html',
  '/art-workshop': '/art-workshop.html',
  '/software-shelf': '/software-shelf.html',
  '/about': '/about.html'
};

http
  .createServer((req, res) => {
    let urlPath = decodeURIComponent(req.url.split('?')[0]);
    if (urlPath === '' || urlPath === '/') urlPath = '/index.html';

    // Redirecionamentos amigáveis de rotas
    if (REDIRECTS[urlPath]) {
      res.writeHead(302, { Location: REDIRECTS[urlPath] });
      return res.end();
    }

    // Normaliza o caminho relativo
    const cleanRelPath = urlPath.replace(/^[/\\]+/, '');
    let filePath = path.resolve(ROOT, cleanRelPath);

    // Impede travessia de diretório com comparação segura em Windows e POSIX
    const rootNorm = path.resolve(ROOT).toLowerCase();
    const fileNorm = filePath.toLowerCase();
    if (!fileNorm.startsWith(rootNorm)) {
      res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('403 Forbidden');
    }

    // Se o destino for um diretório, procura por index.html dentro dele
    try {
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        const indexFile = path.join(filePath, 'index.html');
        if (fs.existsSync(indexFile)) {
          filePath = indexFile;
        }
      }
    } catch (_) {}

    fs.readFile(filePath, (err, data) => {
      if (err) {
        const notFound = path.join(ROOT, '404.html');
        if (fs.existsSync(notFound)) {
          res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
          return res.end(fs.readFileSync(notFound));
        }
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        return res.end('404 Not Found');
      }

      res.writeHead(200, {
        'Content-Type': CONTENT_TYPES[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
        'Cache-Control': 'no-cache'
      });
      res.end(data);
    });
  })
  .listen(PORT, () => {
    console.log(`\n🌿 Cozy Developer Laboratory`);
    console.log(`   Servindo: ${ROOT}`);
    console.log(`   URL:      http://localhost:${PORT}`);
    console.log(`   Tools Lab: http://localhost:${PORT}/tools-lab.html\n`);
  });
