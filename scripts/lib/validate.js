/**
 * Cozy Developer Laboratory — Validador JSON Schema (subconjunto)
 *
 * Implementação sem dependências externas, capaz de validar os registros
 * canônicos contra os JSON Schemas do projeto.
 *
 * Keywords suportadas:
 *   $ref (local: #/$defs/...), $defs, type, required, properties,
 *   additionalProperties, items, enum, const, pattern, oneOf,
 *   minLength, maxLength, minItems
 */

'use strict';

/**
 * Resolve uma referência local (`#/$defs/foo`).
 */
function resolveRef(ref, root) {
  if (!ref.startsWith('#/')) return null;
  let node = root;
  for (const part of ref.slice(2).split('/')) {
    node = node && node[part];
  }
  return node || null;
}

/**
 * Nome do tipo JSON de um valor.
 */
function jsonType(value) {
  if (value === null) return 'null';
  if (Array.isArray(value)) return 'array';
  return typeof value;
}

/**
 * Valida `data` contra `schema`. Retorna um array de erros (strings).
 *
 * @param {*} data
 * @param {Object} schema
 * @param {Object} root - Schema raiz (para resolução de $ref)
 * @param {string} [pathStr] - Caminho de navegação para mensagens
 * @returns {string[]}
 */
function validate(data, schema, root, pathStr = '$') {
  const errors = [];

  if (!schema || typeof schema !== 'object') return errors;

  if (schema.$ref) {
    const resolved = resolveRef(schema.$ref, root);
    if (!resolved) {
      errors.push(`${pathStr}: referência não resolvida "${schema.$ref}"`);
      return errors;
    }
    return validate(data, resolved, root, pathStr);
  }

  if (schema.const !== undefined && data !== schema.const) {
    errors.push(`${pathStr}: esperado o valor constante "${schema.const}", recebido "${JSON.stringify(data)}"`);
  }

  if (schema.enum && !schema.enum.includes(data)) {
    errors.push(`${pathStr}: "${JSON.stringify(data)}" não está entre [${schema.enum.join(', ')}]`);
  }

  if (schema.type) {
    const types = Array.isArray(schema.type) ? schema.type : [schema.type];
    const actual = jsonType(data);
    if (!types.includes(actual)) {
      errors.push(`${pathStr}: esperado tipo "${types.join('|')}", recebido "${actual}"`);
      return errors;
    }
  }

  if (typeof data === 'string') {
    if (schema.pattern && !new RegExp(schema.pattern).test(data)) {
      errors.push(`${pathStr}: "${data}" não corresponde ao padrão ${schema.pattern}`);
    }
    if (schema.minLength !== undefined && data.length < schema.minLength) {
      errors.push(`${pathStr}: comprimento mínimo ${schema.minLength} não atingido`);
    }
    if (schema.maxLength !== undefined && data.length > schema.maxLength) {
      errors.push(`${pathStr}: comprimento máximo ${schema.maxLength} excedido`);
    }
  }

  if (Array.isArray(data) && schema.minItems !== undefined && data.length < schema.minItems) {
    errors.push(`${pathStr}: mínimo de ${schema.minItems} item(ns) exigido(s), recebido ${data.length}`);
  }

  if (schema.oneOf) {
    const matches = schema.oneOf.filter(
      (sub) => validate(data, sub, root, pathStr).length === 0
    );
    if (matches.length === 0) {
      errors.push(`${pathStr}: não corresponde a nenhuma das variantes de oneOf`);
    }
  }

  if (data && typeof data === 'object' && !Array.isArray(data)) {
    for (const key of schema.required || []) {
      if (!(key in data)) {
        errors.push(`${pathStr}: campo obrigatório "${key}" ausente`);
      }
    }

    const props = schema.properties || {};
    for (const [key, value] of Object.entries(data)) {
      if (props[key]) {
        errors.push(...validate(value, props[key], root, `${pathStr}.${key}`));
      } else if (schema.additionalProperties === false) {
        errors.push(`${pathStr}: campo desconhecido "${key}"`);
      }
    }
  }

  if (Array.isArray(data) && schema.items) {
    data.forEach((item, idx) => {
      errors.push(...validate(item, schema.items, root, `${pathStr}[${idx}]`));
    });
  }

  return errors;
}

module.exports = { validate, resolveRef, jsonType };
