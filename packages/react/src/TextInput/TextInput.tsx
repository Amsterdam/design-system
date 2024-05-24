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
  ({ className, invalid, ...restProps }: TextInputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <input
      {...restProps}
      className={clsx('ams-text-input', className)}
      ref={ref}
      type="text"
      aria-invalid={invalid || undefined}
    />
  ),
)

TextInput.displayName = 'TextInput'
