/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

/**
 * Converts a design token reference to a CSS custom property.
 * If the value contains curly braces (e.g., "{ams.typography.body-text.line-height}"), it converts to
 * a CSS variable (e.g., "var(--ams-typography-body-text-line-height)"). Otherwise, returns the value as-is.
 *
 * @param value - The value, either a direct CSS value or a token reference
 * @returns The CSS-compatible value
 */

export function tokenToCss(value: string): string {
  if (value.includes('{')) {
    return `var(--${value.replace(/[{}]/g, '').replace(/\./g, '-')})`
  }

  return value
}
