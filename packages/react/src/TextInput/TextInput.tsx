/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const TextInput = forwardRef(
  ({ className, ...restProps }: TextInputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <input {...restProps} className={clsx('amsterdam-text-input', className)} ref={ref} type="text" />
  ),
)

TextInput.displayName = 'TextInput'
