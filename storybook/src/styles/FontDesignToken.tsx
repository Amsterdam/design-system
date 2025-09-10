/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { clsx } from 'clsx'
import './font-design-token.css'

type FontDesignTokenProps = {
  /** Whether to use the tokens for Compact Mode. */
  compact?: boolean
  /**
   * The font size to use in the example.
   * In pixels for easy reference; will be converted to rems.
   * No fluidity here: we want to display the given size on any viewport.
   */
  fontSize: number
  /** The font weight to use in the example. Provide the distinctive part of its design token’s name. */
  fontWeight?: string
  /** The line height to use in the example. Provide the distinctive part of its design token’s name. */
  lineHeight: string
}

export const FontDesignToken = ({ compact, fontSize, fontWeight = 'body-text', lineHeight }: FontDesignTokenProps) => (
  <span
    className={clsx('ams-docs-font-design-token', compact && 'ams-theme--compact', 'sb-unstyled')}
    style={{
      fontSize: `${fontSize / 16}rem`,
      fontWeight: `var(--ams-typography-${fontWeight}-font-weight)`,
      lineHeight: `var(--ams-typography-${lineHeight}-line-height)`,
    }}
  >
    Abc
  </span>
)
