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
import { calculateRatio, findFunction, hasInterpolation, hasViewportUnit } from './values.mjs'

const { createPlugin, utils } = stylelint

const ruleName = 'ams/no-unsafe-clamp-font-size'

/* Text must stay legible at 200% zoom. A font size that grows more than this between its smallest
 * and largest viewport leaves too little room for the user to enlarge it further.
 */
const DEFAULT_MAXIMUM_RATIO = 2.5

const messages = utils.ruleMessages(ruleName, {
  missingFile: (filePath) =>
    `Could not read "${filePath}", so font sizes that use tokens were not checked. Run \`pnpm --filter @amsterdam/design-system-tokens run build\` to generate it`,
  rejected: (source, ratio, maximumRatio) =>
    `Expected "${source}" to scale by at most ${maximumRatio}× between its smallest and largest size, but it scales by ${ratio}×. Text has to stay resizable to 200% (WCAG 2.2 Level AA, 1.4.4)`,
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
          maxRatio: [(value) => typeof value === 'number' && value > 0],
        },
      },
    )

    if (!validOptions) {
      return
    }

    const maximumRatio = secondaryOptions.maxRatio ?? DEFAULT_MAXIMUM_RATIO
    const { customProperties, missingFiles } = readCustomProperties([secondaryOptions.importFrom ?? []].flat())

    for (const missingFile of missingFiles) {
      if (!warnedFiles.has(missingFile)) {
        warnedFiles.add(missingFile)

        result.warn(messages.missingFile(missingFile), { stylelintType: 'invalidOption' })
      }
    }

    const knownCustomProperties = withDeclaredCustomProperties(root, customProperties)

    root.walkDecls(/^font-size$/i, (declaration) => {
      if (hasInterpolation(declaration.value)) {
        return
      }

      const resolved = resolveValue(declaration.value, knownCustomProperties)

      if (resolved === null) {
        return
      }

      const clamp = findFunction(resolved, 'clamp')

      if (!clamp || clamp.args.length !== 3) {
        return
      }

      const [minimum, preferred, maximum] = clamp.args

      /* Only a font size that scales with the viewport can stop the user from resizing text, because
       * a viewport stays the same size while the user zooms in.
       */
      if (!hasViewportUnit(preferred)) {
        return
      }

      const ratio = calculateRatio(minimum, maximum)

      if (ratio === null || ratio <= maximumRatio) {
        return
      }

      const source = getReferencedCustomProperty(declaration.value) ?? `clamp(${minimum}, ${preferred}, ${maximum})`

      utils.report({
        message: messages.rejected(source, Number(ratio.toFixed(2)), maximumRatio),
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
