/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { GridCellProps } from '../Grid'

import { Grid } from '../Grid'

/**
 * A Grid Cell within the Page Header that renders navigation links only on narrow windows.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-page-header--docs Page Header docs at Amsterdam Design System}
 */
export const PageHeaderGridCellNarrowWindowOnly = forwardRef(
  ({ children, className, ...restProps }: GridCellProps, ref: ForwardedRef<HTMLElement>) => (
    <Grid.Cell
      {...restProps}
      className={clsx('ams-page-header__grid-cell-narrow-window-only', className)}
      hidden // Hide until its CSS loads; this cell duplicates the non-fixed links in the Page Header Menu.
      ref={ref}
    >
      {children}
    </Grid.Cell>
  ),
)

PageHeaderGridCellNarrowWindowOnly.displayName = 'PageHeader.GridCellNarrowWindowOnly'
