/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Robbert Broersma
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type TableCaptionProps = {
  /** Positions the caption below the table. */
  side?: 'bottom'
} & PropsWithChildren<HTMLAttributes<HTMLTableCaptionElement>>

export const TableCaption = forwardRef<HTMLTableCaptionElement, TableCaptionProps>(
  ({ children, className, side, ...restProps }, ref) => (
    <caption
      {...restProps}
      className={clsx('ams-table__caption', side === 'bottom' && 'ams-table__caption--bottom', className)}
      ref={ref}
    >
      {children}
    </caption>
  ),
)

TableCaption.displayName = 'Table.Caption'
