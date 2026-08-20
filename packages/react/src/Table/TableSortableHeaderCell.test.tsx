/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ReactNode } from 'react'

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { Table } from './Table'
import { TableHeader } from './TableHeader'
import { TableRow } from './TableRow'
import { TableSortableHeaderCell } from './TableSortableHeaderCell'

const renderInTable = (children: ReactNode) =>
  render(
    <Table>
      <TableHeader>
        <TableRow>{children}</TableRow>
      </TableHeader>
    </Table>,
  )

describe('TableSortableHeaderCell', () => {
  it('renders', () => {
    renderInTable(<TableSortableHeaderCell href="?sort=stadsdeel-asc">Stadsdeel</TableSortableHeaderCell>)

    const component = screen.getByRole('columnheader')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders an unsorted column by default', () => {
    renderInTable(<TableSortableHeaderCell href="?sort=stadsdeel-asc">Stadsdeel</TableSortableHeaderCell>)

    expect(screen.getByRole('columnheader')).toHaveAttribute('aria-sort', 'none')
  })

  it('renders the sort direction on the header cell', () => {
    renderInTable(
      <>
        <TableSortableHeaderCell href="?sort=stadsdeel-desc" sortDirection="ascending">
          Stadsdeel
        </TableSortableHeaderCell>
        <TableSortableHeaderCell href="?sort=wijk-asc" sortDirection="descending">
          Wijk
        </TableSortableHeaderCell>
      </>,
    )

    const [ascendingCell, descendingCell] = screen.getAllByRole('columnheader')

    expect(ascendingCell).toHaveAttribute('aria-sort', 'ascending')
    expect(descendingCell).toHaveAttribute('aria-sort', 'descending')
  })

  it('renders the children in a link to the href', () => {
    renderInTable(<TableSortableHeaderCell href="?sort=stadsdeel-asc">Stadsdeel</TableSortableHeaderCell>)

    const link = screen.getByRole('link', { name: 'Stadsdeel' })

    expect(link).toHaveAttribute('href', '?sort=stadsdeel-asc')
    expect(link).toHaveClass('ams-link ams-table__sortable-header-cell-link')
  })

  it('renders an icon inside the link in every sort direction', () => {
    renderInTable(
      <>
        <TableSortableHeaderCell href="?sort=stadsdeel-asc">Stadsdeel</TableSortableHeaderCell>
        <TableSortableHeaderCell href="?sort=wijk-desc" sortDirection="ascending">
          Wijk
        </TableSortableHeaderCell>
        <TableSortableHeaderCell href="?sort=buurt-asc" sortDirection="descending">
          Buurt
        </TableSortableHeaderCell>
      </>,
    )

    screen.getAllByRole('link').forEach((link) => {
      expect(link.querySelector('svg')).toBeInTheDocument()
    })
  })

  it('renders a different icon when sorted in the other direction', () => {
    renderInTable(
      <>
        <TableSortableHeaderCell href="?sort=stadsdeel-desc" sortDirection="ascending">
          Stadsdeel
        </TableSortableHeaderCell>
        <TableSortableHeaderCell href="?sort=wijk-asc" sortDirection="descending">
          Wijk
        </TableSortableHeaderCell>
      </>,
    )

    const [ascendingCell, descendingCell] = screen.getAllByRole('columnheader')

    expect(ascendingCell.querySelector('svg')?.innerHTML).not.toBe(descendingCell.querySelector('svg')?.innerHTML)
  })

  it('renders the icon of an unsorted column in the direction its link applies', () => {
    renderInTable(
      <>
        <TableSortableHeaderCell href="?sort=stadsdeel-asc">Stadsdeel</TableSortableHeaderCell>
        <TableSortableHeaderCell href="?sort=wijk-desc" sortDirection="ascending">
          Wijk
        </TableSortableHeaderCell>
      </>,
    )

    const [unsortedCell, ascendingCell] = screen.getAllByRole('columnheader')

    expect(unsortedCell.querySelector('svg')?.innerHTML).toBe(ascendingCell.querySelector('svg')?.innerHTML)
  })

  it('renders design system BEM class names', () => {
    renderInTable(<TableSortableHeaderCell href="?sort=stadsdeel-asc">Stadsdeel</TableSortableHeaderCell>)

    expect(screen.getByRole('columnheader')).toHaveClass('ams-table__header-cell ams-table__sortable-header-cell')
  })

  it('renders an alignment modifier class when align is set', () => {
    renderInTable(
      <>
        <TableSortableHeaderCell align="end" href="?sort=oppervlakte-asc">
          Oppervlakte
        </TableSortableHeaderCell>
        <TableSortableHeaderCell align="center" href="?sort=letter-asc">
          Letter
        </TableSortableHeaderCell>
      </>,
    )

    const [endCell, centerCell] = screen.getAllByRole('columnheader')

    expect(endCell).toHaveClass('ams-table__header-cell--align-end')
    expect(centerCell).toHaveClass('ams-table__header-cell--align-center')
  })

  it('renders an extra class name', () => {
    renderInTable(
      <TableSortableHeaderCell className="extra" href="?sort=stadsdeel-asc">
        Stadsdeel
      </TableSortableHeaderCell>,
    )

    expect(screen.getByRole('columnheader')).toHaveClass('ams-table__sortable-header-cell extra')
  })

  it('renders the link with the supplied link component', () => {
    const CustomLink = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} data-custom="true" />

    renderInTable(
      <TableSortableHeaderCell href="?sort=stadsdeel-asc" linkComponent={CustomLink}>
        Stadsdeel
      </TableSortableHeaderCell>,
    )

    expect(screen.getByRole('link', { name: 'Stadsdeel' })).toHaveAttribute('data-custom', 'true')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLTableCellElement>()

    renderInTable(
      <TableSortableHeaderCell href="?sort=stadsdeel-asc" ref={ref}>
        Stadsdeel
      </TableSortableHeaderCell>,
    )

    expect(ref.current).toBe(screen.getByRole('columnheader'))
  })

  it('passes additional props', () => {
    renderInTable(
      <TableSortableHeaderCell data-test="data-test" href="?sort=stadsdeel-asc" id="id" scope="col">
        Stadsdeel
      </TableSortableHeaderCell>,
    )

    const component = screen.getByRole('columnheader')

    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
    expect(component).toHaveAttribute('scope', 'col')
  })
})
