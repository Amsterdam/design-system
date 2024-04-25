/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, InputHTMLAttributes } from 'react'

type InputTypes = 'text' | 'file' | 'password' | 'email' | 'number' | 'tel' | 'url'

export type InputProps = {
  type?: InputTypes
} & InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef(
  ({ className, type, ...restProps }: InputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <input {...restProps} className={clsx('ams-input', className)} ref={ref} type={type} />
  ),
)

Input.displayName = 'Input'
