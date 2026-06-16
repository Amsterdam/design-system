/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes } from 'react'

import { clsx } from 'clsx'

import { formatTokenValue } from '#storybook/_common/formatTokenValue'

import './space-sample.css'

type SpaceSampleProps = {
  /** A spacing token value, either a CSS value or a token reference. */
  readonly value?: string
} & Readonly<HTMLAttributes<HTMLDivElement>>

export const SpaceSample = ({ className, style, value, ...restProps }: SpaceSampleProps) => (
  <div
    {...restProps}
    className={clsx('_ams-space-sample', 'sb-unstyled', className)}
    style={{ ...style, ...(value ? { inlineSize: formatTokenValue(value) } : {}) }}
  />
)
