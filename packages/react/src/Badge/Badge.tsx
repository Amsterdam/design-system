/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface BadgeProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  color?: 'blue' | 'dark-blue' | 'green' | 'dark-green' | 'orange' | 'magenta' | 'purple' | 'yellow'
}

export const Badge = forwardRef(
  ({ children, className, color = 'dark-green', ...restProps }: BadgeProps, ref: ForwardedRef<HTMLElement>) => (
    <span {...restProps} ref={ref} className={clsx('amsterdam-badge', `amsterdam-badge--${color}`, className)}>
      {children}
    </span>
  ),
)

Badge.displayName = 'Badge'
