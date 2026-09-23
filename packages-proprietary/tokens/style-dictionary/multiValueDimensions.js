/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

/**
 * Splits a resolved CSS value into the values it is composed of, ignoring the whitespace inside a
 * function call or a quoted string.
 *
 * @param {string} value - The resolved value to split.
 * @returns {string[]} The individual values.
 *
 * @example
 * splitValues('0 clamp(1.5rem, 1.2857rem + 1.0714vw, 2.25rem)') // ['0', 'clamp(1.5rem, 1.2857rem + 1.0714vw, 2.25rem)']
 */
export function splitValues(value) {
  const values = []
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
    } else if (character === '(') {
      depth += 1
    } else if (character === ')') {
      depth -= 1
    } else if (/\s/.test(character) && depth === 0) {
      if (current) {
        values.push(current)
      }

      current = ''

      continue
    }

    current += character
  }

  if (current) {
    values.push(current)
  }

  return values
}

/**
 * Reports whether a token is typed as a dimension.
 *
 * Both spellings count. The DTCG `$type` cannot be read on its own, because the token files merge
 * into one tree whose root sets `$type: color`, which every token without a type of its own then
 * inherits — so `nl.amsterdam.type` is what carries the type for a token that references another.
 *
 * @param {import('style-dictionary').TransformedToken} token - The token to test.
 * @returns {boolean} True when the token holds a dimension.
 */
function isDimension(token) {
  return token.$extensions?.['nl.amsterdam.type'] === 'dimension' || token.$type === 'dimension'
}

/**
 * Finds the tokens typed as a dimension that resolve to more than one value.
 *
 * Such a token is invalid wherever a single value is required: read through `calc()`, `max()`,
 * `min()` or `clamp()`, or assigned to a longhand property, the declaration is dropped at
 * computed-value time and the property falls back to its initial value rather than to the token.
 *
 * A deprecated token is left alone. It is frozen at the value it shipped with until it is removed,
 * so the constraint applies to whatever replaces it.
 *
 * @param {import('style-dictionary').TransformedToken[]} tokens - The resolved tokens to check.
 * @returns {Array<{ name: string, path: string, value: string }>} The tokens holding several values.
 */
export function findMultiValueDimensions(tokens) {
  const found = []

  for (const token of tokens) {
    if (token.$deprecated || !isDimension(token)) {
      continue
    }

    const value = String(token.$value ?? token.value)

    if (splitValues(value).length > 1) {
      found.push({ name: token.name, path: token.path.join('.'), value })
    }
  }

  return found
}
