/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, InputHTMLAttributes } from 'react'

export const dateInputTypes = ['date', 'datetime-local'] as const

type DateInputType = (typeof dateInputTypes)[number]

export type DateInputProps = {
  /** Whether the value fails a validation rule. */
  invalid?: boolean
  /** The kind of data that the user should provide. */
  type?: DateInputType
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'aria-invalid' | 'type'>

export const DateInput = forwardRef(
  ({ className, invalid, type = 'date', ...restProps }: DateInputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <input
      {...restProps}
      aria-invalid={invalid || undefined}
      className={clsx('ams-date-input', className)}
      ref={ref}
      type={type}
    />
  ),
)

DateInput.displayName = 'DateInput'
