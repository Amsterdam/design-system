/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'

import './spacing-sample.css'
import { formatTokenValue } from '../../_common/formatTokenValue'

export type DivProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

type SpacingSampleProps = {
  spacing?: string
} & HTMLAttributes<HTMLDivElement>

export const SpacingSample = ({ className, spacing }: SpacingSampleProps) => (
  <div
    className={clsx('ams-docs-spacing-sample', 'sb-unstyled', className)}
    style={{
      ...(spacing && { inlineSize: formatTokenValue(spacing) }),
    }}
  />
)
