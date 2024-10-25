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
  /** Leaves only the icon visible in the button. Requires the `icon` prop to be set. */
  hideLabel?: boolean
  /** An icon to add to the button. */
  icon: IconProps['svg']
  /** Position the icon before the label. After is the default. Requires the `icon` prop to be set. */
  iconBefore?: boolean
}

type TextButtonProps = {
  hideLabel?: never
  icon?: never
  iconBefore?: never
}

export type ButtonProps = {
  /** The level of prominence. Use a primary button only once per page or section. */
  variant?: 'primary' | 'secondary' | 'tertiary'
} & (IconButtonProps | TextButtonProps) &
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>

export const Button = forwardRef(
  (
    {
      children,
      className,
      disabled,
      icon,
      iconBefore,
      hideLabel,
      type,
      variant = 'primary',
      ...restProps
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <button
        {...restProps}
        ref={ref}
        disabled={disabled}
        className={clsx('ams-button', `ams-button--${variant}`, hideLabel && `ams-button--hide-label`, className)}
        type={type || 'button'}
      >
        {icon && (iconBefore || hideLabel) && <Icon svg={icon} size="level-5" square={hideLabel} />}
        {icon && hideLabel ? <span className="ams-visually-hidden">{children}</span> : children}
        {icon && !iconBefore && !hideLabel && <Icon svg={icon} size="level-5" />}
      </button>
    )
  },
)

Button.displayName = 'Button'
