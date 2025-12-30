/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */
import { clsx } from 'clsx'

import './font-design-token.css'
import { tokenToCss } from '../_common/tokenToCss'

type FontDesignTokenProps = {
  /** Whether to use the tokens for Compact Mode. */
  compact?: boolean
  /** The font family to use in the example.
   * Either a token reference like "{typography.font-family}" or a font family name.
   */
  fontFamily?: string
  /**
   * The font size to use in the example.
   * Either a number in pixels (will be converted to rems) or a token reference like "{typography.heading.lg.font-size}".
   */
  fontSize?: number | string
  /**
   * The font weight to use in the example.
   * Either a token reference like "{typography.heading.lg.font-weight}" or the distinctive part of its design token's name.
   */
  fontWeight?: string
  /**
   * The line height to use in the example.
   * Either a token reference like "{typography.heading.lg.line-height}" or the distinctive part of its design token's name.
   */
  lineHeight?: string
}

/**
 * Converts a value to a CSS-compatible style value.
 * - Numbers are treated as pixels and converted to rems.
 * - Token references (containing curly braces) are converted to CSS custom properties.
 * - Plain strings are used to construct a token name using the provided prefix and suffix.
 */
const toStyleValue = (value: string | number, tokenPrefix: string, tokenSuffix: string): string => {
  if (typeof value === 'number') {
    return `${value / 16}rem`
  }

  if (value.includes('{')) {
    return tokenToCss(value)
  }

  return `var(--${tokenPrefix}${value}${tokenSuffix})`
}

export const FontDesignToken = ({ compact, fontSize, fontWeight = 'body-text', lineHeight }: FontDesignTokenProps) => {
  return (
    <span
      className={clsx('ams-docs-font-design-token', compact && 'ams-theme--compact', 'sb-unstyled')}
      style={{
        ...(fontSize && { fontSize: toStyleValue(fontSize, 'ams-typography-', '-font-size') }),
        ...(fontWeight && { fontWeight: toStyleValue(fontWeight, 'ams-typography-', '-font-weight') }),
        ...(lineHeight && { lineHeight: toStyleValue(lineHeight, 'ams-typography-', '-line-height') }),
      }}
    >
      Abc
    </span>
  )
}
