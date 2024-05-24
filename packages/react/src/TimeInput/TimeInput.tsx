/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, InputHTMLAttributes } from 'react'

export type TimeInputProps = {
  /** Whether the value fails a validation rule. */
  invalid?: boolean
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'aria-invalid' | 'type'>

export const TimeInput = forwardRef(
  ({ className, invalid, ...restProps }: TimeInputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <input
      {...restProps}
      ref={ref}
      className={clsx('ams-time-input', className)}
      type="time"
      aria-invalid={invalid || undefined}
    />
  ),
)

TimeInput.displayName = 'TimeInput'
