/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, InputHTMLAttributes } from 'react'

export type TextInputProps = {
  /** Whether the value fails a validation rule. */
  invalid?: boolean
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'aria-invalid'>

export const TextInput = forwardRef(
  ({ className, dir, invalid, ...restProps }: TextInputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <input
      {...restProps}
      aria-invalid={invalid || undefined}
      className={clsx('ams-text-input', className)}
      dir={dir ?? 'auto'}
      ref={ref}
      type="text"
    />
  ),
)

TextInput.displayName = 'TextInput'
