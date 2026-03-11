/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { Table } from './Table'
import { TableBody } from './TableBody'
import { TableCell } from './TableCell'
import { TableRow } from './TableRow'

describe('TableCell', () => {
  it('renders', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Data</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    )

    const component = screen.getByRole('cell')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Data</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    )

    const component = screen.getByRole('cell')

    expect(component).toHaveClass('ams-table__cell')
  })

  it('renders an extra class name', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="extra">Data</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    )

    const component = screen.getByRole('cell')

    expect(component).toHaveClass('ams-table__cell extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLTableCellElement>()

    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell ref={ref}>Data</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    )

    const component = screen.getByRole('cell')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    const { container } = render(<TableCell aria-hidden="false" data-test="data-test" id="id" />)

    const component = container.querySelector(':only-child')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
