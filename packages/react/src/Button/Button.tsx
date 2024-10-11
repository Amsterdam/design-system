/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'
import { Icon } from '../Icon'

type ButtonIcon = {
  icon?: Function
  iconStart?: never
  iconOnly?: boolean
}

type ButtonIconStart = {
  icon?: never
  iconStart?: Function
  iconOnly?: boolean
}

export type ButtonProps = {
  /** The level of prominence. Use a primary button only once per page or section. */
  variant?: 'primary' | 'secondary' | 'tertiary'
} & (ButtonIcon | ButtonIconStart) &
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>

export const Button = forwardRef(
  (
    { children, className, type, disabled, variant = 'primary', icon, iconStart, iconOnly, ...restProps }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <button
        {...restProps}
        ref={ref}
        disabled={disabled}
        className={clsx('ams-button', `ams-button--${variant}`, { 'ams-button--icon-only': iconOnly }, className)}
        type={type || 'button'}
      >
        {iconStart && <Icon svg={iconStart} size="level-5" square />}
        {iconOnly ? <span className="ams-visually-hidden">{children}</span> : children}
        {icon && <Icon svg={icon} size="level-5" square />}
      </button>
    )
  },
)

Button.displayName = 'Button'
