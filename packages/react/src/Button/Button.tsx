/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'

export type ButtonProps = {
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
        className={clsx('ams-button', busy === true && 'ams-button--busy', `ams-button--${variant}`)}
        type={type || 'button'}
        aria-busy={busy || undefined}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
