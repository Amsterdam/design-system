/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type MarkProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-text-mark--docs Mark docs at Amsterdam Design System}
 */
export const Mark = forwardRef(({ children, className, ...restProps }: MarkProps, ref: ForwardedRef<HTMLElement>) => (
  <mark {...restProps} className={clsx('ams-mark', className)} ref={ref}>
    {children}
  </mark>
))

Mark.displayName = 'Mark'
