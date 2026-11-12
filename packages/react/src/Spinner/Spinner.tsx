/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export const spinnerSizes = ['large'] as const

export type SpinnerProps = {
  /** The size of the spinner. Without a size, it matches the body text next to it. */
  readonly size?: (typeof spinnerSizes)[number]
} & Readonly<Omit<HTMLAttributes<HTMLSpanElement>, 'aria-hidden' | 'children'>>

/**
 * A spinning circle that is used for a short or unknown amount of time when something on the page is loading.
 * Its size follows the surrounding text.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-feedback-spinner--docs Spinner docs at Amsterdam Design System}
 */
export const Spinner = forwardRef(
  ({ className, size, ...restProps }: SpinnerProps, ref: ForwardedRef<HTMLSpanElement>) => (
    <span
      {...restProps}
      aria-hidden
      className={clsx('ams-spinner', size && `ams-spinner--${size}`, className)}
      ref={ref}
    />
  ),
)

Spinner.displayName = 'Spinner'
