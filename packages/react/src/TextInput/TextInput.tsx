/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, InputHTMLAttributes } from 'react'

export type TextInputProps = InputHTMLAttributes<HTMLInputElement>

export const TextInput = forwardRef(
  ({ className, dir, ...restProps }: TextInputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <input {...restProps} className={clsx('ams-text-input', className)} dir={dir ?? 'auto'} ref={ref} type="text" />
  ),
)

TextInput.displayName = 'TextInput'
