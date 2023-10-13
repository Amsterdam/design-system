/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface HighlightProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  color?: 'yellow' | 'orange' | 'magenta' | 'purple' | 'blue' | 'light-blue' | 'green' | 'dark-green'
}

export const Highlight = forwardRef(
  ({ children, className, color, ...restProps }: HighlightProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('amsterdam-highlight', `amsterdam-highlight--${color}`, className)}>
      {children}
    </div>
  ),
)

Highlight.displayName = 'Highlight'
