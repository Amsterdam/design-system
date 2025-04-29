/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef } from 'react'
import { Grid, GridCellProps } from '../Grid'

export const PageHeaderGridCellNarrowWindowOnly = forwardRef(
  ({ children, className, ...restProps }: GridCellProps, ref: ForwardedRef<HTMLElement>) => (
    <Grid.Cell {...restProps} className={clsx('ams-page-header__grid-cell-narrow-window-only', className)} ref={ref}>
      {children}
    </Grid.Cell>
  ),
)

PageHeaderGridCellNarrowWindowOnly.displayName = 'PageHeader.GridCellNarrowWindowOnly'
