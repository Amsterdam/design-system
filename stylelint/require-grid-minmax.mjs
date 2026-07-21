/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import stylelint from 'stylelint'

import {
  getReferencedCustomProperty,
  readCustomProperties,
  resolveValue,
  withDeclaredCustomProperties,
} from './custom-properties.mjs'
import { hasBareFrTrack, hasInterpolation } from './values.mjs'

const { createPlugin, utils } = stylelint

const ruleName = 'ams/require-grid-minmax'

const messages = utils.ruleMessages(ruleName, {
  missingFile: (filePath) =>
    `Could not read "${filePath}", so grid tracks that use tokens were not checked. Run \`pnpm --filter @amsterdam/design-system-tokens run build\` to generate it`,
  rejected: (source) =>
    `Expected "${source}" to wrap its fr tracks in minmax(0, …). A bare fr track cannot shrink below its content, so long unbreakable content pushes the grid out of its container`,
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

    root.walkDecls(/^grid-template-(columns|rows)$/i, (declaration) => {
      if (hasInterpolation(declaration.value)) {
        return
      }

      /* A literal bare fr track is judged by defensive-css/require-grid-minmax; this rule only
       * reports a bare track that arrives through token resolution.
       */
      if (!declaration.value.includes('var(') || hasBareFrTrack(declaration.value)) {
        return
      }

      const resolved = resolveValue(declaration.value, knownCustomProperties)

      if (resolved === null || !hasBareFrTrack(resolved)) {
        return
      }

      const source = getReferencedCustomProperty(declaration.value) ?? resolved.replace(/\s+/g, ' ')

      utils.report({
        message: messages.rejected(source),
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
