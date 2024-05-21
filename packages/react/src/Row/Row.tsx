/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { HTMLAttributes, PropsWithChildren } from 'react'

export const rowGapSizes: Array<string> = ['extra-small', 'small', 'medium', 'large', 'extra-large']

type RowTag = 'article' | 'div' | 'section'
type RowGap = (typeof rowGapSizes)[number]

export type RowProps = {
  /** The HTML element to use. */
  as?: RowTag
  /** The amount of vertical space between items. */
  gap?: RowGap
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

export const Row = forwardRef(
  ({ as: Tag = 'div', children, className, gap = 'medium', ...restProps }: RowProps, ref: any) => (
    <Tag {...restProps} ref={ref} className={clsx('ams-row', `ams-row--${gap}`, className)}>
      {children}
    </Tag>
  ),
)

Row.displayName = 'Row'
