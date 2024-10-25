/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'
import { Icon } from '../Icon'
import type { IconProps } from '../Icon'

type IconButtonProps = {
  /** An icon to add to the button. */
  icon: IconProps['svg']
  /** Position the icon before the label. After is the default. Requires the `icon` prop to be set. */
  iconBefore?: boolean
  /** Leaves only the icon visible in the button. Requires the `icon` prop to be set. */
  iconOnly?: boolean
}

type TextButtonProps = {
  icon?: never
  iconBefore?: never
  iconOnly?: never
}

export type ButtonProps = {
  /** The level of prominence. Use a primary button only once per page or section. */
  variant?: 'primary' | 'secondary' | 'tertiary'
} & (IconButtonProps | TextButtonProps) &
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>

export const Button = forwardRef(
  (
    { children, className, disabled, icon, iconBefore, iconOnly, type, variant = 'primary', ...restProps }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <button
        {...restProps}
        ref={ref}
        disabled={disabled}
        className={clsx('ams-button', `ams-button--${variant}`, iconOnly && `ams-button--icon-only`, className)}
        type={type || 'button'}
      >
        {icon && (iconBefore || iconOnly) && <Icon svg={icon} size="level-5" square={iconOnly} />}
        {icon && iconOnly ? <span className="ams-visually-hidden">{children}</span> : children}
        {icon && !iconBefore && !iconOnly && <Icon svg={icon} size="level-5" />}
      </button>
    )
  },
)

Button.displayName = 'Button'
