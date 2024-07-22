/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, InputHTMLAttributes, PropsWithChildren } from 'react'

export type PasswordInputProps = PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>

export const PasswordInput = forwardRef(
  ({ children, className, ...restProps }: PasswordInputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <input {...restProps} ref={ref} className={clsx('ams-password-input', className)}>
      {children}
    </input>
  ),
)

PasswordInput.displayName = 'PasswordInput'
