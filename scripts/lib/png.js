/**
 * Cozy Developer Laboratory — Codificador PNG Mínimo (sem dependências)
 *
 * Gera imagens PNG RGB reais a partir de um callback por pixel. Usado para
 * produzir placeholders de mídia que respeitam a convenção de nomes
 * `<slug>-carrossel-<grupo>-<item>.png` do Art Workshop.
 *
 * Uso:
 *   const png = encodePng(64, 64, (x, y) => [r, g, b]);
 */

'use strict';

const zlib = require('zlib');

/* ------------------------------------------------------------------ */
/* CRC32                                                              */
/* ------------------------------------------------------------------ */

const CRC_TABLE = (() => {
  const table = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[n] = c;
  }
  return table;
})();

/**
 * CRC32 de um buffer.
 * @param {Buffer} buf
 * @returns {number}
 */
function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

/* ------------------------------------------------------------------ */
/* Chunks                                                             */
/* ------------------------------------------------------------------ */

/**
 * Monta um chunk PNG (length + type + data + crc).
 * @param {string} type - 4 caracteres
 * @param {Buffer} data
 * @returns {Buffer}
 */
function chunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);

  const typeAndData = Buffer.concat([Buffer.from(type, 'ascii'), data]);

  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(typeAndData), 0);

  return Buffer.concat([length, typeAndData, crc]);
}

/* ------------------------------------------------------------------ */
/* Codificador                                                        */
/* ------------------------------------------------------------------ */

/**
 * Codifica uma imagem PNG RGB de 8 bits.
 * @param {number} width
 * @param {number} height
 * @param {(x:number,y:number)=>[number,number,number]} pixelFn
 * @returns {Buffer}
 */
function encodePng(width, height, pixelFn) {
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;  // bit depth
  ihdr[9] = 2;  // color type: truecolor RGB
  ihdr[10] = 0; // compression: deflate
  ihdr[11] = 0; // filter: adaptive
  ihdr[12] = 0; // interlace: none

  // IDAT: cada scanline é prefixada pelo byte de filtro (0 = None)
  const raw = Buffer.alloc(height * (1 + width * 3));
  let offset = 0;

  for (let y = 0; y < height; y++) {
    raw[offset++] = 0; // filtro None
    for (let x = 0; x < width; x++) {
      const [r, g, b] = pixelFn(x, y);
      raw[offset++] = r & 0xff;
      raw[offset++] = g & 0xff;
      raw[offset++] = b & 0xff;
    }
  }

  const idat = chunk('IDAT', zlib.deflateSync(raw, { level: 9 }));

  return Buffer.concat([
    signature,
    chunk('IHDR', ihdr),
    idat,
    chunk('IEND', Buffer.alloc(0))
  ]);
}

module.exports = { encodePng, crc32, chunk };
