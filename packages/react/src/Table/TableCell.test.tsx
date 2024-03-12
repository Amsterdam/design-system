import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Table } from './Table'
import { TableBody } from './TableBody'
import { TableCell } from './TableCell'
import { TableRow } from './TableRow'
import '@testing-library/jest-dom'

describe('Table cell', () => {
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

  it('renders an additional class name', () => {
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
})
