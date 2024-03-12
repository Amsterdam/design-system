import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { Table } from './Table'
import { TableFooter } from './TableFooter'
import '@testing-library/jest-dom'

describe('Table footer', () => {
  it('renders', () => {
    render(
      <Table>
        <TableFooter />
      </Table>,
    )

    const component = screen.getByRole('rowgroup')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('renders a design system BEM class name', () => {
    render(
      <Table>
        <TableFooter />
      </Table>,
    )

    const component = screen.getByRole('rowgroup')

    expect(component).toHaveClass('ams-table__footer')
  })

  it('renders an additional class name', () => {
    render(
      <Table>
        <TableFooter className="extra" />
      </Table>,
    )

    const component = screen.getByRole('rowgroup')

    expect(component).toHaveClass('ams-table__footer extra')
  })

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLTableSectionElement>()

    render(
      <Table>
        <TableFooter ref={ref} />
      </Table>,
    )

    const component = screen.getByRole('rowgroup')

    expect(ref.current).toBe(component)
  })
})
