/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

/**
 * Converts a DTCG dimension object to a CSS value string.
 *
 * Passes through any value that is not a dimension object (e.g. a bare string
 * or an already-resolved reference), making it safe to use without pre-checking.
 *
 * @param {({ value: number, unit: 'px' | 'rem' } | string)} dimension
 * @returns {string}
 *
 * @example
 * dimensionToString({ value: 0.5, unit: 'rem' }) // '0.5rem'
 * dimensionToString('2rem') // '2rem'
 */
export const dimensionToString = (dimension) => {
  if (dimension && typeof dimension === 'object' && 'value' in dimension && 'unit' in dimension) {
    return `${dimension.value}${dimension.unit}`
  }

  return dimension
}
