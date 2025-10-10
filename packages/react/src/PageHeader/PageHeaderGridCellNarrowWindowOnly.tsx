/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { GridCellProps } from '../Grid'

import { Grid } from '../Grid'

export const PageHeaderGridCellNarrowWindowOnly = forwardRef(
  ({ children, className, ...restProps }: GridCellProps, ref: ForwardedRef<HTMLElement>) => (
    <Grid.Cell {...restProps} className={clsx('ams-page-header__grid-cell-narrow-window-only', className)} ref={ref}>
      {children}
    </Grid.Cell>
  ),
)

PageHeaderGridCellNarrowWindowOnly.displayName = 'PageHeader.GridCellNarrowWindowOnly'
