/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ButtonHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { IconProps } from '../Icon'

import { Icon } from '../Icon'

type IconBeforeProp = {
  /** Shows the icon before the label. Requires a value for `icon`. Cannot be used together with `iconOnly`. */
  iconBefore?: boolean
  iconOnly?: never
}

type IconOnlyProp = {
  iconBefore?: never
  /** Shows the icon without the label. Requires a value for `icon`. Cannot be used together with `iconBefore`. */
  iconOnly?: boolean
}

type IconButtonProps = (IconBeforeProp | IconOnlyProp) & {
  /** Adds an icon to the button, showing it after the label. */
  icon: IconProps['svg']
}

type TextButtonProps = {
  icon?: never
  iconBefore?: never
  iconOnly?: never
}

export const buttonVariants = ['primary', 'secondary', 'tertiary'] as const
type ButtonVariant = (typeof buttonVariants)[number]

export type ButtonProps = (IconButtonProps | TextButtonProps) &
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
    /** The level of prominence. Use a primary button only once per page or section. */
    variant?: ButtonVariant
  }

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-buttons-button--docs Button docs at Amsterdam Design System}
 */
export const Button = forwardRef(
  (
    { children, className, disabled, icon, iconBefore, iconOnly, type, variant = 'primary', ...restProps }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => (
    <button
      {...restProps}
      className={clsx('ams-button', `ams-button--${variant}`, icon && iconOnly && `ams-button--icon-only`, className)}
      disabled={disabled}
      ref={ref}
      type={type || 'button'}
    >
      {icon && (iconBefore || iconOnly) && <Icon square={iconOnly} svg={icon} />}
      {icon && iconOnly ? <span className="ams-visually-hidden">{children}</span> : children}
      {icon && !iconBefore && !iconOnly && <Icon svg={icon} />}
    </button>
  ),
)

Button.displayName = 'Button'
