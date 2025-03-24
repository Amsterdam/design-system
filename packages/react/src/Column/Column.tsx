/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { HTMLAttributes, PropsWithChildren } from 'react'
import { abbreviateSize } from '../common/abbreviateSize'
import type { CrossAlignForColumn, MainAlign } from '../common/types'

export const columnGaps = ['none', 'x-small', 'small', 'large', 'x-large'] as const

type ColumnGap = (typeof columnGaps)[number]
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
  alignHorizontal?: CrossAlignForColumn
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
      className={clsx(
        'ams-column',
        align && `ams-column--align-${align}`,
        alignHorizontal && `ams-column--align-horizontal-${alignHorizontal}`,
        gap && `ams-gap-${abbreviateSize(gap)}`,
        className,
      )}
      ref={ref}
    >
      {children}
    </Tag>
  ),
)

Column.displayName = 'Column'
