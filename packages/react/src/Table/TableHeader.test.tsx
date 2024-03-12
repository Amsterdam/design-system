import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Table } from './Table'
import { TableHeader } from './TableHeader'
import '@testing-library/jest-dom'

describe('Table header', () => {
  it('renders', () => {
    render(
      <Table>
        <TableHeader />
      </Table>,
    )

    const component = screen.getByRole('rowgroup')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(
      <Table>
        <TableHeader />
      </Table>,
    )

    const component = screen.getByRole('rowgroup')

    expect(component).toHaveClass('ams-table__header')
  })

  it('renders an additional class name', () => {
    render(
      <Table>
        <TableHeader className="extra" />
      </Table>,
    )

    const component = screen.getByRole('rowgroup')

    expect(component).toHaveClass('ams-table__header extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLTableSectionElement>()

    render(
      <Table>
        <TableHeader ref={ref} />
      </Table>,
    )

    const component = screen.getByRole('rowgroup')

    expect(ref.current).toBe(component)
  })
})
