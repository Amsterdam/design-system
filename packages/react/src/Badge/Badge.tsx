/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { IconProps } from '../Icon'

import { Icon } from '../Icon'

export const badgeColors = ['azure', 'lime', 'magenta', 'orange', 'purple', 'red', 'yellow'] as const
type BadgeColor = (typeof badgeColors)[number]

export type BadgeProps = {
  /** The background colour. */
  color?: BadgeColor
  /** The icon to show before the badge text. */
  icon?: IconProps['svg']
  /** The text content. */
  label: string | number
} & HTMLAttributes<HTMLElement>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-feedback-badge--docs Badge docs at Amsterdam Design System}
 */
export const Badge = forwardRef(
  ({ className, color, icon, label, ...restProps }: BadgeProps, ref: ForwardedRef<HTMLElement>) => (
    <span {...restProps} className={clsx('ams-badge', color && `ams-badge--${color}`, className)} ref={ref}>
      {icon && <Icon svg={icon} />}
      {label}
    </span>
  ),
)

Badge.displayName = 'Badge'
