import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Table } from './Table'
import { TableBody } from './TableBody'
import { TableRow } from './TableRow'
import '@testing-library/jest-dom'

describe('Table row', () => {
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

  it('renders an additional class name', () => {
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
})
