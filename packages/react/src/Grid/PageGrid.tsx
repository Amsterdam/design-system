/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export type PageGridColumnNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type PageGridProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const PageGrid = forwardRef(
  ({ children, className, ...restProps }: PageGridProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('amsterdam-page-grid', className)}>
      {children}
    </div>
  ),
)

PageGrid.displayName = 'PageGrid'
