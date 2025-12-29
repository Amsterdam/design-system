/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'

import './spacing-sample.css'

export type DivProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

type SpacingSampleProps = {
  spacing?: string
} & HTMLAttributes<HTMLDivElement>

export const SpacingSample = ({ className, spacing, style }: SpacingSampleProps) => {
  const isVariable = spacing?.includes('{')
  const spacingProp = isVariable ? `var(--${spacing?.replace(/[{}]/g, '').replace(/\./g, '-')})` : spacing

  return (
    <div
      className={clsx('ams-docs-spacing-sample', className)}
      style={{
        inlineSize: spacingProp,
        ...style,
      }}
    />
  )
}
