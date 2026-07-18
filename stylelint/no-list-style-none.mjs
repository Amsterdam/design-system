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
import { hasInterpolation } from './values.mjs'

const { createPlugin, utils } = stylelint

const ruleName = 'ams/no-list-style-none'

const messages = utils.ruleMessages(ruleName, {
  missingFile: (filePath) =>
    `Could not read "${filePath}", so list styles that use tokens were not checked. Run \`pnpm --filter @amsterdam/design-system-tokens run build\` to generate it`,
  rejected: (source, property) =>
    `Expected "${source}" not to resolve to "none" in "${property}". Safari then removes the list from the accessibility tree; hide markers with list-style-type: "" instead`,
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

    root.walkDecls(/^list-style(-type)?$/i, (declaration) => {
      if (hasInterpolation(declaration.value)) {
        return
      }

      /* A literal `none` is judged by defensive-css/no-list-style-none; this rule only adds the
       * tokenised declarations that rule cannot see into.
       */
      if (!declaration.value.includes('var(')) {
        return
      }

      const resolved = resolveValue(declaration.value, knownCustomProperties)

      if (resolved === null || resolved.trim().toLowerCase() !== 'none') {
        return
      }

      const source = getReferencedCustomProperty(declaration.value) ?? resolved

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
