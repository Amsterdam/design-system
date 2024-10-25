/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, ForwardedRef, PropsWithChildren, ReactNode } from 'react'
import { Icon } from '../Icon'
import type { IconProps } from '../Icon'

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

type IconButtonProps = {
  /** Adds an icon to the button, showing it after the label. */
  icon: IconProps['svg']
} & (IconBeforeProp | IconOnlyProp)

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
    const content = (): ReactNode => {
      switch (true) {
        case !icon:
          return children
        case iconBefore:
          return [<Icon svg={icon} size="level-5" />, children]
        case iconOnly:
          return [
            <Icon key={1} svg={icon} size="level-5" square={true} />,
            <span className="ams-visually-hidden" key={2}>
              {children}
            </span>,
          ]
        default:
          return [children, <Icon svg={icon} size="level-5" />]
      }
    }

    return (
      <button
        {...restProps}
        className={clsx('ams-button', `ams-button--${variant}`, iconOnly && `ams-button--icon-only`, className)}
        disabled={disabled}
        ref={ref}
        type={type || 'button'}
      >
        {content()}
      </button>
    )
  },
)

Button.displayName = 'Button'
