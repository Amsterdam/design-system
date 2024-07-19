/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { HTMLAttributes, PropsWithChildren } from 'react'

export const columnGapSizes: Array<string> = ['none', 'extra-small', 'small', 'large', 'extra-large'] as const

type ColumnTag = 'article' | 'div' | 'section'
type ColumnGap = (typeof columnGapSizes)[number]

export type ColumnProps = {
  /** The HTML element to use. */
  as?: ColumnTag
  /** The amount of vertical space between items. */
  gap?: ColumnGap
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

export const Column = forwardRef(
  ({ as: Tag = 'div', children, className, gap, ...restProps }: ColumnProps, ref: any) => (
    <Tag {...restProps} ref={ref} className={clsx('ams-column', gap && `ams-column--gap-${gap}`, className)}>
      {children}
    </Tag>
  ),
)

Column.displayName = 'Column'
