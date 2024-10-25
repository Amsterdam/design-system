/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, type ReactNode } from 'react'
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
    const content = (): ReactNode => {
      if (!icon) return children

      if (iconOnly) {
        return [
          <Icon key={1} svg={icon} size="level-5" square={true} />,
          <span className="ams-visually-hidden" key={2}>
            {children}
          </span>,
        ]
      }

      if (iconBefore) return [<Icon svg={icon} size="level-5" />, children]

      return [children, <Icon svg={icon} size="level-5" />]
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
