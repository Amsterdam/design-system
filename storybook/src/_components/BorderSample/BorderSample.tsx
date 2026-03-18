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
  style?: string
  /** A border-width token value, either a CSS value or a token reference. */
  width?: string
} & Omit<HTMLAttributes<HTMLDivElement>, 'style'>

export const BorderSample = ({ className, style, width, ...restProps }: BorderSampleProps) => (
  <div
    {...restProps}
    className={clsx('_ams-border-sample', 'sb-unstyled', className)}
    style={{
      // borderInlineStartStyle is a strict CSS property, so we cast it from string to CSSProperties
      borderInlineStartStyle: style ? formatTokenValue<CSSProperties['borderInlineStartStyle']>(style) : undefined,
      borderInlineStartWidth: width ? formatTokenValue(width) : undefined,
    }}
  />
)
