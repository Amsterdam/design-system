import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Table } from './Table'
import { TableHeader } from './TableHeader'
import { TableHeaderCell } from './TableHeaderCell'
import { TableRow } from './TableRow'
import '@testing-library/jest-dom'

describe('Table header cell', () => {
  it('renders', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Data</TableHeaderCell>
          </TableRow>
        </TableHeader>
      </Table>,
    )

    const component = screen.getByRole('columnheader')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a rowheader when you specify it', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="row">Data</TableHeaderCell>
          </TableRow>
        </TableHeader>
      </Table>,
    )

    const component = screen.getByRole('rowheader')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Data</TableHeaderCell>
          </TableRow>
        </TableHeader>
      </Table>,
    )

    const component = screen.getByRole('columnheader')

    expect(component).toHaveClass('ams-table__header-cell')
  })

  it('renders an additional class name', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell className="extra">Data</TableHeaderCell>
          </TableRow>
        </TableHeader>
      </Table>,
    )

    const component = screen.getByRole('columnheader')

    expect(component).toHaveClass('ams-table__header-cell extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLTableCellElement>()

    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell ref={ref}>Data</TableHeaderCell>
          </TableRow>
        </TableHeader>
      </Table>,
    )

    const component = screen.getByRole('columnheader')

    expect(ref.current).toBe(component)
  })
})
