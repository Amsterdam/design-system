/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export const columnGapSizes: Array<string> = ['extra-small', 'small', 'medium', 'large', 'extra-large']

type ColumnTag = 'article' | 'div' | 'section'
type ColumnGap = (typeof columnGapSizes)[number]

export type ColumnProps = {
  /** The element to render the column with. */
  as?: ColumnTag
  /** The amount of vertical space between the column’s children. */
  gap?: ColumnGap
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const Column = forwardRef(
  (
    { as: Tag = 'div', children, className, gap = 'medium', ...restProps }: ColumnProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <Tag {...restProps} ref={ref} className={clsx('ams-column', `ams-column--${gap}`, className)}>
      {children}
    </Tag>
  ),
)

Column.displayName = 'Column'
