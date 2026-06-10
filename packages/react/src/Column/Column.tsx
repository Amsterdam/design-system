/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ElementType, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { CrossAlignForColumn, MainAlign } from '../common/types'

export const columnTags = ['article', 'div', 'section'] as const
type ColumnTag = (typeof columnTags)[number]

export const columnGapSizes = ['none', 'x-small', 'small', 'large', 'x-large'] as const
type ColumnGap = (typeof columnGapSizes)[number]

export type ColumnProps = {
  /**
   * The vertical alignment of the items in the column.
   * @default start
   */
  readonly align?: MainAlign
  /**
   * The horizontal alignment of the items in the column.
   * @default stretch
   */
  readonly alignHorizontal?: CrossAlignForColumn
  /**
   * The HTML element to use.
   * @default div
   */
  readonly as?: ColumnTag
  /**
   * The amount of space between items.
   * @default medium
   */
  readonly gap?: ColumnGap
} & Readonly<PropsWithChildren<HTMLAttributes<HTMLElement>>>

/**
 * Stacks its children vertically with gaps between them and offers alignment options.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-layout-column--docs Column docs at Amsterdam Design System}
 */
export const Column = forwardRef<HTMLElement, ColumnProps>(
  ({ align, alignHorizontal, as, children, className, gap, ...restProps }, ref) => {
    const Tag = (as ?? 'div') as ElementType

    return (
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
    )
  },
)

Column.displayName = 'Column'
