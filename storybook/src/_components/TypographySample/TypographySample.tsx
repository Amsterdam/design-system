/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes } from 'react'

import { clsx } from 'clsx'

import './typography-sample.css'
import { formatTokenValue } from '../../_common/formatTokenValue'

type TypographySampleProps = {
  /** Whether to use the tokens for Compact Mode. */
  compact?: boolean
  /** The font family to use in the example */
  fontFamily?: string
  /**
   * The font size to use in the example.
   * This shouldn’t be a `clamp` value or a token containing one –
   * we want to display the given size on any viewport.
   * Use `rems` so the font size scales automatically if the user changes their browser’s base font size.
   */
  fontSize?: string
  /** The font weight to use in the example. */
  fontWeight?: string
  /** The line height to use in the example. */
  lineHeight?: string
} & Omit<HTMLAttributes<HTMLDivElement>, 'className'>

export const TypographySample = ({
  compact,
  fontFamily,
  fontSize,
  fontWeight = 'body-text',
  lineHeight,
}: TypographySampleProps) => (
  <span
    className={clsx('_ams-typography-sample', compact && 'ams-theme--compact', 'sb-unstyled')}
    style={{
      ...(fontSize && { fontSize: formatTokenValue(fontSize) }),
      ...(fontWeight && { fontWeight: formatTokenValue(fontWeight) }),
      ...(lineHeight && { lineHeight: formatTokenValue(lineHeight) }),
      ...(fontFamily && { fontFamily: formatTokenValue(fontFamily) }),
    }}
  >
    Abc
  </span>
)
