/**
 * Cozy Developer Laboratory — Utilidades XML/SVG
 *
 * SVG é XML: o caractere `&` precisa ser escapado como `&amp;`.
 * Sem isso o documento fica malformado e o navegador exibe um SVG vazio
 * (`naturalWidth === 0`), sem erro visível no console.
 */

'use strict';

const XML_ESCAPES = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;'
};

/**
 * Escapa texto para interpolação segura em um documento XML/SVG.
 * @param {*} value
 * @returns {string}
 */
function xmlEscape(value) {
  if (value === null || value === undefined) return '';
  return String(value).replace(/[&<>"']/g, (ch) => XML_ESCAPES[ch]);
}

/**
 * Detecta `&` que não inicia uma entidade XML.
 * É a causa mais comum de um SVG malformado: o documento é servido com
 * HTTP 200 e o navegador o renderiza como vazio, sem erro no console.
 *
 * @param {string} svg
 * @returns {string[]} posições encontradas (1-based) — vazio se válido
 */
function findUnescapedAmpersands(svg) {
  const hits = [];
  const text = String(svg || '');
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== '&') continue;
    const rest = text.slice(i + 1);
    if (/^[a-zA-Z#][a-zA-Z0-9]{0,7};/.test(rest)) continue;
    const line = text.slice(0, i).split('\n').length;
    hits.push(`linha ${line}`);
  }
  return hits;
}

/**
 * Valida um SVG gerado, lançando erro se estiver malformado.
 * @param {string} svg
 * @param {string} label - Identificação do arquivo no erro
 */
function assertWellFormedSvg(svg, label) {
  const hits = findUnescapedAmpersands(svg);
  if (hits.length) {
    throw new Error(
      `SVG malformado em ${label}: & não escapado em ${hits.join(', ')}. ` +
      'Use xmlEscape() ao interpolar texto.'
    );
  }
}

module.exports = { xmlEscape, XML_ESCAPES, findUnescapedAmpersands, assertWellFormedSvg };
