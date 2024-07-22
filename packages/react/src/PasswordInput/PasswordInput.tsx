/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, InputHTMLAttributes } from 'react'

export type PasswordInputProps = {
  /** Whether the value fails a validation rule. */
  invalid?: boolean
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'aria-invalid' | 'type'>

export const PasswordInput = forwardRef(
  ({ className, invalid, ...restProps }: PasswordInputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <input
      {...restProps}
      aria-invalid={invalid || undefined}
      className={clsx('ams-password-input', className)}
      ref={ref}
      type="password"
    />
  ),
)

PasswordInput.displayName = 'PasswordInput'
