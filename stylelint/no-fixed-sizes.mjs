/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { createRequire } from 'node:module'
import stylelint from 'stylelint'

import {
  getReferencedCustomProperty,
  readCustomProperties,
  resolveValue,
  withDeclaredCustomProperties,
} from './custom-properties.mjs'
import { hasInterpolation, hasPixelLength } from './values.mjs'

const { createPlugin, utils } = stylelint

const ruleName = 'ams/no-fixed-sizes'

/* The size-related properties come from the strict configuration of defensive-css/no-fixed-sizes,
 * so both rules cover the same properties without maintaining the list twice.
 * A failed lookup is not fatal here: it is reported at rule execution, where an explicit
 * `properties` option still works.
 */
const require = createRequire(import.meta.url)
let strictProperties

try {
  strictProperties = require('stylelint-plugin-defensive-css/configs/strict').rules?.[
    'defensive-css/no-fixed-sizes'
  ]?.[1]?.properties
} catch {
  /* Reported at rule execution. */
}

/* The upstream list has the border longhands and the physical `border` shorthand, but misses the
 * logical shorthands, which are the only ones this repository uses.
 */
const LOGICAL_BORDER_SHORTHANDS = [
  'border-block',
  'border-block-end',
  'border-block-start',
  'border-inline',
  'border-inline-end',
  'border-inline-start',
]

const DEFAULT_PROPERTIES = strictProperties ? [...Object.keys(strictProperties), ...LOGICAL_BORDER_SHORTHANDS] : null

const messages = utils.ruleMessages(ruleName, {
  missingFile: (filePath) =>
    `Could not read "${filePath}", so sizes that use tokens were not checked. Run \`pnpm --filter @amsterdam/design-system-tokens run build\` to generate it`,
  missingPropertyList: `Could not read the property list from the strict configuration of stylelint-plugin-defensive-css. The package layout may have changed; pass the \`properties\` option explicitly`,
  rejected: (source, property) =>
    `Expected "${source}" not to resolve to a pixel length in "${property}". Relative units let sizes follow the font size that users configure`,
})

const meta = { url: 'https://github.com/Amsterdam/design-system/blob/develop/stylelint/README.md' }

/* Token files that could not be read, so the warning is emitted once per lint run and not once per
 * stylesheet.
 */
const warnedFiles = new Set()

/* Same once-per-run guard for a missing property list. */
let warnedMissingPropertyList = false

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
          properties: [(value) => typeof value === 'string'],
        },
      },
    )

    if (!validOptions) {
      return
    }

    const configuredProperties = secondaryOptions.properties ?? DEFAULT_PROPERTIES

    if (!configuredProperties) {
      if (!warnedMissingPropertyList) {
        warnedMissingPropertyList = true

        result.warn(messages.missingPropertyList, { stylelintType: 'invalidOption' })
      }

      return
    }

    const properties = new Set(configuredProperties.map((name) => name.toLowerCase()))
    const { customProperties, missingFiles } = readCustomProperties([secondaryOptions.importFrom ?? []].flat())

    for (const missingFile of missingFiles) {
      if (!warnedFiles.has(missingFile)) {
        warnedFiles.add(missingFile)

        result.warn(messages.missingFile(missingFile), { stylelintType: 'invalidOption' })
      }
    }

    const knownCustomProperties = withDeclaredCustomProperties(root, customProperties)

    root.walkDecls((declaration) => {
      if (!properties.has(declaration.prop.toLowerCase()) || hasInterpolation(declaration.value)) {
        return
      }

      /* A literal pixel length is judged by defensive-css/no-fixed-sizes; this rule only reports a
       * pixel length that arrives through token resolution.
       */
      if (!declaration.value.includes('var(') || hasPixelLength(declaration.value)) {
        return
      }

      const resolved = resolveValue(declaration.value, knownCustomProperties)

      if (resolved === null || !hasPixelLength(resolved)) {
        return
      }

      const source = getReferencedCustomProperty(declaration.value) ?? resolved.replace(/\s+/g, ' ')

      utils.report({
        message: messages.rejected(source, declaration.prop),
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
