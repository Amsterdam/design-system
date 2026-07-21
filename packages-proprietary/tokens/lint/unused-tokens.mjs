/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import postcss from 'postcss'

/* The prefix every token name carries. */
const NAMESPACE = '--ams-'

/* Matches the custom property name of a `var()`, up to the comma of a fallback. Sass interpolation
 * counts as part of the name, so that `var(--ams-space-#{$size})` is captured whole rather than
 * truncated at the `#`.
 */
const REFERENCE_PATTERN = /var\(\s*(--(?:[a-z0-9-]|#\{[^}]*\})*)/gi

/* Matches a Sass `@each` over a literal list, capturing the loop variable and the list. Only the
 * single variable form is matched; the destructuring form `@each $a, $b in …` has no use here.
 */
const EACH_LOOP_PATTERN = /@each\s+\$([\w-]+)\s+in\s+\(([^)]*)\)/g

const INTERPOLATION_PATTERN = /#\{\s*\$([\w-]+)\s*\}/g

/**
 * Reads the token names a built CSS file declares, along with the tokens those declarations
 * reference. Style Dictionary builds the CSS with `outputReferences`, so a token defined in terms of
 * another appears here as a `var()` in the declared value. Reading both halves from the built file
 * keeps the mapping from DTCG path to custom property in one place — the build — instead of
 * restating it here, where it would drift.
 *
 * @param {string} css - The contents of a built token CSS file.
 * @returns {{ defined: Set<string>, referenced: Set<string> }} The tokens declared, and the tokens
 *   their values refer to.
 */
export function readBuiltTokens(css) {
  const defined = new Set()
  const referenced = new Set()

  postcss.parse(css).walkDecls((declaration) => {
    if (!declaration.prop.startsWith(NAMESPACE)) {
      return
    }

    defined.add(declaration.prop)

    for (const [, name] of declaration.value.matchAll(REFERENCE_PATTERN)) {
      if (name.startsWith(NAMESPACE)) {
        referenced.add(name)
      }
    }
  })

  return { defined, referenced }
}

/**
 * Collects the values each Sass `@each` loop in a stylesheet iterates over, keyed by loop variable.
 * A variable used by more than one loop collects the values of all of them, which keeps the result
 * on the safe side of reporting a token that is in fact reached.
 *
 * @param {string} source - The contents of a stylesheet.
 * @returns {Map<string, Set<string>>} The values per loop variable.
 */
export function collectLoopValues(source) {
  const loopValues = new Map()

  for (const [, variable, list] of source.matchAll(EACH_LOOP_PATTERN)) {
    const values = list
      .split(',')
      .map((value) => value.trim().replace(/^(['"])(.*)\1$/, '$2'))
      .filter(Boolean)

    if (values.length === 0) {
      continue
    }

    loopValues.set(variable, new Set([...(loopValues.get(variable) ?? []), ...values]))
  }

  return loopValues
}

/**
 * Expands a token name that contains Sass interpolation into the names it compiles to.
 *
 * @param {string} name - The token name, which may hold `#{$variable}` placeholders.
 * @param {Map<string, Set<string>>} loopValues - The values per loop variable.
 * @returns {string[] | null} The concrete names, or null when a placeholder cannot be resolved.
 */
function expandInterpolation(name, loopValues) {
  let names = [name]

  for (const [placeholder, variable] of name.matchAll(INTERPOLATION_PATTERN)) {
    const values = loopValues.get(variable)

    if (!values) {
      return null
    }

    names = names.flatMap((current) => [...values].map((value) => current.replace(placeholder, value)))
  }

  return names
}

/**
 * Returns the literal part of a reference name that precedes its first interpolation, which is the
 * whole name when it holds none.
 *
 * @param {string} name - The reference name.
 * @returns {string} The literal prefix.
 */
export function getLiteralPrefix(name) {
  const start = name.indexOf('#{')

  return start === -1 ? name : name.slice(0, start)
}

/**
 * Reads the tokens a source file refers to. Stylesheets are scanned as text rather than parsed,
 * because Sass interpolation is not valid CSS and because the same scan has to serve the TypeScript
 * and MDX files that reference tokens too.
 *
 * Only a `var()` counts as a reference. A declaration such as `--ams-icon-line-height: …` in a
 * component stylesheet sets a token for its subtree rather than consuming it, so on its own it does
 * not keep the token alive.
 *
 * A reference whose name is interpolated is expanded over the values of the loop it sits in. When
 * that fails, it is classed by how much of the name is still literal: a prefix inside the token
 * namespace narrows the reference to one family of tokens, whereas a prefix that stops short of the
 * namespace could reach any token at all and leaves the check unable to judge anything.
 *
 * @param {string} source - The contents of a source file.
 * @returns {{ names: Set<string>, narrowed: string[], opaque: string[] }} The tokens referred to,
 *   the unresolved references that narrow to one family, and those that do not.
 */
export function readReferences(source) {
  const loopValues = collectLoopValues(source)
  const names = new Set()
  const narrowed = []
  const opaque = []

  for (const [, name] of source.matchAll(REFERENCE_PATTERN)) {
    if (!name.includes('#{')) {
      if (name.startsWith(NAMESPACE)) {
        names.add(name)
      }

      continue
    }

    const expanded = expandInterpolation(name, loopValues)

    if (expanded !== null) {
      for (const expandedName of expanded.filter((candidate) => candidate.startsWith(NAMESPACE))) {
        names.add(expandedName)
      }

      continue
    }

    const prefix = getLiteralPrefix(name)

    if (prefix.length > NAMESPACE.length && prefix.startsWith(NAMESPACE)) {
      narrowed.push(name)
    } else if (NAMESPACE.startsWith(prefix)) {
      /* The literal part stops short of the namespace, so the name could still become any token. */
      opaque.push(name)
    }
  }

  return { names, narrowed, opaque }
}

/**
 * Reports whether a token is covered by an unresolved reference that narrows to its family. Such a
 * reference is treated as reaching every token sharing its literal prefix, so that a name the check
 * cannot expand suppresses a report rather than causing a false one.
 *
 * @param {string} token - The token name to test.
 * @param {string[]} narrowed - The unresolved references that narrow to one family of tokens.
 * @returns {boolean} True when the token may be reached by one of them.
 */
export function isCoveredByNarrowed(token, narrowed) {
  return narrowed.some((reference) => token.startsWith(getLiteralPrefix(reference)))
}

/**
 * Determines which of the defined tokens nothing refers to.
 *
 * @param {object} options - The sets to compare.
 * @param {Set<string>} options.allowlisted - The tokens allowed to go unused.
 * @param {Set<string>} options.defined - The tokens the build declares.
 * @param {string[]} options.narrowed - The unresolved references that narrow to one family.
 * @param {Set<string>} options.referenced - The tokens something refers to.
 * @returns {{ stale: string[], unused: string[] }} The tokens nothing refers to, and the allowlist
 *   entries that are no longer needed.
 */
export function findUnusedTokens({ allowlisted, defined, narrowed, referenced }) {
  const unreferenced = [...defined].filter((token) => !referenced.has(token) && !isCoveredByNarrowed(token, narrowed))

  return {
    stale: [...allowlisted].filter((token) => !defined.has(token) || referenced.has(token)).sort(),
    unused: unreferenced.filter((token) => !allowlisted.has(token)).sort(),
  }
}
