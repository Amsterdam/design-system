/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes } from 'react'

export const badgeColors = [
  'blue',
  'dark-blue',
  'dark-green',
  'green',
  'magenta',
  'orange',
  'purple',
  'yellow',
] as const

type BadgeColor = (typeof badgeColors)[number]

export type BadgeProps = {
  /** The background colour. */
  color?: BadgeColor
  /** The text content. */
  label: string | number
} & HTMLAttributes<HTMLElement>

export const Badge = forwardRef(
  ({ label, className, color = 'dark-green', ...restProps }: BadgeProps, ref: ForwardedRef<HTMLElement>) => (
    <span {...restProps} ref={ref} className={clsx('ams-badge', `ams-badge--${color}`, className)}>
      {label}
    </span>
  ),
)

Badge.displayName = 'Badge'
