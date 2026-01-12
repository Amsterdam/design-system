/**
 * Converts a design token reference to a CSS custom property.
 *
 * @param value - A token value that may be a variable reference (e.g., "{spacing.md}") or a literal value (e.g., "2px")
 * @returns CSS custom property if value is a variable reference, otherwise the original value
 *
 * @example
 * formatToken("{border.width.sm}") // "var(--border-width-sm)"
 * formatToken("{spacing.md}")      // "var(--spacing-md)"
 * formatToken("2px")               // "2px"
 * formatToken("1rem")              // "1rem"
 */

export function formatTokenValue<Type = string>(value: string): Type {
  if (!value.includes('{')) {
    return value as unknown as Type
  }

  const cssVar = value.replace(/[{}]/g, '').replace(/\./g, '-')

  return `var(--${cssVar})` as unknown as Type
}
