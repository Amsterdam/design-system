/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, InputHTMLAttributes } from 'react'

export type DateInputProps = {
  /** The available types are 'date', 'datetime-local', 'month', 'week' */
  type?: 'date' | 'datetime-local' | 'month' | 'week'
} & InputHTMLAttributes<HTMLInputElement>

export const DateInput = forwardRef(
  ({ className, type = 'date', ...restProps }: DateInputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <input {...restProps} ref={ref} className={clsx('ams-date-input', className)} type={type} />
  ),
)

DateInput.displayName = 'DateInput'
