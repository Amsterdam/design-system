/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { HTMLAttributes, PropsWithChildren } from 'react'
import type { CrossAlign, MainAlign } from '../common/layout'

export const rowGapSizes: Array<string> = ['extra-small', 'small', 'large', 'extra-large']

type RowGap = (typeof rowGapSizes)[number]
type RowTag = 'article' | 'div' | 'section'

export type RowProps = {
  /** The horizontal alignment of the items in the row. */
  align?: MainAlign
  /** The vertical alignment of the items in the row. */
  alignVertical?: CrossAlign
  /** The HTML element to use. */
  as?: RowTag
  /** The amount of vertical space between items. */
  gap?: RowGap
  /** Whether items of the row can wrap onto multiple lines. */
  wrap?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

export const Row = forwardRef(
  ({ align, alignVertical, as: Tag = 'div', children, className, gap, wrap, ...restProps }: RowProps, ref: any) => (
    <Tag
      {...restProps}
      ref={ref}
      className={clsx(
        'ams-row',
        `ams-row--gap-${gap}`,
        align && `ams-row--align-${align}`,
        alignVertical && `ams-row--align-vertical-${alignVertical}`,
        wrap && 'ams-row--wrap',
        className,
      )}
    >
      {children}
    </Tag>
  ),
)

Row.displayName = 'Row'
