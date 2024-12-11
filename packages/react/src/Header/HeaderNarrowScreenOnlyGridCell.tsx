import clsx from 'clsx'
import { ForwardedRef, forwardRef } from 'react'
import { Grid, GridCellProps } from '../Grid'

export const HeaderNarrowScreenOnlyGridCell = forwardRef(
  ({ children, className, ...restProps }: GridCellProps, ref: ForwardedRef<HTMLElement>) => (
    <Grid.Cell {...restProps} className={clsx('ams-header__narrow-screen-only-grid-cell', className)} ref={ref}>
      {children}
    </Grid.Cell>
  ),
)

HeaderNarrowScreenOnlyGridCell.displayName = 'Header.NarrowScreenOnlyGridCell'
