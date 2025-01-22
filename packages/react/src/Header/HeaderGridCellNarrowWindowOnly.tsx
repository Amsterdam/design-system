import clsx from 'clsx'
import { ForwardedRef, forwardRef } from 'react'
import { Grid, GridCellProps } from '../Grid'

export const HeaderGridCellNarrowWindowOnly = forwardRef(
  ({ children, className, ...restProps }: GridCellProps, ref: ForwardedRef<HTMLElement>) => (
    <Grid.Cell {...restProps} ref={ref} className={clsx('ams-header__grid-cell-narrow-window-only', className)}>
      {children}
    </Grid.Cell>
  ),
)

HeaderGridCellNarrowWindowOnly.displayName = 'Header.GridCellNarrowWindowOnly'
