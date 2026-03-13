/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { dimensionToString } from '../dimensionToString.js'

/**
 * Normalizes DTCG dimension objects within shadow token sub-values to bare CSS strings.
 *
 * The DTCG spec requires dimension values to be expressed as objects
 * (`{ value: number, unit: "px" | "rem" }`), but Style Dictionary's built-in
 * `shadow/css/shorthand` transform expects sub-values like `offsetX`, `offsetY`,
 * `blur`, and `spread` to already be CSS strings (e.g. `"0.5rem"`).
 *
 * This transform bridges that gap by converting any dimension objects found in
 * shadow sub-values to their CSS string equivalents before `shadow/css/shorthand` runs.
 * Non-object values (bare strings, resolved references) are passed through unchanged.
 *
 * Must be applied **before** `shadow/css/shorthand` in the transforms array,
 * and must be transitive so it runs after token references are resolved.
 *
 * @example
 * // Input ($value of a shadow token):
 * { offsetX: { value: 0, unit: "rem" }, blur: { value: 0.5, unit: "rem" }, ... }
 *
 * // Output (ready for shadow/css/shorthand):
 * { offsetX: "0rem", blur: "0.5rem", ... }
 *
 * @see {@link https://www.designtokens.org/TR/2025.10/format/#shadow} DTCG shadow spec
 * @see {@link https://github.com/style-dictionary/style-dictionary/issues/1398} Related SD issue
 */
export const shadowDTCGDimensionNormalize = {
  filter: (token) => (token.$type ?? token.type) === 'shadow',
  name: 'shadow/dtcg-dimension-normalize',
  transform: (token) => {
    const value = token.$value ?? token.value
    const normalize = (shadow) => ({
      ...shadow,
      blur: dimensionToString(shadow.blur),
      offsetX: dimensionToString(shadow.offsetX),
      offsetY: dimensionToString(shadow.offsetY),
      spread: dimensionToString(shadow.spread),
    })

    return Array.isArray(value) ? value.map(normalize) : normalize(value)
  },
  transitive: true,
  type: 'value',
}
