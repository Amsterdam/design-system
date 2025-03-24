/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { HTMLAttributes, PropsWithChildren } from 'react'
import { abbreviateSize } from '../common/abbreviateSize'
import type { CrossAlign, MainAlign } from '../common/types'

export const rowGaps = ['none', 'x-small', 'small', 'large', 'x-large'] as const

type RowGap = (typeof rowGaps)[number]
type RowTag = 'article' | 'div' | 'section'

export type RowProps = {
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
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

export const Row = forwardRef(
  ({ align, alignVertical, as: Tag = 'div', children, className, gap, wrap, ...restProps }: RowProps, ref: any) => (
    <Tag
      {...restProps}
      className={clsx(
        'ams-row',
        align && `ams-row--align-${align}`,
        alignVertical && `ams-row--align-vertical-${alignVertical}`,
        gap === 'none' && 'ams-row--gap-none',
        gap && gap !== 'none' && `ams-gap-${abbreviateSize(gap)}`,
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
