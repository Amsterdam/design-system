/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, InputHTMLAttributes } from 'react'

export type DateInputProps = InputHTMLAttributes<HTMLInputElement>

export const DateInput = forwardRef(
  ({ className, ...restProps }: DateInputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <input {...restProps} ref={ref} className={clsx('ams-date-input', className)} type="date" />
  ),
)

DateInput.displayName = 'DateInput'
