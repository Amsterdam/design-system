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
import { findFunctions, hasInterpolation, splitTopLevelValues } from './values.mjs'

const { createPlugin, utils } = stylelint

const ruleName = 'ams/require-single-value-token'

/* The functions that compute one value from an expression, so each of their operands is one value. */
const MATH_FUNCTIONS = ['calc', 'clamp', 'max', 'min']

/* The properties that take exactly one value. Shorthands are deliberately absent: `padding-block`
 * and `gap` take two on purpose, and the design system ships tokens that hold two for them.
 * So are `border-block-width` and the corner radii, which take a second value of their own.
 */
const DEFAULT_PROPERTIES = [
  'block-size',
  'border-block-end-width',
  'border-block-start-width',
  'border-bottom-width',
  'border-inline-end-width',
  'border-inline-start-width',
  'border-left-width',
  'border-right-width',
  'border-top-width',
  'bottom',
  'column-gap',
  'flex-basis',
  'font-size',
  'height',
  'inline-size',
  'inset-block-end',
  'inset-block-start',
  'inset-inline-end',
  'inset-inline-start',
  'left',
  'letter-spacing',
  'line-height',
  'margin-block-end',
  'margin-block-start',
  'margin-bottom',
  'margin-inline-end',
  'margin-inline-start',
  'margin-left',
  'margin-right',
  'margin-top',
  'max-block-size',
  'max-height',
  'max-inline-size',
  'max-width',
  'min-block-size',
  'min-height',
  'min-inline-size',
  'min-width',
  'outline-offset',
  'outline-width',
  'padding-block-end',
  'padding-block-start',
  'padding-bottom',
  'padding-inline-end',
  'padding-inline-start',
  'padding-left',
  'padding-right',
  'padding-top',
  'right',
  'row-gap',
  'stroke-width',
  'text-decoration-thickness',
  'text-underline-offset',
  'top',
  'vertical-align',
  'width',
  'word-spacing',
]

const messages = utils.ruleMessages(ruleName, {
  missingFile: (filePath) =>
    `Could not read "${filePath}", so tokens read where one value fits were not checked. Run \`pnpm --filter @amsterdam/design-system-tokens run build\` to generate it`,
  rejectedInFunction: (source, functionName) =>
    `Expected "${source}" to resolve to a single value inside "${functionName}()". A math function takes one value per operand, so a second one makes the declaration invalid at computed-value time and the property falls back to its initial value`,
  rejectedInProperty: (source, property) =>
    `Expected "${source}" to resolve to a single value in "${property}". That longhand takes one value, so a second one makes the declaration invalid at computed-value time and the property falls back to its initial value`,
})

const meta = { url: 'https://github.com/Amsterdam/design-system/blob/develop/stylelint/README.md' }

/* Token files that could not be read, so the warning is emitted once per lint run and not once per
 * stylesheet.
 */
const warnedFiles = new Set()

/**
 * Finds the references that a math function computes with, naming the innermost one that encloses
 * each. A reference inside another reference is left out: it is a fallback, which only applies
 * while the custom property before it is undefined, and `resolveValue` weighs that up already.
 *
 * @param {string} value - The declaration value to search.
 * @returns {Array<{ functionName: string, reference: { end: number, start: number } }>} The
 *   references a math function reads, each with the function that reads it.
 */
function findMathReferences(value) {
  const calls = MATH_FUNCTIONS.flatMap((functionName) =>
    findFunctions(value, functionName).map((call) => ({ ...call, functionName })),
  )
  const references = findFunctions(value, 'var')
  const encloses = (outer, inner) => inner.start > outer.start && inner.end <= outer.end
  const found = []

  for (const reference of references) {
    if (references.some((other) => other !== reference && encloses(other, reference))) {
      continue
    }

    const [innermost] = calls
      .filter((call) => encloses(call, reference))
      .sort((first, second) => first.end - first.start - (second.end - second.start))

    if (innermost) {
      found.push({ functionName: innermost.functionName, reference })
    }
  }

  return found
}

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

    const properties = new Set((secondaryOptions.properties ?? DEFAULT_PROPERTIES).map((name) => name.toLowerCase()))
    const { customProperties, missingFiles } = readCustomProperties([secondaryOptions.importFrom ?? []].flat())

    for (const missingFile of missingFiles) {
      if (!warnedFiles.has(missingFile)) {
        warnedFiles.add(missingFile)

        result.warn(messages.missingFile(missingFile), { stylelintType: 'invalidOption' })
      }
    }

    const knownCustomProperties = withDeclaredCustomProperties(root, customProperties)

    /**
     * Resolves a value and splits it into the values it holds.
     *
     * @param {string} value - The value to resolve.
     * @returns {string[] | null} The individual values, or null when the value is not knowable.
     */
    const resolveToValues = (value) => {
      const resolved = resolveValue(value, knownCustomProperties)

      return resolved === null ? null : splitTopLevelValues(resolved)
    }

    root.walkDecls((declaration) => {
      /* Interpolation only resolves once the stylesheet is compiled. A value without a reference
       * holds whatever it literally says, which needs no token resolution to read.
       */
      if (hasInterpolation(declaration.value) || !declaration.value.includes('var(')) {
        return
      }

      for (const { functionName, reference } of findMathReferences(declaration.value)) {
        const call = declaration.value.slice(reference.start, reference.end)
        const values = resolveToValues(call)

        if (values === null || values.length < 2) {
          continue
        }

        utils.report({
          message: messages.rejectedInFunction(getReferencedCustomProperty(call) ?? values.join(' '), functionName),
          node: declaration,
          result,
          ruleName,
          word: call,
        })
      }

      if (!properties.has(declaration.prop.toLowerCase())) {
        return
      }

      const values = resolveToValues(declaration.value)

      if (values === null || values.length < 2) {
        return
      }

      utils.report({
        message: messages.rejectedInProperty(
          getReferencedCustomProperty(declaration.value) ?? values.join(' '),
          declaration.prop,
        ),
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
