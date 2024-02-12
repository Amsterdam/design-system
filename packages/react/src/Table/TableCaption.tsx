/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Robbert Broersma
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type TableCaptionProps = PropsWithChildren<HTMLAttributes<HTMLTableCaptionElement>>

export const TableCaption = forwardRef(
  ({ children, className, ...restProps }: TableCaptionProps, ref: ForwardedRef<HTMLTableCaptionElement>) => (
    <caption {...restProps} ref={ref} className={clsx('amsterdam-table__caption', className)}>
      {children}
    </caption>
  ),
)

TableCaption.displayName = 'TableCaption'
