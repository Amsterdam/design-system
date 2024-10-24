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
  /** The position of the icon. The default is after the label. */
  iconPosition?: 'start' | 'only'
}

type TextButtonProps = {
  icon?: never
  iconPosition?: never
}

export type ButtonProps = {
  /** The level of prominence. Use a primary button only once per page or section. */
  variant?: 'primary' | 'secondary' | 'tertiary'
} & (IconButtonProps | TextButtonProps) &
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>

export const Button = forwardRef(
  (
    { children, className, disabled, icon, iconPosition, type, variant = 'primary', ...restProps }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <button
        {...restProps}
        ref={ref}
        disabled={disabled}
        className={clsx(
          'ams-button',
          `ams-button--${variant}`,
          icon && iconPosition === 'only' && `ams-button--icon-position-only`,
          className,
        )}
        type={type || 'button'}
      >
        {icon && (iconPosition === 'start' || iconPosition === 'only') && (
          <Icon svg={icon} size="level-5" square={iconPosition === 'only'} />
        )}
        {icon && iconPosition === 'only' ? <span className="ams-visually-hidden">{children}</span> : children}
        {icon && !iconPosition && <Icon svg={icon} size="level-5" />}
      </button>
    )
  },
)

Button.displayName = 'Button'
