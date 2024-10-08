/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'
import { Icon } from '../Icon'

export type ButtonProps = {
  /** The level of prominence. Use a primary button only once per page or section. */
  variant?: 'primary' | 'secondary' | 'tertiary'
  icon?: Function
  iconPosition?: 'none' | 'start' | 'end' | 'only'
} & PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>

export const Button = forwardRef(
  (
    {
      children,
      className,
      type,
      disabled,
      variant = 'primary',
      icon,
      iconPosition = 'none',
      ...restProps
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <button
        {...restProps}
        ref={ref}
        disabled={disabled}
        className={clsx('ams-button', `ams-button--${variant}`, `ams-button--icon-${iconPosition}`, className)}
        type={type || 'button'}
      >
        {icon && (iconPosition === 'start' || iconPosition === 'only') && <Icon svg={icon} size="level-5" square />}
        {icon && iconPosition === 'only' ? <span className="ams-visually-hidden">{children}</span> : children}
        {icon && iconPosition === 'end' && <Icon svg={icon} size="level-5" square />}
      </button>
    )
  },
)

Button.displayName = 'Button'
