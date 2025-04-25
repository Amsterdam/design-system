/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Robbert Broersma
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type TableCaptionProps = PropsWithChildren<HTMLAttributes<HTMLTableCaptionElement>>

export const TableCaption = forwardRef(
  ({ children, className, ...restProps }: TableCaptionProps, ref: ForwardedRef<HTMLTableCaptionElement>) => (
    <caption {...restProps} className={clsx('ams-table__caption', className)} ref={ref}>
      {children}
    </caption>
  ),
)

TableCaption.displayName = 'Table.Caption'
