/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export const badgeColors = ['azure', 'lime', 'magenta', 'orange', 'purple', 'red', 'yellow'] as const
type BadgeColor = (typeof badgeColors)[number]

export type BadgeProps = {
  /** The background colour. */
  color?: BadgeColor
  /** The text content. */
  label: string | number
} & HTMLAttributes<HTMLElement>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-feedback-badge--docs Badge docs at Amsterdam Design System}
 */
export const Badge = forwardRef(
  ({ className, color, label, ...restProps }: BadgeProps, ref: ForwardedRef<HTMLElement>) => (
    <span {...restProps} className={clsx('ams-badge', color && `ams-badge--${color}`, className)} ref={ref}>
      {label}
    </span>
  ),
)

Badge.displayName = 'Badge'
