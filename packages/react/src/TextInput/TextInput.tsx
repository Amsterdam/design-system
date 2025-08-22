/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, InputHTMLAttributes } from 'react'

export const textInputTypes = ['email', 'tel', 'text', 'url'] as const
type TextInputType = (typeof textInputTypes)[number]

export type TextInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'aria-invalid'> & {
  /** Whether the value fails a validation rule. */
  invalid?: boolean
  /** The kind of data that the user should provide. */
  type?: TextInputType
}

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-text-input--docs Text Input docs at Amsterdam Design System}
 */
export const TextInput = forwardRef(
  ({ className, dir, invalid, type = 'text', ...restProps }: TextInputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <input
      {...restProps}
      aria-invalid={invalid || undefined}
      className={clsx('ams-text-input', className)}
      dir={dir ?? 'auto'}
      ref={ref}
      type={type}
    />
  ),
)

TextInput.displayName = 'TextInput'
