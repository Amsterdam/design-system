/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'

import './space-sample.css'
import { formatTokenValue } from '../../_common/formatTokenValue'

type SpaceSampleProps = {
  value?: string
} & HTMLAttributes<HTMLDivElement>

export const SpaceSample = ({ className, value }: SpaceSampleProps) => (
  <div
    className={clsx('ams-docs-spacing-sample', 'sb-unstyled', className)}
    style={{
      ...(value && { inlineSize: formatTokenValue(value) }),
    }}
  />
)
