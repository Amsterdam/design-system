/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import './shadow-sample.css'
import type { HTMLAttributes } from 'react'

import { clsx } from 'clsx'

type ShadowSampleProps = {
  /** A box-shadow token value, either a CSS value or containing token references. */
  value: string
} & HTMLAttributes<HTMLDivElement>

/** Replaces all `{token.reference}` occurrences in a string with `var(--token-reference)`. */
const formatShadowValue = (value: string): string =>
  value.replace(/\{([^}]+)\}/g, (_, ref: string) => `var(--${ref.replace(/\./g, '-')})`)

export const ShadowSample = ({ className, style, value, ...restProps }: ShadowSampleProps) => {
  const formattedValue = formatShadowValue(value)

  return (
    <div
      {...restProps}
      className={clsx('_ams-shadow-sample', 'sb-unstyled', className)}
      style={{ ...style, boxShadow: formattedValue }}
    />
  )
}
