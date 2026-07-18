/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import stylelint from 'stylelint'

import {
  getReferencedCustomProperty,
  parseFontStack,
  readCustomProperties,
  resolveValue,
  withDeclaredCustomProperties,
} from './custom-properties.mjs'
import { hasInterpolation } from './values.mjs'

const { createPlugin, utils } = stylelint

const ruleName = 'ams/require-system-font-fallback'

/* The generic families from CSS Fonts Module Level 4. Each one resolves to a font that is always
 * available, so a stack that ends in one still renders when the web font fails to load.
 */
const GENERIC_FAMILIES = new Set([
  'cursive',
  'emoji',
  'fangsong',
  'fantasy',
  'math',
  'monospace',
  'sans-serif',
  'serif',
  'system-ui',
  'ui-monospace',
  'ui-rounded',
  'ui-sans-serif',
  'ui-serif',
])

/* Values that do not describe a font stack at all, so there is nothing to fall back to. */
const GLOBAL_KEYWORDS = new Set(['inherit', 'initial', 'revert', 'revert-layer', 'unset'])

/* Inside these at-rules `font-family` is a descriptor that names the font being defined, rather
 * than a stack the browser falls through. Adding a generic family there would be meaningless.
 */
const FONT_DESCRIPTOR_AT_RULES = new Set(['font-face', 'font-palette-values'])

/**
 * Reports whether a declaration sits in an at-rule where `font-family` names a font.
 *
 * @param {import('postcss').Declaration} declaration - The declaration to inspect.
 * @returns {boolean} True when the declaration is a font descriptor.
 */
function isFontDescriptor(declaration) {
  for (let node = declaration.parent; node; node = node.parent) {
    if (node.type === 'atrule' && FONT_DESCRIPTOR_AT_RULES.has(node.name.toLowerCase())) {
      return true
    }
  }

  return false
}

const messages = utils.ruleMessages(ruleName, {
  missingFile: (filePath) =>
    `Could not read "${filePath}", so font families that use tokens were not checked. Run \`pnpm --filter @amsterdam/design-system-tokens run build\` to generate it`,
  rejected: (source, stack) =>
    `Expected "${source}" to end in a generic font family, but it resolves to "${stack}". Text disappears or reflows when the web font fails to load`,
})

const meta = { url: 'https://github.com/Amsterdam/design-system/blob/develop/stylelint/README.md' }

/* Token files that could not be read, so the warning is emitted once per lint run and not once per
 * stylesheet.
 */
const warnedFiles = new Set()

/** @type {import('stylelint').Rule} */
const rule =
  (primary, secondaryOptions = {}) =>
  (root, result) => {
    const validOptions = utils.validateOptions(
      result,
      ruleName,
      { actual: primary, possible: [true] },
      {
        actual: secondaryOptions,
        optional: true,
        possible: {
          importFrom: [(value) => typeof value === 'string'],
        },
      },
    )

    if (!validOptions) {
      return
    }

    const { customProperties, missingFiles } = readCustomProperties([secondaryOptions.importFrom ?? []].flat())

    for (const missingFile of missingFiles) {
      if (!warnedFiles.has(missingFile)) {
        warnedFiles.add(missingFile)

        result.warn(messages.missingFile(missingFile), { stylelintType: 'invalidOption' })
      }
    }

    const knownCustomProperties = withDeclaredCustomProperties(root, customProperties)

    root.walkDecls(/^font-family$/i, (declaration) => {
      if (hasInterpolation(declaration.value) || isFontDescriptor(declaration)) {
        return
      }

      const resolved = resolveValue(declaration.value, knownCustomProperties)

      if (resolved === null) {
        return
      }

      const families = parseFontStack(resolved)

      if (families.length === 0) {
        return
      }

      if (families.length === 1 && GLOBAL_KEYWORDS.has(families[0].toLowerCase())) {
        return
      }

      /* The generic family has to come last: any family listed after it is never reached. */
      if (GENERIC_FAMILIES.has(families.at(-1).toLowerCase())) {
        return
      }

      const source = getReferencedCustomProperty(declaration.value) ?? declaration.prop

      utils.report({
        message: messages.rejected(source, families.join(', ')),
        node: declaration,
        result,
        ruleName,
        word: declaration.value,
      })
    })
  }

rule.messages = messages
rule.meta = meta
rule.ruleName = ruleName

export default createPlugin(ruleName, rule)
