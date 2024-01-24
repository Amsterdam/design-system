/**
 * @license EUPL-1.2+
 * Copyright (c) 2024 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes } from 'react'

export interface BadgeProps extends HTMLAttributes<HTMLElement> {
  color?: 'black' | 'blue' | 'dark-blue' | 'dark-green' | 'green' | 'magenta' | 'orange' | 'purple' | 'white' | 'yellow'
  label: string | number
}

export const Badge = forwardRef(
  ({ label, className, color = 'dark-green', ...restProps }: BadgeProps, ref: ForwardedRef<HTMLElement>) => (
    <span {...restProps} ref={ref} className={clsx('amsterdam-badge', `amsterdam-badge--${color}`, className)}>
      {label}
    </span>
  ),
)

Badge.displayName = 'Badge'
