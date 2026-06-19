/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { CSSProperties, HTMLAttributes } from 'react'

import { clsx } from 'clsx'

import { formatTokenValue } from '#storybook/_common/formatTokenValue'

import './border-sample.css'

type BorderSampleProps = {
  /** A border-style token value, either a CSS keyword or a token reference. */
  readonly lineStyle?: string
  /** A border-width token value, either a CSS value or a token reference. */
  readonly width?: string
} & Readonly<HTMLAttributes<HTMLDivElement>>

export const BorderSample = ({ className, lineStyle, style, width, ...restProps }: BorderSampleProps) => {
  if (!lineStyle && !width) return null

  // Negative border tokens represent inset box-shadows; show their absolute width in the sample.
  const positiveWidth = width?.startsWith('-') ? width.substring(1) : width

  return (
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
        borderInlineStartWidth: positiveWidth ? formatTokenValue(positiveWidth) : style?.borderInlineStartWidth,
      }}
    />
  )
}
