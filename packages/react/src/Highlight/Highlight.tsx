/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface HighlightProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  color: 'orange' | 'purple' | 'green'
}

export const Highlight = forwardRef(
  ({ children, className, color, ...restProps }: HighlightProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div
      {...restProps}
      ref={ref}
      className={clsx(
        'amsterdam-highlight',
        color === 'orange' && 'amsterdam-highlight--orange',
        color === 'purple' && 'amsterdam-highlight--purple',
        color === 'green' && 'amsterdam-highlight--green',
        className,
      )}
    >
      {children}
    </div>
  ),
)

Highlight.displayName = 'Highlight'
