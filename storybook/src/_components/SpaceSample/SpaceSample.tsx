/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import './space-sample.css'
import type { HTMLAttributes } from 'react'

import { clsx } from 'clsx'

import { formatTokenValue } from '../../_common/formatTokenValue'

type SpaceSampleProps = {
  /** A spacing token value, either a CSS value or a token reference. */
  value?: string
} & HTMLAttributes<HTMLDivElement>

export const SpaceSample = ({ className, style, value, ...restProps }: SpaceSampleProps) => (
  <div
    {...restProps}
    className={clsx('_ams-space-sample', 'sb-unstyled', className)}
    style={{ ...style, inlineSize: value ? formatTokenValue(value) : undefined }}
  />
)
