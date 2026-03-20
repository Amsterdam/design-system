/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import './color-sample.css'
import type { HTMLAttributes } from 'react'

import { clsx } from 'clsx'

import { formatTokenValue } from '../../_common/formatTokenValue'

type ColorSampleProps = {
  /** A colour token value, either a CSS value or a token reference. */
  value: string
} & HTMLAttributes<HTMLDivElement>

export const ColorSample = ({ className, style, value, ...restProps }: ColorSampleProps) =>
  value ? (
    <div
      {...restProps}
      className={clsx('_ams-color-sample', 'sb-unstyled', className)}
      style={{ ...style, backgroundColor: formatTokenValue(value) }}
    />
  ) : null
