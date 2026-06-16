/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes } from 'react'

import { clsx } from 'clsx'

import { formatTokenValue } from '../../_common/formatTokenValue'

import './aspect-ratio-sample.css'

type AspectRatioSampleProps = {
  /** An aspect ratio value, e.g. "16 / 9" or "1 / 1". */
  readonly value: string
} & Readonly<HTMLAttributes<HTMLDivElement>>

export const AspectRatioSample = ({ className, style, value, ...restProps }: AspectRatioSampleProps) => (
  <div
    {...restProps}
    className={clsx('_ams-aspect-ratio-sample', 'sb-unstyled', className)}
    style={{ ...style, aspectRatio: formatTokenValue(value) }}
  />
)
