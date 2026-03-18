/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes } from 'react'

import './typography-sample.css'
import { clsx } from 'clsx'

import { formatTokenValue } from '../../_common/formatTokenValue'

type TypographySampleProps = {
  /** Whether to use the tokens for Compact Mode. */
  compact?: boolean
  /** A font-family token value, either a CSS value or a token reference. */
  fontFamily?: string
  /**
   * A font-size token value, either a CSS value or a token reference.'`).
   * Avoid `clamp` values — we want to display the given size on any viewport.
   * Use `rems` so the font size scales automatically if the user changes their browser's base font size.
   */
  fontSize?: string
  /** A font-weight token value, either a CSS value or a token reference. */
  fontWeight?: string
  /** A line-height token value, either a CSS value or a token reference. */
  lineHeight?: string
} & HTMLAttributes<HTMLSpanElement>

export const TypographySample = ({
  className,
  compact,
  fontFamily,
  fontSize,
  fontWeight = 'body-text',
  lineHeight,
  ...restProps
}: TypographySampleProps) => (
  <span
    {...restProps}
    className={clsx('_ams-typography-sample', compact && 'ams-theme--compact', 'sb-unstyled', className)}
    style={{
      fontFamily: fontFamily ? formatTokenValue(fontFamily) : undefined,
      fontSize: fontSize ? formatTokenValue(fontSize) : undefined,
      fontWeight: fontWeight ? formatTokenValue(fontWeight) : undefined,
      lineHeight: lineHeight ? formatTokenValue(lineHeight) : undefined,
    }}
  >
    Abc
  </span>
)
