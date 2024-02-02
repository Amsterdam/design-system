/**
 * @license EUPL-1.2+
 * Copyright (c) 2024 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'

export type ButtonProps = {
  /** Variant, choose between 'primary' (default), 'secondary' or 'tertiary' */
  variant?: 'primary' | 'secondary' | 'tertiary'
  /** Render the button in a busy state to indicate something has to finish loading */
  busy?: boolean
} & PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>

export const Button = forwardRef(
  (
    { children, type, disabled, busy, variant = 'primary', ...restProps }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <button
        {...restProps}
        ref={ref}
        disabled={disabled}
        className={clsx('amsterdam-button', busy === true && 'amsterdam-button--busy', `amsterdam-button--${variant}`)}
        type={type || 'button'}
        aria-busy={busy || undefined}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
