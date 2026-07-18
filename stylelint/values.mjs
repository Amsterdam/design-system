/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

/* Absolute lengths expressed in pixels, used to compare two lengths that use different units.
 * `em` is deliberately absent: it resolves against the parent font size, which is unknowable here.
 * Two `em` values are still comparable to each other, which `calculateRatio` handles separately.
 */
const PIXELS_PER_UNIT = {
  cm: 96 / 2.54,
  in: 96,
  mm: 96 / 25.4,
  pc: 16,
  pt: 96 / 72,
  px: 1,
  q: 96 / 101.6,
  rem: 16,
}

const LENGTH_PATTERN = /^(-?(?:\d+\.?\d*|\.\d+))([a-z%]+)$/i

/* Matches a number immediately followed by a viewport unit, including the small, large and dynamic
 * variants. The leading digit keeps identifiers such as `--foo-vw` from matching.
 */
const VIEWPORT_UNIT_PATTERN = /\d\s*(?:s|l|d)?v(?:w|h|i|b|min|max)\b/i

/**
 * Splits a CSS value on its top level commas, ignoring commas nested in functions or quoted strings.
 * Escaped quotes are not accounted for; font stacks and `clamp()` arguments do not use them.
 *
 * @param {string} value - The value to split.
 * @returns {string[]} The trimmed parts.
 */
export function splitTopLevelParts(value) {
  const parts = []
  let current = ''
  let depth = 0
  let quote = null

  for (const character of value) {
    if (quote) {
      current += character

      if (character === quote) {
        quote = null
      }

      continue
    }

    if (character === '"' || character === "'") {
      quote = character
      current += character

      continue
    }

    if (character === '(') {
      depth += 1
    } else if (character === ')') {
      depth -= 1
    }

    if (character === ',' && depth === 0) {
      parts.push(current.trim())
      current = ''

      continue
    }

    current += character
  }

  parts.push(current.trim())

  return parts
}

/**
 * Finds the first call of the given function in a value, matching parentheses so that nested calls
 * are kept intact.
 *
 * @param {string} value - The value to search.
 * @param {string} functionName - The function to look for, such as `var` or `clamp`.
 * @returns {{ args: string[], end: number, start: number } | null} The call, or null when absent.
 */
export function findFunction(value, functionName) {
  const opening = `${functionName}(`
  let start = value.indexOf(opening)

  while (start !== -1) {
    /* Reject a match that is the tail of a longer identifier, such as `my-var(` for `var(`. */
    const isOwnIdentifier = start === 0 || !/[\w-]/.test(value[start - 1])

    if (isOwnIdentifier) {
      let depth = 0

      for (let index = start + functionName.length; index < value.length; index += 1) {
        if (value[index] === '(') {
          depth += 1
        } else if (value[index] === ')') {
          depth -= 1

          if (depth === 0) {
            const end = index + 1

            return {
              args: splitTopLevelParts(value.slice(start + opening.length, index)),
              end,
              start,
            }
          }
        }
      }

      return null
    }

    start = value.indexOf(opening, start + 1)
  }

  return null
}

/**
 * Parses a CSS length into its number and unit.
 *
 * @param {string} value - The length to parse.
 * @returns {{ number: number, unit: string } | null} The parsed length, or null when not a length.
 */
export function parseLength(value) {
  const match = LENGTH_PATTERN.exec(value.trim())

  if (!match) {
    return null
  }

  return { number: Number(match[1]), unit: match[2].toLowerCase() }
}

/**
 * Calculates how many times larger the maximum of a `clamp()` is than its minimum.
 * Lengths that share a unit are compared directly, so units without a fixed pixel size still work.
 *
 * @param {string} minimum - The minimum length.
 * @param {string} maximum - The maximum length.
 * @returns {number | null} The ratio, or null when the lengths cannot be compared.
 */
export function calculateRatio(minimum, maximum) {
  const parsedMinimum = parseLength(minimum)
  const parsedMaximum = parseLength(maximum)

  if (!parsedMinimum || !parsedMaximum || parsedMinimum.number <= 0) {
    return null
  }

  if (parsedMinimum.unit === parsedMaximum.unit) {
    return parsedMaximum.number / parsedMinimum.number
  }

  const minimumPixels = PIXELS_PER_UNIT[parsedMinimum.unit]
  const maximumPixels = PIXELS_PER_UNIT[parsedMaximum.unit]

  if (!minimumPixels || !maximumPixels) {
    return null
  }

  return (parsedMaximum.number * maximumPixels) / (parsedMinimum.number * minimumPixels)
}

/**
 * Reports whether a value scales with the viewport.
 *
 * @param {string} value - The value to test.
 * @returns {boolean} True when the value contains a viewport unit.
 */
export function hasViewportUnit(value) {
  return VIEWPORT_UNIT_PATTERN.test(value)
}

/**
 * Blanks out every call of the given function in a value, keeping the string length intact so that
 * positions elsewhere in the value stay valid.
 *
 * @param {string} value - The value to blank in.
 * @param {string} functionName - The function whose calls to blank.
 * @returns {string} The value with each call replaced by spaces.
 */
function blankFunction(value, functionName) {
  let result = value
  let call

  while ((call = findFunction(result, functionName))) {
    result = result.slice(0, call.start) + ' '.repeat(call.end - call.start) + result.slice(call.end)
  }

  return result
}

/**
 * Reports whether a track list contains a flexible track that is not wrapped in `minmax()`.
 * Such a track cannot shrink below its content’s min-content size, so long unbreakable content
 * pushes the grid out of its container.
 *
 * @param {string} value - The resolved track list to test.
 * @returns {boolean} True when a bare `fr` track is present.
 */
export function hasBareFrTrack(value) {
  return /(?:^|[\s,(])\d*\.?\d+fr\b/i.test(blankFunction(value, 'minmax'))
}

/**
 * Reports whether a value contains a length in pixels.
 * Quoted strings are ignored, so a font name or content string cannot produce a match.
 *
 * @param {string} value - The resolved value to test.
 * @returns {boolean} True when a pixel length is present.
 */
export function hasPixelLength(value) {
  return /(?:^|[^\w.-])-?\d*\.?\d+px\b/i.test(value.replace(/(['"]).*?\1/g, ' '))
}

/**
 * Reports whether a value contains Sass interpolation, which only resolves when the stylesheet is
 * compiled and therefore cannot be judged here.
 *
 * @param {string} value - The value to test.
 * @returns {boolean} True when the value is interpolated.
 */
export function hasInterpolation(value) {
  return value.includes('#{')
}
