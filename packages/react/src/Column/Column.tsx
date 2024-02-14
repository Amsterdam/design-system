/**
 * @license EUPL-1.2+
 * Copyright (c) 2024 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type ColumnProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export const Column = forwardRef(
  ({ children, className, ...restProps }: ColumnProps, ref: ForwardedRef<HTMLElement>) => (
    <span {...restProps} ref={ref} className={clsx('amsterdam-column', className)}>
      {children}
    </span>
  ),
)

Column.displayName = 'Column'
