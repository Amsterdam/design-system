/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface HighlightProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  as?: 'article' | 'aside' | 'div' | 'footer' | 'section'
  color?: 'blue' | 'dark-green' | 'green' | 'light-blue' | 'magenta' | 'orange' | 'purple' | 'yellow'
}

export const Highlight = forwardRef<HTMLDivElement, HighlightProps>(
  ({ children, className, as = 'div', color = 'blue', ...restProps }: HighlightProps, ref) => {
    const Component = as

    return (
      <Component
        {...restProps}
        ref={ref}
        className={clsx('amsterdam-highlight', `amsterdam-highlight--${color}`, className)}
      >
        {children}
      </Component>
    )
  },
)

Highlight.displayName = 'Highlight'
