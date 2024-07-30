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
} & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'aria-invalid' | 'autoCapitalize' | 'autoCorrect' | 'spellCheck' | 'type'
>

export const PasswordInput = forwardRef(
  ({ className, dir, invalid, ...restProps }: PasswordInputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <input
      {...restProps}
      aria-invalid={invalid || undefined}
      autoCapitalize="none"
      autoCorrect="off"
      className={clsx('ams-password-input', className)}
      dir={dir ?? 'auto'}
      ref={ref}
      spellCheck="false"
      type="password"
    />
  ),
)

PasswordInput.displayName = 'PasswordInput'
