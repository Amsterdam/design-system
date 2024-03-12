/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type MarkProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export const Mark = forwardRef(({ children, className, ...restProps }: MarkProps, ref: ForwardedRef<HTMLElement>) => (
  <mark {...restProps} ref={ref} className={clsx('ams-mark', className)}>
    {children}
  </mark>
))

Mark.displayName = 'Mark'
