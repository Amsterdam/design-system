/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface MarkProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {}

export const Mark = forwardRef(({ children, className, ...restProps }: MarkProps, ref: ForwardedRef<HTMLElement>) => (
  <span {...restProps} ref={ref} className={clsx('amsterdam-mark', className)}>
    {children}
  </span>
))

Mark.displayName = 'Mark'
