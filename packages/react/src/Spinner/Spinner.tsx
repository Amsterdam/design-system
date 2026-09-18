/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export const spinnerSizeOptions = ['small', 'medium', 'large'] as const

export type SpinnerProps = {
  /**
   * The size of the spinner.
   * @default 'medium'
   */
  readonly size?: (typeof spinnerSizeOptions)[number]
} & Readonly<Omit<HTMLAttributes<HTMLDivElement>, 'aria-hidden' | 'children'>>

/**
 * A spinning circle that is used for a short or unknown amount of time when something on the page is loading.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-feedback-spinner--docs Spinner docs at Amsterdam Design System}
 */
export const Spinner = forwardRef(
  ({ className, size = 'medium', ...restProps }: SpinnerProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} aria-hidden className={clsx('ams-spinner', `ams-spinner--${size}`, className)} ref={ref} />
  ),
)

Spinner.displayName = 'Spinner'
