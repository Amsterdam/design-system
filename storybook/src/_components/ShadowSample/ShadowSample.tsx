/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import './shadow-sample.css'
import type { HTMLAttributes } from 'react'

import { clsx } from 'clsx'

import { formatTokenValue } from '../../_common/formatTokenValue'

type ShadowSampleProps = {
  /** A box-shadow token value, either a CSS value or containing token references. */
  readonly value: string
} & Readonly<HTMLAttributes<HTMLDivElement>>

export const ShadowSample = ({ className, style, value, ...restProps }: ShadowSampleProps) => {
  const formattedValue = formatTokenValue(value)

  return (
    <div
      {...restProps}
      className={clsx('_ams-shadow-sample', 'sb-unstyled', className)}
      style={{ ...style, boxShadow: formattedValue }}
    />
  )
}
