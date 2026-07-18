/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { readFileSync, statSync } from 'node:fs'
import { resolve } from 'node:path'
import process from 'node:process'
import postcss from 'postcss'

import { findFunction, splitTopLevelParts } from './values.mjs'

/* Parsed token files, keyed by absolute path, so a lint run reads each file once instead of once
 * per linted stylesheet. The modification time invalidates the entry when tokens are rebuilt.
 */
const fileCache = new Map()

/* Guards against a chain of custom properties that never terminates. */
const MAXIMUM_RESOLUTION_DEPTH = 20

/**
 * Records a custom property, marking it unresolvable when it is declared more than once with
 * different values. Which of those declarations applies depends on the cascade, which is unknowable
 * here, so the value is treated as unknown rather than guessed at.
 *
 * @param {Map<string, string | null>} customProperties - The collected custom properties.
 * @param {string} name - The custom property name.
 * @param {string} value - The declared value.
 * @returns {void}
 */
function addCustomProperty(customProperties, name, value) {
  if (!customProperties.has(name)) {
    customProperties.set(name, value)

    return
  }

  if (customProperties.get(name) !== value) {
    customProperties.set(name, null)
  }
}

/**
 * Reads every custom property declaration from a CSS file, using a cached result when the file is
 * unchanged.
 *
 * @param {string} absolutePath - The absolute path of the file.
 * @returns {Array<[string, string]>} The declared custom properties.
 */
function readCustomPropertyEntries(absolutePath) {
  const { mtimeMs } = statSync(absolutePath)
  const cached = fileCache.get(absolutePath)

  if (cached && cached.mtimeMs === mtimeMs) {
    return cached.entries
  }

  const entries = []

  postcss.parse(readFileSync(absolutePath, 'utf8')).walkDecls((declaration) => {
    if (declaration.prop.startsWith('--')) {
      entries.push([declaration.prop, declaration.value])
    }
  })

  fileCache.set(absolutePath, { entries, mtimeMs })

  return entries
}

/**
 * Collects the custom properties declared in the given CSS files.
 *
 * @param {string[]} filePaths - Paths to CSS files, absolute or relative to the working directory.
 * @returns {{ customProperties: Map<string, string | null>, missingFiles: string[] }} The custom
 *   properties, and the paths that could not be read.
 */
export function readCustomProperties(filePaths) {
  const customProperties = new Map()
  const missingFiles = []

  for (const filePath of filePaths) {
    let entries

    try {
      entries = readCustomPropertyEntries(resolve(process.cwd(), filePath))
    } catch {
      missingFiles.push(filePath)

      continue
    }

    for (const [name, value] of entries) {
      addCustomProperty(customProperties, name, value)
    }
  }

  return { customProperties, missingFiles }
}

/**
 * Adds the custom properties a stylesheet declares itself to the ones read from the token files,
 * so that component private properties such as `--_ams-…` resolve too.
 *
 * @param {import('postcss').Root} root - The stylesheet being linted.
 * @param {Map<string, string | null>} customProperties - The custom properties from the token files.
 * @returns {Map<string, string | null>} The combined custom properties.
 */
export function withDeclaredCustomProperties(root, customProperties) {
  const combined = new Map(customProperties)

  root.walkDecls((declaration) => {
    if (declaration.prop.startsWith('--')) {
      addCustomProperty(combined, declaration.prop, declaration.value)
    }
  })

  return combined
}

/**
 * Replaces every `var()` in a value with the value it references, following chains of custom
 * properties. Returns null when any part of the value cannot be resolved, so that callers skip the
 * declaration instead of judging it on an incomplete value.
 *
 * @param {string} value - The value to resolve.
 * @param {Map<string, string | null>} customProperties - The known custom properties.
 * @param {Set<string>} [seen] - The custom properties already being resolved, to detect cycles.
 * @returns {string | null} The resolved value, or null when it is not statically knowable.
 */
export function resolveValue(value, customProperties, seen = new Set()) {
  if (seen.size > MAXIMUM_RESOLUTION_DEPTH) {
    return null
  }

  const call = findFunction(value, 'var')

  if (!call) {
    return value
  }

  const [name, ...fallbackParts] = call.args
  const fallback = fallbackParts.join(', ')
  let replacement = null

  if (seen.has(name)) {
    /* A custom property that references itself never resolves to a value. */
    return null
  }

  if (customProperties.has(name)) {
    const declaredValue = customProperties.get(name)

    replacement =
      declaredValue === null ? null : resolveValue(declaredValue, customProperties, new Set([...seen, name]))
  } else if (fallback) {
    /* The fallback only applies while the custom property is undefined, which is the case here. */
    replacement = resolveValue(fallback, customProperties, seen)
  }

  if (replacement === null) {
    return null
  }

  return resolveValue(value.slice(0, call.start) + replacement + value.slice(call.end), customProperties, seen)
}

/**
 * Returns the custom property a value consists of, when the value is a single `var()` and nothing
 * else. Used to name the token that carries a problem in a warning.
 *
 * @param {string} value - The value to inspect.
 * @returns {string | null} The custom property name, or null when the value is something else.
 */
export function getReferencedCustomProperty(value) {
  const trimmed = value.trim()
  const call = findFunction(trimmed, 'var')

  if (!call || call.start !== 0 || call.end !== trimmed.length) {
    return null
  }

  return call.args[0]
}

/**
 * Splits a resolved font stack into its individual family names, stripping quotes.
 *
 * @param {string} value - The resolved `font-family` value.
 * @returns {string[]} The family names.
 */
export function parseFontStack(value) {
  return splitTopLevelParts(value)
    .map((family) => family.trim().replace(/^(['"])(.*)\1$/, '$2'))
    .filter(Boolean)
}
