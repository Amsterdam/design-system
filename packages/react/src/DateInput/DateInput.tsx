/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, InputHTMLAttributes } from 'react'

export type DateInputProps = {
  /** Whether the value fails a validation rule. */
  invalid?: boolean
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'aria-invalid' | 'type'>

export const DateInput = forwardRef(
  ({ className, invalid, ...restProps }: DateInputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <input
      {...restProps}
      ref={ref}
      className={clsx('ams-date-input', className)}
      type="date"
      aria-invalid={invalid || undefined}
    />
  ),
)

DateInput.displayName = 'DateInput'
