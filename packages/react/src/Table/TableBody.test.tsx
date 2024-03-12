import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Table } from './Table'
import { TableBody } from './TableBody'
import '@testing-library/jest-dom'

describe('Table body', () => {
  it('renders', () => {
    render(
      <Table>
        <TableBody />
      </Table>,
    )

    const component = screen.getByRole('rowgroup')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(
      <Table>
        <TableBody />
      </Table>,
    )

    const component = screen.getByRole('rowgroup')

    expect(component).toHaveClass('ams-table__body')
  })

  it('renders an additional class name', () => {
    render(
      <Table>
        <TableBody className="extra" />
      </Table>,
    )

    const component = screen.getByRole('rowgroup')

    expect(component).toHaveClass('ams-table__body extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLTableSectionElement>()

    render(
      <Table>
        <TableBody ref={ref} />
      </Table>,
    )

    const component = screen.getByRole('rowgroup')

    expect(ref.current).toBe(component)
  })
})
