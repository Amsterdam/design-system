/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type RowProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export const Row = forwardRef(({ children, className, ...restProps }: RowProps, ref: ForwardedRef<HTMLElement>) => (
  <span {...restProps} ref={ref} className={clsx('amsterdam-row', className)}>
    {children}
  </span>
))

Row.displayName = 'Row'
