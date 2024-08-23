/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, ForwardedRef } from 'react'
import { Icon } from '../Icon'

export type ButtonProps = {
  /** The level of prominence. Use a primary button only once per page or section. */
  variant?: 'primary' | 'secondary' | 'tertiary'
  label: string
  hideLabel?: boolean
  iconStart?: Function
  iconEnd?: Function
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef(
  (
    {
      className,
      type,
      disabled,
      variant = 'primary',
      label,
      hideLabel = false,
      iconStart,
      iconEnd,
      ...restProps
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <button
        {...restProps}
        ref={ref}
        disabled={disabled}
        className={clsx('ams-button', `ams-button--${variant}`, className)}
        type={type || 'button'}
      >
        {iconStart && <Icon svg={iconStart} size="level-5" />}
        {hideLabel ? <span className="ams-visually-hidden">{label}</span> : label}
        {iconEnd && <Icon svg={iconEnd} size="level-5" />}
      </button>
    )
  },
)

Button.displayName = 'Button'
