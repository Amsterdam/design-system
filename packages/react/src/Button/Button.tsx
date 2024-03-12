/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary'
} & PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>

export const Button = forwardRef(
  (
    { children, className, type, disabled, variant = 'primary', ...restProps }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <button
        {...restProps}
        ref={ref}
        disabled={disabled}
        className={clsx('ams-button', `ams-button--${variant}`, className)}
        type={type || 'button'}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
