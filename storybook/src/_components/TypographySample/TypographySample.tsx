/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes } from 'react'

import { clsx } from 'clsx'

import { formatTokenValue } from '#storybook/_common/formatTokenValue'

import './typography-sample.css'

type TypographySampleProps = {
  /** Whether to use the tokens for Compact Mode. */
  readonly compact?: boolean
  /** A font-family token value, either a CSS value or a token reference. */
  readonly fontFamily?: string
  /**
   * A font-size token value, either a CSS value or a token reference.
   * Avoid `clamp` values — we want to display the given size on any viewport.
   * Use `rems` so the font size scales automatically if the user changes their browser's base font size.
   */
  readonly fontSize?: string
  /** A font-style token value, either a CSS value or a token reference. */
  readonly fontStyle?: string
  /** A font-weight token value, either a CSS value or a token reference. */
  readonly fontWeight?: string
  /** A line-height token value, either a CSS value or a token reference. */
  readonly lineHeight?: string
} & Readonly<HTMLAttributes<HTMLSpanElement>>

export const TypographySample = ({
  className,
  compact,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight = 'body-text',
  lineHeight,
  style,
  ...restProps
}: TypographySampleProps) => (
  <span
    {...restProps}
    className={clsx('_ams-typography-sample', compact && 'ams-theme--compact', 'sb-unstyled', className)}
    style={{
      ...style,
      ...(fontFamily ? { fontFamily: formatTokenValue(fontFamily) } : {}),
      ...(fontSize ? { fontSize: formatTokenValue(fontSize) } : {}),
      ...(fontStyle ? { fontStyle: formatTokenValue(fontStyle) } : {}),
      ...(fontWeight ? { fontWeight: formatTokenValue(fontWeight) } : {}),
      ...(lineHeight ? { lineHeight: formatTokenValue(lineHeight) } : {}),
    }}
  >
    Abc
  </span>
)
