/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { CSSProperties, HTMLAttributes } from 'react'

import { clsx } from 'clsx'

import './border-sample.css'
import { formatTokenValue } from '../../_common/formatTokenValue'

type BorderSampleProps = {
  /** A border-style token value, either a CSS keyword or a token reference. */
  lineStyle?: string
  /** A border-width token value, either a CSS value or a token reference. */
  width?: string
} & HTMLAttributes<HTMLDivElement>

export const BorderSample = ({ className, lineStyle, style, width, ...restProps }: BorderSampleProps) => (
  <div
    {...restProps}
    className={clsx('_ams-border-sample', 'sb-unstyled', className)}
    style={{
      ...style,
      // Typed as a closed keyword union, not string, so the generic cast is required
      borderInlineStartStyle:
        lineStyle !== undefined
          ? formatTokenValue<CSSProperties['borderInlineStartStyle']>(lineStyle)
          : style?.borderInlineStartStyle,
      borderInlineStartWidth: width !== undefined ? formatTokenValue(width) : style?.borderInlineStartWidth,
    }}
  />
)
