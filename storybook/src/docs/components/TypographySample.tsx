/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

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
   * In pixels for easy reference; will be converted to rems.
   * No fluidity here: we want to display the given size on any viewport.
   */
  fontSize?: string
  /** The font weight to use in the example. */
  fontWeight?: string
  /** The line height to use in the example. */
  lineHeight?: string
}

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
