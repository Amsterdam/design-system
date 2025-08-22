/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, InputHTMLAttributes } from 'react'

export type TimeInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'aria-invalid' | 'type'> & {
  /** Whether the value fails a validation rule. */
  invalid?: boolean
}

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-time-input--docs Time Input docs at Amsterdam Design System}
 */
export const TimeInput = forwardRef(
  ({ className, invalid, ...restProps }: TimeInputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <input
      {...restProps}
      aria-invalid={invalid || undefined}
      className={clsx('ams-time-input', className)}
      ref={ref}
      type="time"
    />
  ),
)

TimeInput.displayName = 'TimeInput'
