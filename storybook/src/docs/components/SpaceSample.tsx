/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'

import './space-sample.css'
import { formatTokenValue } from '../../_common/formatTokenValue'

export type DivProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

type SpaceSampleProps = {
  spacing?: string
} & HTMLAttributes<HTMLDivElement>

export const SpaceSample = ({ className, spacing }: SpaceSampleProps) => (
  <div
    className={clsx('ams-docs-spacing-sample', 'sb-unstyled', className)}
    style={{
      ...(spacing && { inlineSize: formatTokenValue(spacing) }),
    }}
  />
)
