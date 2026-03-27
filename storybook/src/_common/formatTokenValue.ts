/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

/**
 * Converts design token references in a string to CSS custom properties.
 * Supports both single references and strings containing multiple references.
 *
 * @param value - A token value that may contain variable references (e.g., "{spacing.md}") or be a literal value (e.g., "2px")
 * @returns String with all token references replaced by CSS custom properties
 *
 * @example
 * formatTokenValue("{border.width.sm}")                           // "var(--border-width-sm)"
 * formatTokenValue("{spacing.md}")                                // "var(--spacing-md)"
 * formatTokenValue("2px")                                        // "2px"
 * formatTokenValue("inset 0rem {border.width.m} 0rem {color.x}") // "inset 0rem var(--border-width-m) 0rem var(--color-x)"
 */
export function formatTokenValue<Type = string>(value: string): Type {
  if (value.includes('{')) {
    return value.replace(/\{([^}]+)\}/g, (_, ref: string) => `var(--${ref.replace(/\./g, '-')})`) as unknown as Type
  }

  return value as unknown as Type
}
