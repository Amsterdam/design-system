/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface TipProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {}

export const Tip = forwardRef(({ children, className, ...restProps }: TipProps, ref: ForwardedRef<HTMLElement>) => (
  <span {...restProps} ref={ref} className={clsx('amsterdam-tip', className)}>
    {children}
  </span>
))

Tip.displayName = 'Tip'
