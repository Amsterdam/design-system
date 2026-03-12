/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import { Table } from './Table'
import { TableBody } from './TableBody'
import { TableRow } from './TableRow'

describe('TableRow', () => {
  it('renders', () => {
    render(
      <Table>
        <TableBody>
          <TableRow />
        </TableBody>
      </Table>,
    )

    const component = screen.getByRole('row')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(
      <Table>
        <TableBody>
          <TableRow />
        </TableBody>
      </Table>,
    )

    const component = screen.getByRole('row')

    expect(component).toHaveClass('ams-table__row')
  })

  it('renders an extra class name', () => {
    render(
      <Table>
        <TableBody>
          <TableRow className="extra" />
        </TableBody>
      </Table>,
    )

    const component = screen.getByRole('row')

    expect(component).toHaveClass('ams-table__row extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLTableRowElement>()

    render(
      <Table>
        <TableBody>
          <TableRow ref={ref} />
        </TableBody>
      </Table>,
    )

    const component = screen.getByRole('row')

    expect(ref.current).toBe(component)
  })

  it('passes additional props', () => {
    render(<TableRow aria-hidden="false" data-test="data-test" id="id" />)

    const component = screen.getByRole('row')

    expect(component).toHaveAttribute('aria-hidden', 'false')
    expect(component).toHaveAttribute('id', 'id')
    expect(component).toHaveAttribute('data-test', 'data-test')
  })
})
