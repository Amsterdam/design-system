/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes } from 'react'

import { clsx } from 'clsx'

import './space-sample.css'
import { formatTokenValue } from '../../_common/formatTokenValue'

type SpaceSampleProps = {
  value?: string
} & HTMLAttributes<HTMLDivElement>

export const SpaceSample = ({ className, value }: SpaceSampleProps) => (
  <div
    className={clsx('_ams-space-sample', className, 'sb-unstyled')}
    style={{
      ...(value && { inlineSize: formatTokenValue(value) }),
    }}
  />
)
