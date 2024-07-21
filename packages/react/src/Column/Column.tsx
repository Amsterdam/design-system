/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { HTMLAttributes, PropsWithChildren } from 'react'
import type { CrossAlign, MainAlign } from '../common/layout'

export const columnGapSizes = ['none', 'extra-small', 'small', 'large', 'extra-large'] as const

type ColumnGap = (typeof columnGapSizes)[number]
type ColumnTag = 'article' | 'div' | 'section'

export type ColumnProps = {
  /**
   * The vertical alignment of the items in the column.
   * @default start
   */
  align?: MainAlign
  /**
   * The horizontal alignment of the items in the column.
   * @default stretch
   */
  alignHorizontal?: Omit<CrossAlign, 'baseline'>
  /**
   * The HTML element to use.
   * @default div
   */
  as?: ColumnTag
  /**
   * The amount of space between items.
   * @default medium
   */
  gap?: ColumnGap
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

export const Column = forwardRef(
  ({ align, alignHorizontal, as: Tag = 'div', children, className, gap, ...restProps }: ColumnProps, ref: any) => (
    <Tag
      {...restProps}
      ref={ref}
      className={clsx(
        'ams-column',
        align && `ams-column--align-${align}`,
        alignHorizontal && `ams-column--align-horizontal-${alignHorizontal}`,
        gap && `ams-column--gap-${gap}`,
        className,
      )}
    >
      {children}
    </Tag>
  ),
)

Column.displayName = 'Column'
