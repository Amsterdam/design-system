/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface HighlightProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {}

export const Highlight = forwardRef(
  ({ children, className, ...restProps }: HighlightProps, ref: ForwardedRef<HTMLElement>) => (
    <span {...restProps} ref={ref} className={clsx('amsterdam-highlight', className)}>
      {children}
    </span>
  ),
)

Highlight.displayName = 'Highlight'
