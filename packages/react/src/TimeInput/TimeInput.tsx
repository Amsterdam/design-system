/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, InputHTMLAttributes } from 'react'

export type TimeInputProps = InputHTMLAttributes<HTMLInputElement>

export const TimeInput = forwardRef(
  ({ className, ...restProps }: TimeInputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <input {...restProps} ref={ref} className={clsx('ams-time-input', className)} type="time" min="09:00" max="17:00" />
  ),
)

TimeInput.displayName = 'TimeInput'
