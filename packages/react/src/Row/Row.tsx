/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { CrossAlign, MainAlign } from '../common/types'

export const rowTags = ['article', 'div', 'section'] as const
type RowTag = (typeof rowTags)[number]

export const rowGapSizes = ['none', 'x-small', 'small', 'large', 'x-large'] as const
type RowGap = (typeof rowGapSizes)[number]

export type RowProps = PropsWithChildren<HTMLAttributes<HTMLElement>> & {
  /**
   * The horizontal alignment of the items in the row.
   * @default start
   */
  align?: MainAlign
  /**
   * The vertical alignment of the items in the row.
   * @default stretch
   */
  alignVertical?: CrossAlign
  /**
   * The HTML element to use.
   * @default div
   */
  as?: RowTag
  /**
   * The amount of space between items.
   * @default medium
   */
  gap?: RowGap
  /**
   * Whether items of the row can wrap onto multiple lines.
   * @default false
   */
  wrap?: boolean
}

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-layout-row--docs Row docs at Amsterdam Design System}
 */
export const Row = forwardRef(
  ({ align, alignVertical, as: Tag = 'div', children, className, gap, wrap, ...restProps }: RowProps, ref: any) => (
    <Tag
      {...restProps}
      className={clsx(
        'ams-row',
        align && `ams-row--align-${align}`,
        alignVertical && `ams-row--align-vertical-${alignVertical}`,
        gap && `ams-row--gap-${gap}`,
        wrap && 'ams-row--wrap',
        className,
      )}
      ref={ref}
    >
      {children}
    </Tag>
  ),
)

Row.displayName = 'Row'
