/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { CrossAlignForColumn, MainAlign } from '../common/types'

export const columnTags = ['article', 'div', 'section'] as const
type ColumnTag = (typeof columnTags)[number]

export const columnGapSizes = ['none', 'x-small', 'small', 'large', 'x-large'] as const
type ColumnGap = (typeof columnGapSizes)[number]

export type ColumnProps = PropsWithChildren<HTMLAttributes<HTMLElement>> & {
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
}

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-layout-column--docs Column docs at Amsterdam Design System}
 */
export const Column = forwardRef(
  ({ align, alignHorizontal, as: Tag = 'div', children, className, gap, ...restProps }: ColumnProps, ref: any) => (
    <Tag
      {...restProps}
      className={clsx(
        'ams-column',
        align && `ams-column--align-${align}`,
        alignHorizontal && `ams-column--align-horizontal-${alignHorizontal}`,
        gap && `ams-column--gap-${gap}`,
        className,
      )}
      ref={ref}
    >
      {children}
    </Tag>
  ),
)

Column.displayName = 'Column'
