/**
 * @license EUPL-1.2+
 * Copyright (c) 2024 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

type ColumnGap = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type ColumnProps = {
  /** The amount of vertical space between the column’s children. */
  gap?: ColumnGap
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const Column = forwardRef(
  ({ children, className, gap = 'md', ...restProps }: ColumnProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx(`amsterdam-gap--${gap}`, className)}>
      {children}
    </div>
  ),
)

Column.displayName = 'Column'
