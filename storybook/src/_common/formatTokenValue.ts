/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { formatCustomPropertyName } from './formatCustomPropertyName'

/**
 * Converts design token references in a string to CSS custom properties.
 * Supports both single references and strings containing multiple references.
 *
 * @param value - A token value that may contain variable references (e.g., "{ams.space.m}") or be a literal value (e.g., "2px")
 * @returns String with all token references replaced by CSS custom properties
 *
 * @example
 * formatTokenValue("{ams.border.width.s}")                                  // "var(--ams-border-width-s)"
 * formatTokenValue("{ams.space.m}")                                         // "var(--ams-space-m)"
 * formatTokenValue("{ams.color.text.default}")                              // "var(--ams-color-text)"
 * formatTokenValue("2px")                                                   // "2px"
 * formatTokenValue("inset 0rem {ams.border.width.m} 0rem {ams.color.separator}")
 * // "inset 0rem var(--ams-border-width-m) 0rem var(--ams-color-separator)"
 */
export function formatTokenValue<T = string>(value: string): T {
  if (value.includes('{')) {
    return value.replace(
      /\{([^}]+)\}/g,
      (_, ref: string) => `var(${formatCustomPropertyName(ref.split('.'))})`,
    ) as unknown as T
  }

  return value as unknown as T
}
